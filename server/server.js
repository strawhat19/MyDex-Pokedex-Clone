// Start Firebase Server
import Trainer from './models/Trainer.js';
import { Pokedex } from './db/Pokedex.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
const date = new Date();
const year = date.getFullYear();
const body = $(`body`);
const header = $(`header`);
const searchFilter = $(`.searchFilter`);
const footer = $(`footer`);
body.hide();

// Once Document is started, execute code below
document.addEventListener(`DOMContentLoaded`,event => {
    
    // Clearng Console
    // console.clear();

    // Fade in DOM Elements
    let fadeDuration = 1000;
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
    console.log(`Successfully Connected To The ${database.type.charAt(0).toUpperCase() + database.type.slice(1)} Server!`);

    // Register Trainer Function
    const registerTrainer = () => {

        let trainers = db.collection('trainers');
        if (trainers) {

            let count = localStorage.getItem(`Trainers Count`) || trainers.length;
            localStorage.setItem(`Trainers Count`, count);

            // Create New Trainer
            const newTrainer = new Trainer(
                /* id */ 0,
                /* name */ `Rakib`,
                /* teams */ [],
                /* badge */ 1,
                /* email */ `rakib@rakib.com`,
                /* friends */ [],
                /* pokemon */ [],
                /* password */ `pass`,
            );
    
            // Log Pokemon Trainers from Server
            trainers.onSnapshot(allTrainers => {
                const pokemonTrainers = allTrainers.docs.map(trainer => {
                    return trainer.data();
                })
                console.log(year);
                console.log(date);
                console.log(Pokedex);
                console.log(newTrainer);
                console.log(`Pokemon Trainers:`);
                console.log(pokemonTrainers);
            })
         } else {
             log(`No Trainers`);
         }

        // Begin Event Listern
        // let currenttrainer = JSON.parse(localStorage.getItem(`Current Logged In trainer`));
        // const trainernameText = $(`.trainernameText`);
        // let logoutButton = $(`.logoutButton`);
        // let signUpButton = $(`.signup`);

        // if (currenttrainer) {
        //     let trainername = currenttrainer.trainername;
        //     trainernameText.html('| ' + `<a class="profileLink" title="${trainername}'s profile" href="./profile.php">${trainername}</a>`);
        //     $(`.registrationButtons`).hide();
        //     $(`.logoutButton`).show();
        // } else {
        //     let trainername = `| Log In to View trainername`;
        //     trainernameText.html(trainername);
        //     $(`.registrationButtons`).show();
        //     $(`.logoutButton`).hide();
        // }

        // logoutButton.on(`click`, event => {
        //     logout();
        // })

        // signUpButton.on(`click`, event => {
        //     showForm(event, trainers, count);
        // })

    }

    registerTrainer();

    // trainers.add({
    //     id: 0,
    //     name: `Ricky`,
    //     message: `Hi`,
    //     createdAt: date,
    //     collection: `trainers`,
    //     year: year
    // })
    
})