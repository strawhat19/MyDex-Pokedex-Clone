// Imports
import { Pokedex } from '../../server/db/Pokedex.js';

// Import Global Helper Functions
import { log, str, parse, set, get, pageName, getCurrentPageName, testing, removeDuplicateObjFromArray, sortArrayById, arrayContain, arrayMatches, asyncFetch, genFetch, pokeFetch, capitalize, matchingObjectsFromArrays, sortObjByKeyLength  } from "../../server/server.js";

// Register Trainer Function
export const Registration = (trainerNumber,TrainerCount,trainersSTR,db,trainersDB,Trainers,emailField,loginForm,passwordField,loginButton,registerForm,trainerNameField,registerButton,loginEmail,loginPass,fadeDuration) => {

    loginForm.hide();

    registerButton.on(`click`, event => {
        // Show Registration Form if its Hidden
        if (registerForm.hasClass(`inactive`)) {
            loginForm.hide(fadeDuration);
            loginForm.addClass(`inactive`);
            loginForm.removeClass(`active`);
            registerForm.addClass(`active`);
            registerForm.removeClass(`inactive`);
            registerForm.show(fadeDuration);
        } else {
            // Register User Function
            let collection = `Trainers`;
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
                let id = trainerNumber;
                let badge = id + 1;
                const dateObject = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
                let uuid = `${badge} - ${capitalize(trainer)} - ${dateObject}`;
               
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
                let pokeArray = [Pokedex[x],Pokedex[y],Pokedex[z],Pokedex[a],Pokedex[b],Pokedex[c]]
                let pokeArray2 = [Pokedex[x1],Pokedex[y1],Pokedex[z1],Pokedex[a1],Pokedex[b1],Pokedex[b2]]
                let startingTeams = [{pokemon: pokeArray },{ pokemon: pokeArray2}];

                Trainers.doc(uuid).set({
                    badge: badge,
                    dateCreated: dateObject,
                    name: trainer,
                    email: email,
                    password: password,
                    teams: startingTeams,
                    friends: [],
                    pokemon: pokeArray,
                    uuid: uuid,
                    collection: collection
                }).then((trainerNumber) => {
                    Trainers.onSnapshot(allTrainers => {
                        // Async Changes to Trainers
                        const TrainersArray = allTrainers.docs.map(pokemonTrainer => pokemonTrainer.data());
                        const trainerEmails = TrainersArray.map(trainer => {
                            return trainer.email;
                        });

                        TrainerCount.doc(`${trainersSTR} Count`).update({
                            trainerCount: TrainersArray.length,
                            name: `Trainer Count`,
                            trainerEmails: trainerEmails
                        })
                        
                        window.location.href = `./trainers`;

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
                // Validation
                Trainers.where(`email`,`==`,email).get().then(user => {
                    user.forEach(doc => {
                        let match = doc.data();

                        if (match) {
                            alert(`We found a match for your email! Now enter your Password!`);
                            let pass = match.password;
                            
                            if (password == pass) {
                                // Login User
                                console.log(`Logged in as: `, match);
                                localStorage.setItem(`Current User`, match);
                                // window.location.href = `./trainer.php?=${match.name}`;
                            } else {
                                // Incorrect Password
                                alert(`Incorrect Password`);
                                return;
                            }

                        } else {
                            alert(`No Users Found!`);
                            return;
                        }
                    })
                });

                const getPasswords = () => {
                    Trainers.where(`password`,`==`,password).get().then(user => {
                        user.forEach(doc => {
                            let match = doc.data();
    
                            if (match) {
                                console.log(match);
                                return match;
    
                            } else {
                                alert(`No Users Found!`);
                                return;
                            }
                        })
                    });
                }

                getPasswords();

            }
        }
    })

}