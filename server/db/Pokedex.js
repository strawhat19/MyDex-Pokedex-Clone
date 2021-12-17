// Importing or Fetching All Generations of Pokemon
// Currently just Gens 1 - 4 for Development Simplicity, Will get more Gens Later
import Pokemon from "../models/Pokemon.js";
import { Gen1 } from "./Gens/gen1.js";
import { Gen2 } from "./Gens/gen2.js";
import { Gen3 } from "./Gens/gen3.js";
import { Gen4 } from "./Gens/gen4.js";

// Creating & Exporting Pokedex
let pokeID = 1;
export const Pokedex = Gen1.concat(Gen2).concat(Gen3).concat(Gen4);
let url = `https://pokeapi.co/api/v2/evolution-chain/${pokeID}/`;

// Fetch More Pokemon Data
// export const pokeFetch = async (url) => {
//     const pokeResponse = await fetch(url);
//     const pokeData = await pokeResponse.json();
//     return pokeData;
//   };

// export const genFetch = async (offset, limit) => {
//   const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
//   const pokemon = await response.json();
//   return pokemon;
// };

// export const evoFetch = async (url) => {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
// };

// evoFetch(url).then(evolution => {
//     console.log(evolution);
// });

// export const generateDex = (pokemonData, genArray, genNum) => {
//   pokeFetch(pokemonData.species.url).then(dexEntries => {
//     let descriptions = dexEntries.flavor_text_entries.filter(description => {
//       if (description.language.name == `en`) {
//         return description
//       }
//     })
//     descriptions = [...new Set(descriptions)];
//     let re = /\n/gi;
//     let re2 = /\f/gi;
//     let lastIndex = descriptions.length - 1;
//     let str2 = descriptions[lastIndex].flavor_text;
//     let str = descriptions[lastIndex-1].flavor_text;
//     let entry = str.replace(re, ` `);
//     let entry2 = str2.replace(re, ` `);
//     let pokeDescription = entry.replace(re2, ` `);
//     let pokeDescription2 = entry2.replace(re2, ` `);
//     const newPokemon = new Pokemon(
//       pokemonData.name,
//       pokemonData.id,
//       pokemonData.id - 1,
//       `Gen ${genNum}`,
//       pokemonData.types,
//       pokemonData.sprites.front_default,
//       pokemonData.sprites.front_shiny,
//       pokemonData.stats,
//       pokemonData.height,
//       pokemonData.weight,
//       pokeDescription,
//       pokeDescription2
//     );
//     console.log(newPokemon);
//     genArray.push(newPokemon);
//     localStorage.setItem(`Gen ${genNum}`, JSON.stringify(genArray));
//   });
// }

// Gen 1 Fetch
// let gen1 = [];
// genFetch(0, 151).then((generation1) => {
//   generation1.results.forEach((poke) => {
//     pokeFetch(poke.url).then((pokemonData) => {
//       generateDex(pokemonData, gen1, 1);
//     })
//   });
// });

// Gen 2 Fetch
// let gen2 = [];
// genFetch(151, 100).then((generation2) => {
//   generation2.results.forEach((poke) => {
//     pokeFetch(poke.url).then((pokemonData) => {
//       generateDex(pokemonData, gen2, 2);
//     })
//   });
// });

// Gen 3 Fetch
// let gen3 = [];
// genFetch(251, 135).then((generation3) => {
//   generation3.results.forEach((poke) => {
//     pokeFetch(poke.url).then((pokemonData) => {
//       generateDex(pokemonData, gen3, 3);
//     })
//   });
// });

// Gen 4 Fetch
// let gen4 = [];
// genFetch(386, 107).then((generation4) => {
//   generation4.results.forEach((poke) => {
//     pokeFetch(poke.url).then((pokemonData) => {
//       generateDex(pokemonData, gen4, 4);
//     })
//   });
// });