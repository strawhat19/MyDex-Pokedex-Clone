// Pokemon Fetch & Render
import { createDex } from "./createDex.js";
import { Gen1 } from "../db/gen1.js";
import { Gen2 } from "../db/gen2.js";
import { Gen3 } from "../db/gen3.js";
import { Gen4 } from "../db/gen4.js";
let pokedexContainer = $(`.pokedex`);
export const pokedex = Gen1.concat(Gen2).concat(Gen3).concat(Gen4);
export const renderPokemon = () => {
  pokedexContainer.html(``);
  pokedex.forEach((pokemon) => createDex(pokedexContainer, pokemon));
  let pokeDatas = document.querySelectorAll(`.pokeData`);
  pokeDatas.forEach((pokeData) => {
    let pokeName = pokeData.parentElement.title;
    let pokemon = document.querySelector(`.${pokeName}`);
    let pokePic = document.querySelector(`.${pokeName} .pokePic`);
    let pokeTypes = document.querySelector(`#${pokeName}-types`);
    let pokeID = document.querySelector(`#${pokeName}ID`);
    let descContainer = $(`.${pokeName} .description`);
    let altDescContainer = $(`.${pokeName} .altDescription`);
    document.querySelector( `.${pokeName} .defaultPic`).style.display = `flex`;
    document.querySelector(`.${pokeName} .shinyPic`).style.display = `none`;
    document.querySelector( `.${pokeName} .description`).style.display = `flex`;
    document.querySelector(`.${pokeName} .altDescription`).style.display = `none`;
    pokePic.addEventListener(`click`, (event) => {
      if (pokePic.classList.contains(`shiny`)) {
        pokeData.classList.remove(`shiny`);
        pokeData.classList.add(`default`);
        pokeTypes.classList.remove(`shiny`);
        pokeTypes.classList.add(`default`);
        pokeID.classList.remove(`shiny`);
        pokeID.classList.add(`default`);
        pokePic.classList.remove(`shiny`);
        pokePic.classList.add(`default`);
        pokemon.classList.remove(`shiny`);
        pokemon.classList.add(`default`);
        $(`.${pokeName} .defaultPic`).fadeIn(150);
        $(`.${pokeName} .shinyPic`).fadeOut(150);
        descContainer.fadeIn(150);
        altDescContainer.fadeOut(150);
      } else {
        $(`.${pokeName} .shinyPic`).fadeIn(150);
        $(`.${pokeName} .defaultPic`).fadeOut(150);
        pokeData.classList.add(`shiny`);
        pokeData.classList.remove(`default`);
        pokeTypes.classList.add(`shiny`);
        pokeTypes.classList.remove(`default`);
        pokeID.classList.add(`shiny`);
        pokeID.classList.remove(`default`);
        pokePic.classList.add(`shiny`);
        pokePic.classList.remove(`default`);
        pokemon.classList.add(`shiny`);
        pokemon.classList.remove(`default`);
        descContainer.fadeOut(150);
        altDescContainer.fadeIn(150);
      }
    });
  });
};

renderPokemon();
