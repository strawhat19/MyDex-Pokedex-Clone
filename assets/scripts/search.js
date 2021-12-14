import { renderPokemon } from "./render.js";
let gen1 = $(`.gen1`);
let gen2 = $(`.gen2`);
let gen3 = $(`.gen3`);
let gen4 = $(`.gen4`);

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
