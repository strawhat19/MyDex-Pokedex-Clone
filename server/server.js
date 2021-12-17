// Start Firebase Server
import { Pokedex } from './db/Pokedex.js';
import { Registration } from '../components/Registration/Registration.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyAq8WUEORkbQN40Z2Cnqixe2WRLZaeBfjc",
    authDomain: "mydex-pokedex-clone.firebaseapp.com",
    projectId: "mydex-pokedex-clone",
    storageBucket: "mydex-pokedex-clone.appspot.com",
    messagingSenderId: "1012586919899",
    appId: "1:1012586919899:web:fc18d626c71f403a2319fe"
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

    // Calling Database Collections
    let unsubscribe;
    const Trainers = db.collection('trainers');
    const pokemonTrainers = db.collection('pokemonTrainers');

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

    // Call the Registration Function for Desktop & Mobile Menu's
    Registration(unsubscribe,Trainers,pokemonTrainers,emailField,loginForm,passwordField,loginButton,registerForm,trainerNameField,registerButton,loginEmail,loginPass,fadeDuration);
    
    Registration(unsubscribe,Trainers,pokemonTrainers,mobileEmail,mobileLogin,mobilePassword,mobileLoginButton,mobileRegister,mobileTrainer, mobileRegisterButton, mobileEmailLogin, mobilePassLogin, fadeDuration);
    
    // It Accepts unsubscribe, trainersIndex, pokemonTrainers (Users), emailField, loginForm, passwordField, loginButton, registerForm, trainerNameField, registerButton, loginEmail, loginPass, fadeDuration
})