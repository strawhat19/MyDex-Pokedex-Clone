// Importing Trainer Model
// import Trainer from '../../server/models/Trainer.js';
// Register Trainer Function
export const Registration = (unsubscribe,index,trainers,emailField,loginForm,passwordField,loginButton,registerForm,trainerNameField,registerButton,loginEmail,loginPass,fadeDuration) => {
    
    registerForm.hide();
    registerButton.on(`click`,event => {
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
            let idRef = index.doc(`users`);
            idRef.get().then((doc) => {
                if (doc.exists) {
                    console.log(`Users:`, doc.data());
                } else {
                    // doc.data() will be undefined in this case
                    console.log(`0 Users!`);
                }
            }).catch((error) => {
                console.log(`Error:`, error);
            });
            unsubscribe = index.where(`key`,`==`,`trainers`).onSnapshot(query => {
                let id = query.docs.map(doc => doc.data().registeredUsers)[0] - 1;
                let badge = id + 1;
                let date = new Date();
                let email = emailField.val();
                let password = passwordField.val();
                let trainer = trainerNameField.val();
    
                trainers.doc(trainer).set({
                    id: id,
                    badge: badge,
                    name: trainer,
                    email: email,
                    password: password,
                    teams: [],
                    friends: [],
                    pokemon: [],
                    collection: `trainers`,
                    created: date
                }).then((successMessage) => {
                    successMessage = `Document Successfully Stored`;
                    console.log(successMessage);
                }).catch((error) => {
                    console.error("Error writing document: ", error);
                })
    
                // Log Pokemon Trainers from Server
                trainers.onSnapshot(allTrainers => {
                    const pokemonTrainers = allTrainers.docs.map(trainer => trainer.data());
                    console.log(`Pokemon Trainers:`);
                    console.log(pokemonTrainers);
    
                    index.doc(`users`).update({
                        registeredUsers: pokemonTrainers.length,
                        key: `trainers`
                    })
                }, error => {
                    console.log(error.message)
                })
            });

        }
    })

    loginButton.on(`click`,event=> {
        // Show Login Form if its Hidden
        if (loginForm.hasClass(`inactive`)) {
            registerForm.hide(fadeDuration);
            registerForm.addClass(`inactive`);
            registerForm.removeClass(`active`);
            loginForm.addClass(`active`);
            loginForm.removeClass(`inactive`);
            loginForm.show(fadeDuration);
        } else {
            // Log In User Function
            alert(`Login Form is Active!`);
            return;
        }
    })

}