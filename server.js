// Start Firebase Server
import Trainer from './assets/models/Trainer.js';
import { pokedex } from './assets/scripts/render.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyAq8WUEORkbQN40Z2Cnqixe2WRLZaeBfjc",
    authDomain: "mydex-pokedex-clone.firebaseapp.com",
    projectId: "mydex-pokedex-clone",
    storageBucket: "mydex-pokedex-clone.appspot.com",
    messagingSenderId: "1012586919899",
    appId: "1:1012586919899:web:fc18d626c71f403a2319fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const log = console.log;
log(database);
log(pokedex);

// Once Firebase Server is started, execute code below
document.addEventListener(`DOMContentLoaded`,event => {
    log(event);
    console.clear();
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
    const date = new Date();
    log(date);
    const year = date.getFullYear();
    const newTrainer = new Trainer(`Rakib`,1,0,`rakib987@gmail.com`,`pass`,[],[]);
    log(year);
    log(newTrainer);
    let trainers = db.collection('trainers');
    log(trainers);

    // Log Pokemon Trainers from Server
    trainers.onSnapshot(allTrainers => {
        const pokemonTrainers = allTrainers.docs.map(trainer => {
            return trainer.data();
        })
        log(`Pokemon Trainers:`);
        log(pokemonTrainers);
    })

    // trainers.add({
    //     id: 0,
    //     name: `Ricky`,
    //     message: `Hi`,
    //     createdAt: date,
    //     collection: `trainers`,
    //     year: year
    // })

    /* 
    
    constructor(
        id,
        name,
        teams,
        badge,
        email,
        friends,
        pokemon,
        password,
    )

    */
    
})