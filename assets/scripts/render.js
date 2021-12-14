// Pokemon Fetch & Render
import { Gen1 } from "../db/gen1.js";
import { Gen2 } from "../db/gen2.js";
import { Gen3 } from "../db/gen3.js";
import { Gen4 } from "../db/gen4.js";
let gen1 = $(`.gen1`);
let gen2 = $(`.gen2`);
let gen3 = $(`.gen3`);
let gen4 = $(`.gen4`);

import { createDex } from "./createDex.js";

export const renderPokemon = () => {
  Gen1.forEach((pokemon) => createDex(gen1, pokemon));
  Gen2.forEach((pokemon) => createDex(gen2, pokemon));
  Gen3.forEach((pokemon) => createDex(gen3, pokemon));
  Gen4.forEach((pokemon) => createDex(gen4, pokemon));
  let pokeDatas = document.querySelectorAll(`.pokeData`);
  pokeDatas.forEach((pokeData) => {
    let pokeName = pokeData.parentElement.title;
    let pokemon = document.querySelector(`.${pokeName}`);
    let pokeTypes = document.querySelector(`#${pokeName}-types`);
    let pokeID = document.querySelector(`#${pokeName}ID`);
    document.querySelector( `.${pokeName} .defaultPic`).style.display = `flex`;
    document.querySelector(`.${pokeName} .shinyPic`).style.display = `none`;
    pokeData.addEventListener(`click`, (event) => {
      if (pokeData.classList.contains(`shiny`)) {
        pokeData.classList.remove(`shiny`);
        pokeData.classList.add(`default`);
        pokeTypes.classList.remove(`shiny`);
        pokeTypes.classList.add(`default`);
        pokeID.classList.remove(`shiny`);
        pokeID.classList.add(`default`);
        pokemon.classList.remove(`shiny`);
        pokemon.classList.add(`default`);
        $(`.${pokeName} .defaultPic`).fadeIn(150);
        $(`.${pokeName} .shinyPic`).fadeOut(150);
      } else {
        $(`.${pokeName} .shinyPic`).fadeIn(150);
        $(`.${pokeName} .defaultPic`).fadeOut(150);
        pokeData.classList.add(`shiny`);
        pokeData.classList.remove(`default`);
        pokeTypes.classList.add(`shiny`);
        pokeTypes.classList.remove(`default`);
        pokeID.classList.add(`shiny`);
        pokeID.classList.remove(`default`);
        pokemon.classList.add(`shiny`);
        pokemon.classList.remove(`default`);
      }
    });
  });
};

renderPokemon();
