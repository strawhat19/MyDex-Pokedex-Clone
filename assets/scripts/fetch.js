import { generateDex } from "./generateDex.js";
import { pokeFetch } from "./generateDex.js";

// export const asyncFetch = async (offset, limit) => {
//   const response = await fetch(
//     `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
//   );
//   const pokemon = await response.json();
//   return pokemon;
// };

// Gen 1 Fetch
// let gen1 = [];
// asyncFetch(0, 151).then((generation1) => {
//   generation1.results.forEach((poke) => {
//     pokeFetch(poke.url).then((pokemonData) => {
//       generateDex(pokemonData, gen1, 1);
//     })
//   });
// });

// Gen 2 Fetch
// let gen2 = [];
// asyncFetch(151, 100).then((generation2) => {
//   generation2.results.forEach((poke) => {
//     pokeFetch(poke.url).then((pokemonData) => {
//       generateDex(pokemonData, gen2, 2);
//     })
//   });
// });

// Gen 3 Fetch
// let gen3 = [];
// asyncFetch(251, 135).then((generation3) => {
//   generation3.results.forEach((poke) => {
//     pokeFetch(poke.url).then((pokemonData) => {
//       generateDex(pokemonData, gen3, 3);
//     })
//   });
// });

// Gen 4 Fetch
// let gen4 = [];
// asyncFetch(386, 107).then((generation4) => {
//   generation4.results.forEach((poke) => {
//     pokeFetch(poke.url).then((pokemonData) => {
//       generateDex(pokemonData, gen4, 4);
//     })
//   });
// });