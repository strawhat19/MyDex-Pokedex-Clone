// Start Firebase Server
import { Pokedex } from './db/Pokedex.js';
import { Registration } from '../components/Registration/Registration.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyAG60xtP7kAhXSC6PqPJM6y3MPBNqHF4qE",
    authDomain: "mydex-pokedex-clone-925fc.firebaseapp.com",
    projectId: "mydex-pokedex-clone-925fc",
    storageBucket: "mydex-pokedex-clone-925fc.appspot.com",
    messagingSenderId: "603945130926",
    appId: "1:603945130926:web:0d0e7dae151f9cefb8863f"
  };

// Initialize Firebase Server
const app = initializeApp(firebaseConfig);
const body = $(`body`);
const header = $(`header`);
const searchFilter = $(`.searchFilter`);
const footer = $(`footer`);
let fadeDuration = 1000;
body.hide();

// Once Document is started, execute code below
document.addEventListener(`DOMContentLoaded`,event => {

    // Fade in DOM Elements
    body.fadeIn(fadeDuration);
    footer.css(`opacity`,`1`);
    footer.fadeIn(fadeDuration);
    header.css(`opacity`,`1`);
    header.fadeIn(fadeDuration);
    searchFilter.css(`opacity`,`1`);
    searchFilter.fadeIn(fadeDuration);
    
    // Starting the Database from the Server
    firebase.initializeApp(firebaseConfig);
    const database = getFirestore(app);
    const db = firebase.firestore();
    console.log(`Successfully Connected To The ${database.type.charAt(0).toUpperCase() + database.type.slice(1)} Server`);

    // Desktop
    const emailField = $(`#email`);
    const loginPass = $(`#loginPass`);
    const loginForm = $(`#loginForm`);
    const loginEmail = $(`#loginEmail`);
    const passwordField = $(`#password`);
    const loginButton = $(`#loginButton`);
    const registerForm = $(`#registerForm`);
    const trainerNameField = $(`#trainerName`);
    const registerButton = $(`#registerButton`);
    loginForm.hide();

    // Mobile
    const mobileEmail = $(`#mobileEmail`);
    const mobileTrainer = $(`#mobileTrainer`);
    const mobileLogin = $(`#mobileLoginForm`);
    const mobilePassword = $(`#mobilePassword`);
    const mobilePassLogin = $(`#mobilePassLogin`);
    const mobileRegister = $(`#mobileRegisterForm`);
    const mobileEmailLogin = $(`#mobileEmailLogin`);
    const mobileLoginButton = $(`#mobileLoginButton`);
    const mobileRegisterButton = $(`#mobileRegisterButton`);

    // Creating & Calling Database Collections
    const trainersSTR = `Trainers`;
    const Trainers = db.collection(trainersSTR);
    const TrainerCount = db.collection(`${trainersSTR} Count`);

    // Function to Run for Creating Registraion
    const generateTrainers = () => {

        // Getting Trainer Array at Beginning of App State
        Trainers.get().then((currentTrainer) => {
            var sortObject = (object) => {
                Object.keys(object)
                .sort()
                .reduce(function (acc, key) { 
                    acc[key] = object[key];
                    return acc;
                }, {});
            } 

            // Storing it in a Variable
            const trainersDB = currentTrainer.docs.map(trainer => trainer.data());
     
            console.log(`Current Trainer Count: `, trainersDB.length);
            console.log(`Current Trainers: `, trainersDB);

            // Mobile Registration Form
            Registration(trainersDB.length,TrainerCount, trainersSTR,db,trainersDB,Trainers,mobileEmail,mobileLogin,mobilePassword,mobileLoginButton,mobileRegister,mobileTrainer, mobileRegisterButton, mobileEmailLogin, mobilePassLogin, fadeDuration);

            // Desktop Registration Form
            Registration(trainersDB.length,TrainerCount, trainersSTR,db,trainersDB,Trainers,emailField,loginForm,passwordField,loginButton,registerForm,trainerNameField,registerButton,loginEmail,loginPass,fadeDuration);
            
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
                name: `Trainer Count`
            });
            generateTrainers();
        }
            
    }).catch((error) => {
        console.log(error);
    });

})