// Register Trainer Function
export const Registration = (trainerNumber,TrainerCount,trainersSTR,db,trainersDB,Trainers,emailField,loginForm,passwordField,loginButton,registerForm,trainerNameField,registerButton,loginEmail,loginPass,fadeDuration) => {

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

            // Validation
            if (!email || !password || !trainer) {
                // Invalid Inputs
                alert(`Please Enter Data Into The Fields!`);
                return;
            } else {
                // Register User Data
                var capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);
                let id = trainerNumber;
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
                }).then((success) => {
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
                        let newUser = TrainersArray[trainerNumber];

                        TrainerCount.doc(`${trainersSTR} Count`).update({
                            trainerCount: TrainersArray.length,
                            name: `Trainer Count`
                        })

                        console.log(`Updated Trainer Count: `, trainerNumber + 1);
                        console.log(`Updated Pokemon Trainers: `, TrainersArray);
                        console.log(`New Trainer: `, newUser);

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
                alert(`Please Enter Data Into The Fields!`);
                return;
            } else {
                // Login User In
            }
        }
    })

}