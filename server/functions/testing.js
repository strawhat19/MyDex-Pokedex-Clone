// Testing
import { evolutions } from "../db/evolutions.js";
import { Pokedex } from "../db/Pokedex.js";
import { arrayMatches, removeDuplicateObjFromArray } from "./functions.js";

const generateEvos = () => {
    const matches = JSON.parse(localStorage.getItem(`Evolutions`)) || [];
    const namesState = JSON.parse(localStorage.getItem(`Current Pokedex`)) || [];
    const currentEvosState = JSON.parse(localStorage.getItem(`Current Evolution Chains`)) || [];
    const currentPokeEvolState = JSON.parse(localStorage.getItem(`Current Pokemon With Evolutions`)) || [];

    // Array of Names
    let uniqueNames = namesState.filter((item, index) => {
        return namesState.indexOf(item) === index;
    });

    const currentEvoNames = arrayMatches(matches,uniqueNames);

    const currentEvos = [];
    const currentPokemonThatEvolve = [];

    const uniqueEvos = removeDuplicateObjFromArray(currentEvosState);
    console.log(`Current Evolution Chains: `, uniqueEvos);
    const uniquePokeEvols = removeDuplicateObjFromArray(currentPokeEvolState);
    console.log(`Current Pokemon With Evolutions: `, uniquePokeEvols);
 
    currentEvoNames.matches.forEach(match => {

        Pokedex.filter(pokemon => {
            if (pokemon.name == match) {
                currentPokemonThatEvolve.push(pokemon);
                localStorage.setItem(`Current Pokemon With Evolutions`, JSON.stringify(currentPokemonThatEvolve));
            }
        })

    })

    currentEvoNames.matches.forEach(match => {

        evolutions.filter(evolution => {
            if (evolution.pokemon == match) {
                currentEvos.push(evolution);
                localStorage.setItem(`Current Evolution Chains`, JSON.stringify(currentEvos));
            }
        })

    })

}

generateEvos();

const reWriteEvos = () => {
    const names = [];
    const matches = [];

    evolutions.forEach(evolution => {
        matches.push(evolution.pokemon);
        localStorage.setItem(`Evolutions`, JSON.stringify(matches));
    })

    Pokedex.forEach(pokemon => {
        names.push(pokemon.name);
        localStorage.setItem(`Current Pokedex`, JSON.stringify(names));
    })

    console.log(matches);
    console.log(uniqueNames);
    console.log(currentEvosState);
    console.log(evolutions);

}

// reWriteEvos();