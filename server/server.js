// Start App
import { Registration } from '../components/Registration/Registration.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

// DOM
export const body = $(`body`);
export const header = $(`header`);
export const searchFilter = $(`.searchFilter`);
export const footer = $(`footer`);
let fadeDuration = 2500;

 // Desktop
 export const emailField = $(`#email`);
 export const loginPass = $(`#loginPass`);
 export const loginForm = $(`#loginForm`);
 export const loginEmail = $(`#loginEmail`);
 export const passwordField = $(`#password`);
 export const loginButton = $(`#loginButton`);
 export const registerForm = $(`#registerForm`);
 export const trainerNameField = $(`#trainerName`);
 export const registerButton = $(`#registerButton`);

 // Mobile
 export const mobileEmail = $(`#mobileEmail`);
 export const mobileTrainer = $(`#mobileTrainer`);
 export const mobileLogin = $(`#mobileLoginForm`);
 export const mobilePassword = $(`#mobilePassword`);
 export const mobilePassLogin = $(`#mobilePassLogin`);
 export const mobileRegister = $(`#mobileRegisterForm`);
 export const mobileEmailLogin = $(`#mobileEmailLogin`);
 export const mobileLoginButton = $(`#mobileLoginButton`);
 export const mobileRegisterButton = $(`#mobileRegisterButton`);

// Start Front End
body.hide();

// Fade in DOM Elements
body.fadeIn(fadeDuration);
footer.css(`opacity`,`1`);
footer.fadeIn(fadeDuration);
header.css(`opacity`,`1`);
header.fadeIn(fadeDuration);
searchFilter.css(`opacity`,`1`);
searchFilter.fadeIn(fadeDuration);

const firebaseConfig = {
    apiKey: "AIzaSyAG60xtP7kAhXSC6PqPJM6y3MPBNqHF4qE",
    authDomain: "mydex-pokedex-clone-925fc.firebaseapp.com",
    projectId: "mydex-pokedex-clone-925fc",
    storageBucket: "mydex-pokedex-clone-925fc.appspot.com",
    messagingSenderId: "603945130926",
    appId: "1:603945130926:web:0d0e7dae151f9cefb8863f"
};

// Initialize Firebase Server
export const app = initializeApp(firebaseConfig);

// Once Document is started, execute code below
document.addEventListener(`DOMContentLoaded`, event => {
    
    // Starting the Database from the Server
    firebase.initializeApp(firebaseConfig);
    const database = getFirestore(app);
    const db = firebase.firestore();
    console.log(`Successfully Connected To The ${database.type.charAt(0).toUpperCase() + database.type.slice(1)} Server`);

    // Creating & Calling Database Collections
    const trainersSTR = `Trainers`;
    const Trainers = db.collection(trainersSTR);
    const TrainerCount = db.collection(`${trainersSTR} Count`);

    // Function to Run for Creating Registraion
    const generateTrainers = () => {

        // Getting Trainer Array at Beginning of App State
        Trainers.get().then((users) => {

            // Storing it in a Variable
            const currentTrainers = users.docs.map(trainer => trainer.data());
            const newestTrainer = currentTrainers.filter(item => item.badge == currentTrainers.length);
            const userCount = currentTrainers.length;
            const trainerEmails = currentTrainers.map(trainer => {
                return trainer.email;
            });
            
            // Log Users at Initial State
            console.log(`Current Trainer Count: `, userCount);
            console.log(`Current Trainers: `, currentTrainers);
            console.log(`Trainer Emails`, trainerEmails);
            console.log(`Newest Trainer`, newestTrainer);

            // Mobile Registration Form
            Registration(currentTrainers.length,TrainerCount, trainersSTR,db,currentTrainers,Trainers,mobileEmail,mobileLogin,mobilePassword,mobileLoginButton,mobileRegister,mobileTrainer, mobileRegisterButton, mobileEmailLogin, mobilePassLogin, fadeDuration);

            // Desktop Registration Form
            Registration(currentTrainers.length,TrainerCount, trainersSTR,db,currentTrainers,Trainers,emailField,loginForm,passwordField,loginButton,registerForm,trainerNameField,registerButton,loginEmail,loginPass,fadeDuration);
            
            // It Accepts the TrainerCount, Trainer String, Database, Trainers, a Trainers Array, pokemonTrainers (Users), emailField, loginForm, passwordField, loginButton, registerForm, trainerNameField, registerButton, loginEmail, loginPass, fadeDuration
        })
    }

    // Check If Trainers Count Exists in DB
    let ifTrainers = TrainerCount.doc(`${trainersSTR} Count`);
    ifTrainers.get().then((tCount) => {
        if (tCount.exists) {
            generateTrainers();
        } else {
            // Create Trainer Count
            TrainerCount.doc(`${trainersSTR} Count`).set({
                trainerCount: 0,
                name: `Trainer Count`,
                trainerEmails: []
            });
            generateTrainers();
        }
            
    }).catch((error) => {
        console.log(error);
    });

})