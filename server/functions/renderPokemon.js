// Pokemon Import // Fetch & Render
import { Pokedex } from '../db/Pokedex.js';

// Import Global Helper Functions
import { capitalize } from "../server.js";

const pokedexContainer = $(`.pokedex`);

// Rendering Custom Stat Names // Labels
export const renderStatName = (statName) => {
  switch (statName) {
    case `hp`:
      return `HEALTH`;
    case `attack`:
      return `ATTACK`;
    case `defense`:
      return `DEFENSE`;
    case `special-attack`:
      return `SP. ATK`;
    case `special-defense`:
      return `SP. DEF`;
    case `speed`:
      return `SPEED`;
  }
};

const string = `Hello`;
const renderPokeButtons = (pokemon) => {
  if (typeof pokemon.evolution === typeof string) {
    const saveButtons = `
        <button title="Save ${pokemon.name}" class="pokeLink saveButton">Login to Save</button>
    `;
    return saveButtons;
  } else {
    const evoButtons = `
      <button title="View Evolution of ${capitalize(pokemon.name)}" id="${pokemon.name}" class="pokeLink evoButton">View Evolution</button>
  `;
    return evoButtons;
  }
}

// Creating the Individual Pokemon Elements
export const createPokemon = (pokedex, pokemon) => {
  const {name,id,index,image,shiny,size,stats,types,generation,weight,description,altDescription} = pokemon;
  const pokemonName = capitalize(name);

  let pokeElement = $(
    `
      <div class="pokemon ${pokemon.name}" id="${pokemon.id}" title="${pokemon.name}">
        <div class="pokeData">
            <div class="statsRow">
              <div class="stats">
                  <span class="stat ${pokemon.stats[0].stat.name}" title="${pokemon.stats[0].stat.name}">${renderStatName(pokemon.stats[0].stat.name)}: ${pokemon.stats[0].base_stat}</span>
                  <span class="stat ${pokemon.stats[1].stat.name}" title="${pokemon.stats[1].stat.name}">${renderStatName(pokemon.stats[1].stat.name)}: ${pokemon.stats[1].base_stat}</span>
                  <span class="stat ${pokemon.stats[2].stat.name}" title="${pokemon.stats[2].stat.name}">${renderStatName(pokemon.stats[2].stat.name)}: ${pokemon.stats[2].base_stat}</span>
                  <span class="stat weight" title="weight">WEIGHT: ${pokemon.weight} kg</span>
              </div>
              <div id="${pokemon.id}" class="pokeImage ${pokemon.name}" alt="Image of ${pokemon.name}"></div>
              <div class="stats">
                  <span class="stat ${pokemon.stats[3].stat.name}" title="${pokemon.stats[3].stat.name}">${renderStatName(pokemon.stats[3].stat.name)}: ${pokemon.stats[3].base_stat}</span>
                  <span class="stat ${pokemon.stats[4].stat.name}" title="${pokemon.stats[4].stat.name}">${renderStatName(pokemon.stats[4].stat.name)}: ${pokemon.stats[4].base_stat}</span>
                  <span class="stat ${pokemon.stats[5].stat.name}" title="${pokemon.stats[5].stat.name}">${renderStatName(pokemon.stats[5].stat.name)}: ${pokemon.stats[5].base_stat}</span>
                  <span class="stat size" title="size">SIZE: ${pokemon.size} m</span>
              </div>
            </div>
        </div>
        <div class="pokePic" id="${pokemon.id}">
            <div class="defaultPic Pic" style="background: url(${pokemon.image})" id="${pokemon.id}">
                <div class="inner" id="${pokemon.id}">
                    <div class="poke pokeLower pokeForm">Default</div>
                    <div class="poke pokeName">${pokemonName}</div>
                    <div class="poke pokeLower pokeGen">${pokemon.generation}</div>
                </div>
            </div>
            <div class="shinyPic Pic" style="background: url(${pokemon.shiny})" id="${pokemon.id}">
                <div class="inner" id="${pokemon.id}">
                    <div class="poke pokeLower pokeForm">Shiny</div>
                    <div class="poke pokeName">${pokemonName}</div>
                    <div class="poke pokeLower pokeGen">${pokemon.generation}</div>
                </div>
            </div>
        </div>
      </div>
    `
  );

  if (pokemon.types.length == 1) {
    pokeElement.addClass(`single`);
    let pokeTypes = $(
      `
        <div class="types" id="${pokemon.name}-types">
          <span class="type single ${pokemon.types[0].type.name}" id="${pokemon.types[0].type.name}">${pokemon.types[0].type.name}</span>
          <div class="descriptions">
            <p class="description">
              ${pokemon.description}
            </p>
            <p class="altDescription">
              ${pokemon.altDescription}
            </p>
          </div>
        </div>
        <div class="registerPokemon">
          ${renderPokeButtons(pokemon)}
        </div>
        <div class="pokeID" id="${pokemon.name}ID">${pokemon.id}</div>
        <div class="pokeIndex" id="${pokemon.name}Index">${pokedex.children().length + 1}</div>
        `
    );
    pokeElement.append(pokeTypes);
  } else {
    pokeElement.addClass(`multiple`);
    let pokeTypes = $(
      `
        <div class="types" id="${pokemon.name}-types">
          <span class="type ${pokemon.types[0].type.name}" id="${pokemon.types[0].type.name}">${pokemon.types[0].type.name}</span>
          <span class="type ${pokemon.types[1].type.name}" id="${pokemon.types[1].type.name}">${pokemon.types[1].type.name}</span>
          <div class="descriptions">
            <p class="description">
              ${pokemon.description}
            </p>
            <p class="altDescription">
              ${pokemon.altDescription}
            </p>
          </div>
        </div>
        <div class="registerPokemon">
            ${renderPokeButtons(pokemon)}
          </div>
        <div class="pokeID" id="${pokemon.name}ID">${pokemon.id}</div>
        <div class="pokeIndex" id="${pokemon.name}Index">${pokedex.children().length + 1}</div>
        `
    );
    pokeElement.append(pokeTypes);
  }
  pokedex.append(pokeElement);
};

// Render Pokemon to DOM Function
export const renderPokemon = (domElementToRenderThem,Pokedex) => {

  domElementToRenderThem.html(``);
  Pokedex.forEach((pokemon) => createPokemon(domElementToRenderThem, pokemon));
  let pokeDatas = document.querySelectorAll(`.pokeData`);

  const clickSwitcher = () => {
    pokeDatas.forEach((pokeData) => {
      var pokeName = pokeData.parentElement.title;
      var pokeID = document.querySelector(`#${pokeName}ID`);

      document.querySelector( `.${pokeName} .defaultPic`).style.display = `flex`;
      document.querySelector(`.${pokeName} .shinyPic`).style.display = `none`;
      document.querySelector( `.${pokeName} .description`).style.display = `flex`;
      document.querySelector(`.${pokeName} .altDescription`).style.display = `none`;

      pokeID.addEventListener(`click`, (event) => {
        let pokemon = event.target.parentElement;
        let pokeTypes = pokemon.children[2];

        let descContainer = $(event.target).parent().find(`.description`);
        let altDescContainer = $(event.target).parent().find(`.altDescription`);
        let defaultPic = $(event.target).parent().find(`.defaultPic`);
        let shinyPic = $(event.target).parent().find(`.shinyPic`);

        // Click to turn Pokemon to Default
        if (pokeID.classList.contains(`shiny`)) {
          pokeData.classList.remove(`shiny`);
          pokeData.classList.add(`default`);
          pokeTypes.classList.remove(`shiny`);
          pokeTypes.classList.add(`default`);
          event.target.classList.remove(`shiny`);
          event.target.classList.add(`default`);
          pokemon.classList.remove(`shiny`);
          pokemon.classList.add(`default`);
          descContainer.show();
          altDescContainer.hide();
          defaultPic.show();
          shinyPic.hide();
        } else { // Click to turn Pokemon to Shiny
          pokeData.classList.add(`shiny`);
          pokeData.classList.remove(`default`);
          pokeTypes.classList.add(`shiny`);
          pokeTypes.classList.remove(`default`);
          event.target.classList.add(`shiny`);
          event.target.classList.remove(`default`);
          pokemon.classList.add(`shiny`);
          pokemon.classList.remove(`default`);
          descContainer.hide();
          altDescContainer.show();
          defaultPic.hide();
          shinyPic.show();
        }
      });
    });
  }

  clickSwitcher();
};

renderPokemon(pokedexContainer,Pokedex);