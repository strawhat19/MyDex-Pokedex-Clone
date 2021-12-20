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

// Server Config, Keep This Hidden if Possible
const firebaseConfig = {
    apiKey: "AIzaSyAG60xtP7kAhXSC6PqPJM6y3MPBNqHF4qE",
    authDomain: "mydex-pokedex-clone-925fc.firebaseapp.com",
    projectId: "mydex-pokedex-clone-925fc",
    storageBucket: "mydex-pokedex-clone-925fc.appspot.com",
    messagingSenderId: "603945130926",
    appId: "1:603945130926:web:0d0e7dae151f9cefb8863f"
};

// Start // Initialize Firebase Server
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

// Exports & Global Helper Functions
export const str = JSON.stringify;
export const parse = JSON.parse;
export const testing = $(`#testing`);

// Shorten Set Item
export const set = (itemKey,item) => {
    localStorage.setItem(itemKey,item);
}

// Capitalize First Letter of Word
export const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// Shorten Get Item
export const get = (itemKey) => {
    let parsed = JSON.parse(localStorage.getItem(itemKey));
    return parsed;
}

// Check if an Array Contains Key With Value
export const arrayContain = (array,key,value) => {
    let query = array.filter(entry => entry.key == value);
    return query
 }

// Sort Array By ID
export const sortArrayById = (arrayWithIDS) => {
    const sortedArray = [...new Set(arrayWithIDS)].sort((a, b) => a.id - b.id);
    return sortedArray;
}

// Fetch More Pokemon Data
export const pokeFetch = async (url) => {
    const pokeResponse = await fetch(url);
    const pokeData = await pokeResponse.json();
    return pokeData;
};

// Fetch One Generation At A Time
export const genFetch = async (offset, limit) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
  const pokemon = await response.json();
  return pokemon;
};

// Get Current Page Name
export const getCurrentPageName = (path,page) => {
    path = window.location.pathname;
    page = path.split("/").pop();
    return page
}

// pageName Variable
export const pageName = getCurrentPageName();

// Sort Keys in Object Alphabetically
export const sortObjectAlphabetically = (object) => {
    Object.keys(object)
    .sort()
    .reduce(function (acc, key) { 
        acc[key] = object[key];
        return acc;
    }, {});
}

// Sort Object by Key Length
export const sortObjByKeyLength = (obj) => {
    let object = {};
    let keyArray = Object.keys(obj);
    keyArray.sort();
    keyArray.forEach(function(item) {object[item] = obj[item]});
    return object;
}

// Remove Duplicate Objects from an Array
export const removeDuplicateObjFromArray = (array) => {
    const uniqueArray = array.filter((value, index) => {
        const _value = JSON.stringify(value);
        return index === array.findIndex(obj => {
            return JSON.stringify(obj) === _value;
        });
    });
    return uniqueArray;
}

// If Two Arrays Share Common Values, This Function Will Return The Matching Values
export const arrayMatches = (array1,array2) => {
    let ifMatch = array1.some(contents => array2.indexOf(contents) >= 0);
    if (ifMatch) { // Return Matching Values from Arrays 
        // UnderScoreJS
        return _.intersection(array1, array2);
    } else {
        return `No Matches!`;
    }
}

// Async Fetching
export const asyncFetch = async (url) => {
    const response = await fetch(url).then(response => response.json()).catch(function(error) {
        console.log(`No Response! `, error);
    })
    if (!response) {
        console.log(`No Response!`);
    } else {
        console.log(`Succes!`);
    }
};

// Matching Objects after Removing Duplicates from Arrays of Objects
export const matchingObjectsFromArrays = ( arrayOfObjects1 , arrayOfObjects2 ) => {
    // Remove Duplicates
    const removeDuplicateObjFromArray = (array) => {
        const uniqueArray = array.filter((value, index) => {
            const _value = JSON.stringify(value);
            return index === array.findIndex(obj => {
                return JSON.stringify(obj) === _value;
            });
        });
        return uniqueArray;
    }
    // Set Matches
    let uniqueMatches1 = removeDuplicateObjFromArray(arrayOfObjects1);
    let uniqueMatches2 = removeDuplicateObjFromArray(arrayOfObjects2);
    // Return Matches
    let ifArrayMatches = arrayMatches(uniqueMatches1,uniqueMatches2);
    return ifArrayMatches;
}

// Get User Badges
export const getBadges = (value) => {
    Trainers.where(`collection`,`==`,value).get().then(user => {
        user.forEach(doc => {
            let match = doc.data();
            if (match) {
                IDS.push(match.badge);
                let uniqueIDS = [...new Set(IDS)];
                console.log(uniqueIDS);
                if (uniqueIDS.includes(trainerNumber)) trainerNumber = trainerNumber + 1;
                return uniqueIDS;
            } else {
                alert(`No Users Found!`);
                return;
            }
        })
    });
}

// Detect Pokemon Element Sizes
export const detectPokemonSizes = () => {
    let heights = [];
    let widths = [];
    window.addEventListener(`DOMContentLoaded`,event => {
        let pokemon = document.querySelectorAll(`.pokemon`);
        pokemon.forEach(poke => {
            let height = poke.offsetHeight;
            let width = poke.offsetWidth;
            widths.push(width);
            heights.push(height);
            const Widths = [...new Set(widths)].sort((a, b) => a - b).reverse();
            const Heights = [...new Set(heights)].sort((a, b) => a - b).reverse();
            console.log(`Widths:`);
            console.log(Widths);
            console.log(`Heights:`);
            console.log(Heights);
        })
    })
}

// Detect Lengths of Pokemon Descriptions
export const detectDescriptionSizes = () => {
    let re = /\n/gi;
    let re2 = /\f/gi;
    let descriptions = [];
    let altDescriptions = [];
    window.addEventListener(`DOMContentLoaded`,event => {
        let pokemonDescriptions = document.querySelectorAll(`.pokemon .description`);
        let pokemonAltDescriptions = document.querySelectorAll(`.pokemon .altDescription`);
        pokemonDescriptions.forEach(description => {
            let entry = description.textContent.replace(re, ` `);
            let pokeDescription = entry.replace(re2, ` `);
            descriptions.push(pokeDescription.split(``).length);
            const Descriptions = [...new Set(descriptions)].sort((a, b) => a - b).reverse();
            console.log(`Descriptions:`);
            console.log(`${description.parentElement.parentElement.parentElement.title} ${Descriptions[0]}`);
        })
        pokemonAltDescriptions.forEach(description => {
            let entry = description.textContent.replace(re, ` `);
            let pokeDescription = entry.replace(re2, ` `);
            altDescriptions.push(pokeDescription.split(``).length);
            const AltDescriptions = [...new Set(altDescriptions)].sort((a, b) => a - b).reverse();
            console.log(`Alt Descriptions:`);
            console.log(`${description.parentElement.parentElement.parentElement.title} ${AltDescriptions[0]}`);
        })
    })
}

// Export Console Logging
export const log = (message,itemYouConsoleLogged) => {
    const messageName = `Expert Console Logging Function!`;
    const Message = `This is a Custom Console.Log Function, and here's what you just console logged:`;
    const troubleShootingMessage = `But to really troubleshoot an error, make sure you use the actual console.log so the Inspector shows you where in the code the error was!`;
    const returnMessage = `You can also set a variable = log(message,itemYouConsoleLogged) or just log(message), and then do varialbe.addEventListener or vaiable.forEach and what not!`;
    if (itemYouConsoleLogged) {
        let itemYouConsoleLoggedData = {
            messageName,
            message,
            itemYouConsoleLogged,
        }
        console.log(message);
        console.log(Message,`
         
        `,itemYouConsoleLogged,`
         
        `, troubleShootingMessage);
        console.log(itemYouConsoleLoggedData);
        return itemYouConsoleLoggedData;
    } else {
        itemYouConsoleLogged = message;
        console.log(messageName);
        console.log(Message,`
         
        `,itemYouConsoleLogged,`
         
        `, troubleShootingMessage);
        return itemYouConsoleLogged;
    }
}