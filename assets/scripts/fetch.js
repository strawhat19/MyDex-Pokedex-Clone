import Pokemon from "../models/Pokemon.js";

export const asyncFetch = async (offset, limit) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );
  const pokemon = await response.json();
  return pokemon;
};

export const pokeFetch = async (url) => {
  const pokeResponse = await fetch(url);
  const pokeData = await pokeResponse.json();
  return pokeData;
};

// // Gen 1 Fetch
// let gen1 = [];
// asyncFetch(0, 151).then((generation1) => {
//   generation1.results.forEach((poke) => {
//     pokeFetch(poke.url).then((pokemonData) => {
//       pokeFetch(pokemonData.species.url).then(dexEntries => {
//         let descriptions = dexEntries.flavor_text_entries.filter(description => {
//           if (description.language.name == `en`) {
//             return description
//           }
//         })
//         let re = /\n/gi;
//         let re2 = /\f/gi;
//         let str = descriptions[0].flavor_text;
//         let entry = str.replace(re, ` `);
//         let pokeDescription = entry.replace(re2, ` `);
//         const newPokemon = new Pokemon(
//           pokemonData.name,
//           pokemonData.id,
//           pokemonData.types,
//           pokemonData.sprites.front_default,
//           pokemonData.sprites.front_shiny,
//           pokemonData.stats,
//           pokemonData.height,
//           pokemonData.weight,
//           pokeDescription
//         );
//         gen1.push(newPokemon);
//         localStorage.setItem(`Gen 1`, JSON.stringify(gen1));
//       });
//     })
//   });
// });

// // Gen 2 Fetch
// let gen2 = [];
// asyncFetch(151, 100).then((generation2) => {
//   generation2.results.forEach((poke) =>
//     pokeFetch(poke.url).then((pokemonData) => {
//       const newPokemon = new Pokemon(
//         pokemonData.name,
//         pokemonData.id,
//         pokemonData.types,
//         pokemonData.abilities,
//         pokemonData.sprites.front_default,
//         pokemonData.sprites.front_shiny,
//         pokemonData.sprites.front_female,
//         pokemonData.sprites.front_shiny_female,
//         pokemonData.sprites.other,
//         pokemonData.sprites.versions,
//         pokemonData.stats,
//         pokemonData.height,
//         pokemonData.weight
//       );
//       gen2.push(newPokemon);
//       localStorage.setItem(`Gen 2`, JSON.stringify(gen2));
//     })
//   );
// });

// // Gen 3 Fetch
// let gen3 = [];
// asyncFetch(251, 135).then((generation3) => {
//   generation3.results.forEach((poke) =>
//     pokeFetch(poke.url).then((pokemonData) => {
//       const newPokemon = new Pokemon(
//         pokemonData.name,
//         pokemonData.id,
//         pokemonData.types,
//         pokemonData.abilities,
//         pokemonData.sprites.front_default,
//         pokemonData.sprites.front_shiny,
//         pokemonData.sprites.front_female,
//         pokemonData.sprites.front_shiny_female,
//         pokemonData.sprites.other,
//         pokemonData.sprites.versions,
//         pokemonData.stats,
//         pokemonData.height,
//         pokemonData.weight
//       );
//       gen3.push(newPokemon);
//       localStorage.setItem(`Gen 3`, JSON.stringify(gen3));
//     })
//   );
// });

// // Gen 4 Fetch
// let gen4 = [];
// asyncFetch(386, 107).then((generation4) => {
//   generation4.results.forEach((poke) =>
//     pokeFetch(poke.url).then((pokemonData) => {
//       const newPokemon = new Pokemon(
//         pokemonData.name,
//         pokemonData.id,
//         pokemonData.types,
//         pokemonData.abilities,
//         pokemonData.sprites.front_default,
//         pokemonData.sprites.front_shiny,
//         pokemonData.sprites.front_female,
//         pokemonData.sprites.front_shiny_female,
//         pokemonData.sprites.other,
//         pokemonData.sprites.versions,
//         pokemonData.stats,
//         pokemonData.height,
//         pokemonData.weight
//       );
//       gen4.push(newPokemon);
//       localStorage.setItem(`Gen 4`, JSON.stringify(gen4));
//     })
//   );
// });
