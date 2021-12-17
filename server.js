import User from './assets/models/User.js';
import { pokedex } from './assets/scripts/render.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';
const newUser = new User(`Rakib`,1,0,`rakib987@gmail.com`,`pass`,[],[]);

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
const db = getFirestore(app);

document.addEventListener(`DOMContentLoaded`,event => {
    console.clear();
    console.log(newUser);
    const date = new Date();
    const year = date.getFullYear();
    firebase.initializeApp(firebaseConfig);
    const database = firebase.firestore();
    let pokemon = database.collection('pokemon');
    let users = database.collection('users');

    // pokedex.forEach(poke => {
    //     console.log(poke);
    //     pokemon.add(poke);
    // })

    // users.add({
    //     id: 0,
    //     name: `Ricky`,
    //     message: `Hi`,
    //     createdAt: date,
    //     collection: `Users`,
    //     year: year
    // })

    pokemon.onSnapshot(snap => {
        const items = snap.docs.map(doc => {
            return doc.data();
        })
        console.log(items);
    })

    // users.onSnapshot(snap => {
    //     const items = snap.docs.map(doc => {
    //         return doc.data();
    //     })
    //     console.log(items);
    // })
})