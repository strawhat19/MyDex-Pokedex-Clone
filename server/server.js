// Start Firebase Server
import Trainer from './models/Trainer.js';
import { pokedex } from './db/';
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
const log = console.log;
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const date = new Date();
const year = date.getFullYear();

// Once Document is started, execute code below
document.addEventListener(`DOMContentLoaded`,event => {

    // Clearng Console
    console.clear();

    // Starting the Database from the Server
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    // Register Trainer Function
    const registerTrainer = () => {
        log(`registered!`);
    }

    registerTrainer();

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

    let trainers = db.collection('trainers');
    if (trainers) {

        // Log Pokemon Trainers from Server
        trainers.onSnapshot(allTrainers => {
            const pokemonTrainers = allTrainers.docs.map(trainer => {
                return trainer.data();
            })
            log(year);
            log(date);
            log(event);
            log(database);
            log(pokedex);
            log(trainers);
            log(newTrainer);
            log(`Pokemon Trainers:`);
            log(pokemonTrainers);
        })
     } else {
         log(`No Trainers`);
     }
    

    // trainers.add({
    //     id: 0,
    //     name: `Ricky`,
    //     message: `Hi`,
    //     createdAt: date,
    //     collection: `trainers`,
    //     year: year
    // })
    
})