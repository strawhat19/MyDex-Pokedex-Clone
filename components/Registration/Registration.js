// Import Pokedex
import { Pokedex } from '../../server/db/Pokedex.js';

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
                var x = Math.floor(Math.random() * Pokedex.length);
                var y = Math.floor(Math.random() * x);
                var z = Math.floor(Math.random() * y);
                var a = Math.floor(Math.random() * z);
                var b = Math.floor(Math.random() * a);
                var c = Math.floor(Math.random() * b);
                var x1 = Math.floor(Math.random() * Pokedex.length);
                var y1 = Math.floor(Math.random() * x1);
                var z1 = Math.floor(Math.random() * y1);
                var a1 = Math.floor(Math.random() * z1);
                var b1 = Math.floor(Math.random() * a1);
                var b2 = Math.floor(Math.random() * b1);
                let pokeArray = [
                    Pokedex[x],
                    Pokedex[y],
                    Pokedex[z],
                    Pokedex[a],
                    Pokedex[b],
                    Pokedex[c],
                ]
                let pokeArray2 = [
                    Pokedex[x1],
                    Pokedex[y1],
                    Pokedex[z1],
                    Pokedex[a1],
                    Pokedex[b1],
                    Pokedex[b2],
              ]
                let startingTeams = [
                    {
                       pokemon: pokeArray 
                    },
                    {
                        pokemon: pokeArray2
                    }
                ]
                // console.log(date);
                const dateObject = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
                let uuid = `${badge} - ${capitalize(trainer)} - ${dateObject}`;

                Trainers.doc(uuid).set({
                    badge: badge,
                    dateCreated: dateObject,
                    name: trainer,
                    email: email,
                    password: password,
                    teams: startingTeams,
                    friends: [],
                    pokemon: pokeArray,
                    uuid: uuid
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
                            name: `Trainer Count`,
                            trainers: TrainersArray
                        })
                        
                        // let number = TrainersArray.length;
                        // console.log(`Updated Trainer Count: `, TrainersArray.length);
                        // console.log(`Updated Pokemon Trainers: `, TrainersArray);
                        // console.log(`New Trainer: `, TrainersArray.filter(item => item.badge == number));

                        window.location.href = `./login.php`;

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
            let email = loginEmail.val();
            let password = loginPass.val();

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
                    console.log(matches.then(data => console.log(data)));
                }

                Login(matches);
            }
        }
    })

}