import { Pokedex } from "../db/Pokedex.js";
import { renderPokemon } from "./renderPokemon.js";
import { capitalize } from "../server.js";

const evolutions = [];
let pokemonToRender = window.location.search.replace(`?=`,``);

let banner = $(`.banner`);
let bannerContent = $(`.bannerContent`);
let heading = banner.find(`h1`);
heading.html(`${capitalize(pokemonToRender).split(`-`)[0]} Details`)
bannerContent.addClass(`pageBanner`);

let paragraph = banner.find(`p`);
paragraph.remove();

let pokemonInfo = $(`#pokemonInfo`);
// pokemonInfo.html(``);

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

console.log(evolutions);
renderPokemon(pokemonInfo,evolutions);

let regButton1 = pokemonInfo.find(`.regButton`);
regButton1.remove();