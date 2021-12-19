<!-- Search & Filter -->
<script type="module" class="search">

import { Pokedex } from './server/db/Pokedex.js';
import { renderPokemon } from "./server/functions/renderPokemon.js";
const pokedexContainer = $(`.pokedex`);
export let pokeSearch = $(`#pokeSearch`);
export let typeSearch = $(`#typeSearch`);
export let pokeNumContainer = $(`.pokeNum`);
pokeNumContainer.html(pokedexContainer.children().length);

// Search & Filter Functionality
pokeSearch.on(`input`, (event) => {
    let searchTerm = $(event.target).val();
    if ($(event.target).val() == ``) {
        renderPokemon(pokedexContainer,Pokedex);
        pokeNumContainer.html(pokedexContainer.children().length);
    }
    var pokemons = Array.from(document.querySelectorAll(`.pokemon`));
    const filteredPokemon = pokemons.filter((pokemon) =>
      pokemon.title.includes(searchTerm)
    );
    let pokeNum = filteredPokemon.length;
    pokedexContainer.html(filteredPokemon);
    filteredPokemon.forEach(pokemonElement => pokemonElement.children[5].innerHTML = filteredPokemon.indexOf(pokemonElement) + 1);
    pokeNumContainer.html(pokeNum);
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

typeSearch.on(`input`, (event) => {
    let searchTerm = $(event.target).val();
    if ($(event.target).val() == ``) {
        renderPokemon(pokedexContainer,Pokedex);
        pokeNumContainer.html(pokedexContainer.children().length);
    }
    var pokemons = Array.from(document.querySelectorAll(`.pokemon`));
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
    let pokeNum = filteredPokemon.length;
    pokedexContainer.html(filteredPokemon);
    filteredPokemon.forEach(pokemonElement => pokemonElement.children[5].innerHTML = filteredPokemon.indexOf(pokemonElement) + 1);
    pokeNumContainer.html(pokeNum);
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
    
if ($(event.target).val() == ``) {
      renderPokemon(pokedexContainer, Pokedex);
      pokeNumContainer.html(pokedexContainer.children().length);
    } else if (pokedexContainer.children().length == 0) {
        renderPokemon(pokedexContainer, Pokedex);
        pokeNumContainer.html(pokedexContainer.children().length);
    }
});

</script>

<form class="searchFilter">
    <div class="formLabel">Search & Filter by Name or Type</div>
    <div class="inputs">
        <input id="pokeSearch" type="text" name="search" placeholder="Search Pokemon by Name..." />
        <span class="pokeNum"></span>
        <input id="typeSearch" type="text" name="typeSearch" placeholder="Search Pokemon by Type..." />
    </div>
</form>