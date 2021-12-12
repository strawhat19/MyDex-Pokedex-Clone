// Pokemon Fetch & Render
import { Gen1 } from "../db/gen1.js";
import { Gen2 } from "../db/gen2.js";
import { Gen3 } from "../db/gen3.js";
import { Gen4 } from "../db/gen4.js";
let gen1 = $(`.gen1`);
let gen2 = $(`.gen2`);
let gen3 = $(`.gen3`);
let gen4 = $(`.gen4`);

const createDex = (gen, pokemon) => {
  let pokeElement = $(
    `
    <div class="pokemon ${pokemon.name}" id="${pokemon.id}" title="${pokemon.name}">
        <div class="openModal hidden">
            <div class="pokeTitle">
                <span class="pokeName">${pokemon.name}</span>
            </div>
            <div id="${pokemon.id}" class="pokeImage ${pokemon.name}" alt="Image of ${pokemon.name}" style="background: url(${pokemon.image})"></div>
        </div>
        <div class="modal">
          <div class="modalContent" style="background: url(${pokemon.shiny}),linear-gradient(var(--main),var(--main))" id="${pokemon.id}">
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
      <div class="types hidden">
        <span class="type single ${pokemon.types[0].type.name}" id="${pokemon.types[0].type.name}">${pokemon.types[0].type.name}</span>
        <div class="viewDetails">
          <a class="pokeLink" href="/pokemon.php?=${pokemon.name}">View Details</a>
        </div>
      </div>
      `
    );
    pokeElement.append(pokeTypes);
  } else {
    let pokeTypes = $(
      `
      <div class="types hidden">
        <span class="type ${pokemon.types[0].type.name}" id="${pokemon.types[0].type.name}">${pokemon.types[0].type.name}</span>
        <span class="type ${pokemon.types[1].type.name}" id="${pokemon.types[1].type.name}">${pokemon.types[1].type.name}</span>
        <div class="viewDetails">
          <a class="pokeLink" href="/pokemon.php?=${pokemon.name}">View Details</a>
        </div>
      </div>
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
    document.querySelector(`.${pokeName} .modalContent`).style.display = `none`;
    modal.addEventListener(`click`, (event) => {
      if (modal.classList.contains(`active`)) {
        modal.classList.remove(`active`);
        modal.classList.add(`hidden`);
        $(`.${pokeName} .modalContent`).fadeOut(150);
      } else {
        $(`.${pokeName} .modalContent`).fadeIn(150);
        modal.classList.add(`active`);
        modal.classList.remove(`hidden`);
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
