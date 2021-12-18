// Register Trainer Function
export const Registration = (trainerNumber,TrainerCount,trainersSTR,db,trainersDB,Trainers,emailField,loginForm,passwordField,loginButton,registerForm,trainerNameField,registerButton,loginEmail,loginPass,fadeDuration) => {
    loginForm.hide();

    registerButton.attr(`data-registered`,trainerNumber);
    let userNumber = parseInt(registerButton.attr(`data-registered`)) || trainerNumber;

    registerButton.on(`click`, event => {
        // Show Registration Form if its Hidden
        if (registerForm.hasClass(`inactive`)) {
            loginForm.hide(fadeDuration);
            loginForm.addClass(`inactive`);
            loginForm.removeClass(`active`);
            registerForm.addClass(`active`);
            registerForm.removeClass(`inactive`);
            registerForm.show(fadeDuration);
            // loginButton.hide(fadeDuration);
        } else {
            // Register User Function
            let date = new Date();
            let email = emailField.val();
            let password = passwordField.val();
            let trainer = trainerNameField.val();
            registerButton.attr(`data-registered`,trainerNumber++);

            // Validation
            if (!email || !password || !trainer) {
                // Invalid Inputs
                alert(`Please Enter Data Into The Fields!`);
                return;
            } else {
                // Register User Data
                var capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);
                let id = userNumber;
                let badge = id + 1;
                let uuid = `${badge} - ${capitalize(trainer)} - ${date}`;

                // console.clear();

                Trainers.doc(uuid).set({
                    badge: uuid,
                    name: trainer,
                    email: email,
                    password: password,
                    teams: [],
                    friends: [],
                    pokemon: [],
                    index: badge
                }).then((trainerNumber) => {
                    Trainers.onSnapshot(allTrainers => {
                        var sortObject = (object) => {
                            Object.keys(object)
                            .sort()
                            .reduce(function (acc, key) { 
                                acc[key] = object[key];
                                return acc;
                            }, {});
                        } 
                        // Async Changes to Trainers
                        const TrainersArray = allTrainers.docs.map(pokemonTrainer => pokemonTrainer.data());

                        TrainerCount.doc(`${trainersSTR} Count`).update({
                            trainerCount: TrainersArray.length,
                            name: `Trainer Count`
                        })

                        let number = TrainersArray.length;

                        console.log(`Updated Trainer Count: `, TrainersArray.length);
                        console.log(`Updated Pokemon Trainers: `, TrainersArray);
                        console.log(`New Trainer: `, TrainersArray.filter(item => item.index == number));

                        setTimeout(() => {
                            window.location.href = `./login.php`;
                        },1500);

                    }, error => {
                        console.log(error.message)
                    })
                }).catch((error) => {
                    console.log(error);
                })
              
            }
        }
    })

    // User Clicks Login
    loginButton.on(`click`, event => {
        // Show Login Form if its Hidden
        if (loginForm.hasClass(`inactive`)) {
            registerForm.hide(fadeDuration);
            registerForm.addClass(`inactive`);
            registerForm.removeClass(`active`);
            loginForm.addClass(`active`);
            loginForm.removeClass(`inactive`);
            loginForm.show(fadeDuration);
        //    registerButton.hide(fadeDuration);
        } else {
            // Log In User Function
            let email = emailField.val();
            let password = passwordField.val();

            if (!email || !password) {
                // Invalid Inputs
                alert(`Please Enter Data Into The Login Fields!`);
                return;
            } else {
                // Login User In
                console.log(email);
                console.log(password);
                const matches = Trainers.where(`email`,`==`,email).get().then(user => {
                    user.forEach(doc => {
                        return doc.data();
                    })
                });

                const Login = (matches) => {
                    console.log(matches);
                }

                Login(matches);
            }
        }
    })

}