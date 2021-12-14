// Pokemon Fetch & Render
import { Gen1 } from "../db/gen1.js";
import { Gen2 } from "../db/gen2.js";
import { Gen3 } from "../db/gen3.js";
import { Gen4 } from "../db/gen4.js";
let gen1 = $(`.gen1`);
let gen2 = $(`.gen2`);
let gen3 = $(`.gen3`);
let gen4 = $(`.gen4`);

console.log(Gen1);

const renderStatName = (statName) => {
  switch (statName) {
    case `hp`:
      return `HP`;
    case `attack`:
      return `ATK`;
    case `defense`:
      return `DEF`;
    case `special-attack`:
      return `SPA`;
    case `special-defense`:
      return `SPD`;
    case `speed`:
      return `SPE`;
  }
};

const createDex = (gen, pokemon) => {
  let pokeElement = $(
    `
    <div class="pokemon ${pokemon.name}" id="${pokemon.id}" title="${
      pokemon.name
    }">
        <div class="openModal hidden">
            <div class="statsRow">
              <div class="stats stats1">
                  <span class="stat ${renderStatName(
                    pokemon.stats[0].stat.name
                  )}">${renderStatName(pokemon.stats[0].stat.name)}: ${
      pokemon.stats[0].base_stat
    }</span>
                  <span class="stat ${renderStatName(
                    pokemon.stats[1].stat.name
                  )}">${renderStatName(pokemon.stats[1].stat.name)}: ${
      pokemon.stats[1].base_stat
    }</span>
                  <span class="stat ${renderStatName(
                    pokemon.stats[2].stat.name
                  )}">${renderStatName(pokemon.stats[2].stat.name)}: ${
      pokemon.stats[2].base_stat
    }</span>
              </div>
              <div id="${pokemon.id}" class="pokeImage ${
      pokemon.name
    }" alt="Image of ${pokemon.name}"></div>
              <div class="stats stats2">
                  <span class="stat ${renderStatName(
                    pokemon.stats[3].stat.name
                  )}">${renderStatName(pokemon.stats[3].stat.name)}: ${
      pokemon.stats[3].base_stat
    }</span>
                  <span class="stat ${renderStatName(
                    pokemon.stats[4].stat.name
                  )}">${renderStatName(pokemon.stats[4].stat.name)}: ${
      pokemon.stats[4].base_stat
    }</span>
                  <span class="stat ${renderStatName(
                    pokemon.stats[5].stat.name
                  )}">${renderStatName(pokemon.stats[5].stat.name)}: ${
      pokemon.stats[5].base_stat
    }</span>
              </div>
            </div>
        </div>
        <div class="modal" id="${pokemon.id}">
          <div class="normalContent" style="background: url(${
            pokemon.image
          })" id="${pokemon.id}">
              <div class="innerModal" id="${pokemon.id}">
                <div class="pokeName">${pokemon.name}</div>
                <div></div>
                <div class="shinyText"></div>
              </div>
            </div>
            <div class="modalContent" style="background: url(${
              pokemon.shiny
            })" id="${pokemon.id}">
                <div class="innerModal" id="${pokemon.id}">
                  <div class="pokeName">Shiny ${pokemon.name}</div>
                  <div></div>
                  <div class="shinyText"></div>
                </div>
            </div>
      </div>
    </div>
      `
  );

  if (pokemon.types.length == 1) {
    let pokeTypes = $(
      `
      <div class="types" id="${pokemon.name}-types">
        <span class="type single ${pokemon.types[0].type.name}" id="${pokemon.types[0].type.name}">${pokemon.types[0].type.name}</span>
        <div class="viewDetails">
          <a class="pokeLink" href="/pokemon.php?=${pokemon.name}">View Details</a>
        </div>
      </div>
      <div class="pokeID" id="${pokemon.name}ID">${pokemon.id}</div>
      `
    );
    pokeElement.append(pokeTypes);
  } else {
    let pokeTypes = $(
      `
      <div class="types" id="${pokemon.name}-types">
        <span class="type ${pokemon.types[0].type.name}" id="${pokemon.types[0].type.name}">${pokemon.types[0].type.name}</span>
        <span class="type ${pokemon.types[1].type.name}" id="${pokemon.types[1].type.name}">${pokemon.types[1].type.name}</span>
        <div class="viewDetails">
          <a class="pokeLink" href="/pokemon.php?=${pokemon.name}">View Details</a>
        </div>
      </div>
      <div class="pokeID" id="${pokemon.name}ID">${pokemon.id}</div>
      `
    );
    pokeElement.append(pokeTypes);
  }
  gen.append(pokeElement);
};

// let pokeLinks = document.querySelectorAll(`.pokeLink`);
// console.log(pokeLinks);
// pokeLinks.forEach((link) => {
//   link.addEventListener(`click`, (event) => {
//     console.log(event);
//     console.log(event.target);
//   });
// });

const renderPokemon = () => {
  Gen1.forEach((pokemon) => createDex(gen1, pokemon));
  Gen2.forEach((pokemon) => createDex(gen2, pokemon));
  Gen3.forEach((pokemon) => createDex(gen3, pokemon));
  Gen4.forEach((pokemon) => createDex(gen4, pokemon));
  let modals = document.querySelectorAll(`.openModal`);
  modals.forEach((modal) => {
    let pokeName = modal.parentElement.title;
    let pokemon = document.querySelector(`.${pokeName}`);
    let pokeTypes = document.querySelector(`#${pokeName}-types`);
    let pokeID = document.querySelector(`#${pokeName}ID`);
    document.querySelector(
      `.${pokeName} .normalContent`
    ).style.display = `flex`;
    document.querySelector(`.${pokeName} .modalContent`).style.display = `none`;
    modal.addEventListener(`click`, (event) => {
      if (modal.classList.contains(`active`)) {
        modal.classList.remove(`active`);
        modal.classList.add(`hidden`);
        pokeTypes.classList.remove(`active`);
        pokeTypes.classList.add(`hidden`);
        pokeID.classList.remove(`active`);
        pokeID.classList.add(`hidden`);
        pokemon.classList.remove(`active`);
        pokemon.classList.add(`hidden`);

        $(`.${pokeName} .normalContent`).fadeIn(150);
        $(`.${pokeName} .modalContent`).fadeOut(150);
      } else {
        $(`.${pokeName} .modalContent`).fadeIn(150);
        $(`.${pokeName} .normalContent`).fadeOut(150);
        modal.classList.add(`active`);
        modal.classList.remove(`hidden`);
        pokeTypes.classList.add(`active`);
        pokeTypes.classList.remove(`hidden`);
        pokeID.classList.add(`active`);
        pokeID.classList.remove(`hidden`);
        pokemon.classList.add(`active`);
        pokemon.classList.remove(`hidden`);
      }
    });
  });
};

renderPokemon();

// Search & Filter Functionality
let pokeSearch = $(`#pokeSearch`);
pokeSearch.on(`input`, (event) => {
  let searchTerm = $(event.target).val();

  if ($(event.target).val() == ``) {
    renderPokemon();
  }

  const pokemons = Array.from(document.querySelectorAll(`.pokemon`));
  const filteredPokemon = pokemons.filter((pokemon) =>
    pokemon.title.includes(searchTerm)
  );

  gen1.html(filteredPokemon);
  gen2.html(filteredPokemon);
  gen3.html(filteredPokemon);
  gen4.html(filteredPokemon);

  // Highlighting Searched Text on Pokemon Names
  const pokeNames = document.querySelectorAll(`.pokeName`);
  pokeNames.forEach((name) => {
    let filteredCharacters = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    let filter = new RegExp(`${filteredCharacters}`, `gi`);
    name.innerHTML = name.textContent.replace(
      filter,
      (match) => `<mark>${match}</mark>`
    );
  });
});

let typeSearch = $(`#typeSearch`);
typeSearch.on(`input`, (event) => {
  let searchTerm = $(event.target).val();

  if ($(event.target).val() == ``) {
    renderPokemon();
  }

  const pokemons = Array.from(document.querySelectorAll(`.pokemon`));
  const filteredPokemon = pokemons.filter((pokemon) => {
    if (pokemon.children[2].children.length > 1) {
      if (
        pokemon.children[2].children[0].id.includes(searchTerm) ||
        pokemon.children[2].children[1].id.includes(searchTerm)
      ) {
        return pokemon;
      }
    } else {
      if (pokemon.children[2].children[0].id.includes(searchTerm)) {
        return pokemon;
      }
    }
  });

  gen1.html(filteredPokemon);
  gen2.html(filteredPokemon);
  gen3.html(filteredPokemon);
  gen4.html(filteredPokemon);

  // Highlighting Searched Text on Pokemon Types
  const pokeMonTypes = document.querySelectorAll(`.type`);
  pokeMonTypes.forEach((type) => {
    let filteredCharacters = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    let filter = new RegExp(`${filteredCharacters}`, `gi`);
    type.innerHTML = type.textContent.replace(
      filter,
      (match) => `<mark>${match}</mark>`
    );
  });
});
