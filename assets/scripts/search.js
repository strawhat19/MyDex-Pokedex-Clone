import { renderPokemon } from "./render.js";
let pokedexContainer = $(`.pokedex`);

// Search & Filter Functionality
export let pokeSearch = $(`#pokeSearch`);
pokeSearch.on(`input`, (event) => {
  let searchTerm = $(event.target).val();

  if ($(event.target).val() == ``) {
    renderPokemon();
  }

  const pokemons = Array.from(document.querySelectorAll(`.pokemon`));
  const filteredPokemon = pokemons.filter((pokemon) =>
    pokemon.title.includes(searchTerm)
  );

  pokedexContainer.html(filteredPokemon);

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

export let typeSearch = $(`#typeSearch`);
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
  
  pokedexContainer.html(filteredPokemon);

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
