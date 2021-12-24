// Imports
import { renderPokemon } from "./renderPokemon.js";
import { Pokedex } from "../db/Pokedex.js";
import { capitalize } from "../server.js";

// Constants
let pokemonToRender = window.location.search.replace(`?=`,``);
const pokemonInfo = $(`#pokemonInfo`);
const evolutions = [];

// Variables
let bannerContent = $(`.bannerContent`);
let paragraph = bannerContent.find(`p`);
let heading = bannerContent.find(`h1`);

// DOM Changes
heading.html(`${capitalize(pokemonToRender).split(`-`)[0]} Details`);
bannerContent.addClass(`pageBanner`);
paragraph.remove();

// Getting Pokemon from DB
let pokemonFromDex = Pokedex.filter(pokemon => {
    if (pokemon.name === pokemonToRender) {
        return pokemon;
    }
})

let babyName = pokemonFromDex[0].evolution.name;
let pokemonBaby = Pokedex.filter(pokemon => {
    if (pokemon.name === babyName) {
        return pokemon;
    }
});

evolutions.push(pokemonBaby[0]);

let pokemonEvolvesTo = pokemonFromDex[0].evolution.evolvesTo;

let pokemon2 = Pokedex.filter(pokemon => {
    if (pokemon.name === pokemonEvolvesTo) {
        return pokemon;
    }
});

evolutions.push(pokemon2[0]);

let pokemonEntries = Object.entries(pokemonFromDex[0].evolution);
if (pokemonEntries.length > 5) {
    let pokemonFinalEv = pokemonFromDex[0].evolution.finalEvolution;
    let pokemon3 = Pokedex.filter(pokemon => {
        if (pokemon.name === pokemonFinalEv) {
            return pokemon;
        }
    });
    evolutions.push(pokemon3[0]);
}

renderPokemon(pokemonInfo,evolutions);

// After Function DOM Changes
// User Document.QuerySelectorAll
let evoButton = pokemonInfo.find(`.evoButton`);
let pokeIndex = pokemonInfo.find(`.pokeIndex`);
console.log(parseInt(pokeIndex.html()));
if (parseInt(pokeIndex.html()) < 3) {
    console.log(parseInt(pokeIndex.html()));
} 
evoButton.remove();