import { generateDex } from "./generateDex.js";
import { pokeFetch } from "./generateDex.js";

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

// let pokeID = 1;
// let url = `https://pokeapi.co/api/v2/evolution-chain/${pokeID}/`;
// evoFetch(url).then(evolution => {
//     console.log(evolution);
// });

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