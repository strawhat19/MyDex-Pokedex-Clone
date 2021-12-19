// Importing or Fetching All Generations of Pokemon
// Currently just Gens 1 - 4 for Development Simplicity, Will get more Gens Later
import {  arrayMatches, sortArrayById, sortObjByKeyLength, asyncFetch, genFetch, pokeFetch } from "../functions/functions.js";
import { evolutions } from './evolutions.js';
import Pokemon from "../models/Pokemon.js";
import { Gen1 } from "./Gens/gen1.js";
import { Gen2 } from "./Gens/gen2.js";
import { Gen3 } from "./Gens/gen3.js";
import { Gen4 } from "./Gens/gen4.js";

// Creating & Exporting Pokedex
export const Pokedex = Gen1.concat(Gen2).concat(Gen3).concat(Gen4);

const getMatches = () => {
    const currentEvos = [];
    let names = [];
    // const matches = [];
    // const namesState = [];
    // const currentEvosState = [];
    const matches = JSON.parse(localStorage.getItem(`matches`)) || [];
    const namesState = JSON.parse(localStorage.getItem(`names`)) || [];
    const currentEvosState = JSON.parse(localStorage.getItem(`currentEvos`)) || [];

    let uniqueNames = namesState.filter((item, index) => {
        return namesState.indexOf(item) === index;
    });

    // evolutions.forEach(evolution => {
    //     const pokemonMatch = evolution.pokemon;
    //     matches.push(pokemonMatch);
    //     localStorage.setItem(`matches`, JSON.stringify(matches));
    // })

    // Pokedex.forEach(pokemon => {
    //     names.push(pokemon.name);
    //     localStorage.setItem(`names`, JSON.stringify(names));
    // })

    // Array of Current Evolutons
    // console.log(Pokedex);
    // console.log(evolutions);

    // Array of Names
    // console.log(matches);
    // console.log(uniqueNames);
    console.log(currentEvosState);

 
    const getEvolutions = () => {
        uniqueNames.forEach(uName => {
            let filteredEvolutions = evolutions.filter(evolution => {
                if (evolution.pokemon == uName) {
                    currentEvos.push(evolution);
                    localStorage.setItem(`Current Evos`, JSON.stringify(currentEvos));
                    console.log(currentEvos);
                    return currentEvos;
                }
            });
            console.log(filteredEvolutions);
            return filteredEvolutions;
        })
    }

    // getEvolutions();

}

// getMatches();

// Generating Dex for DB
export const generateDex = (pokemonData, genArray, genNum) => {
  pokeFetch(pokemonData.species.url).then(dexEntries => {
    let descriptions = dexEntries.flavor_text_entries.filter(description => {
      if (description.language.name == `en`) {
        return description
      }
    })
    let uniqueDescriptions = [...new Set(descriptions)];
    let re = /\n/gi;
    let re2 = /\f/gi;
    let lastIndex = uniqueDescriptions.length - 1;
    let str2 = uniqueDescriptions[lastIndex].flavor_text;
    let str = uniqueDescriptions[lastIndex-1].flavor_text;
    let entry = str.replace(re, ` `);
    let entry2 = str2.replace(re, ` `);
    let pokeDescription = entry.replace(re2, ` `);
    let pokeDescription2 = entry2.replace(re2, ` `);

    const newPokemon = new Pokemon(
      pokemonData.name,
      pokemonData.id,
      pokemonData.id - 1,
      `Gen ${genNum}`,
      pokemonData.types,
      pokemonData.sprites.front_default,
      pokemonData.sprites.front_shiny,
      pokemonData.stats,
      pokemonData.height,
      pokemonData.weight,
      pokeDescription,
      pokeDescription2,
    );

    sortObjByKeyLength(newPokemon);
    genArray.push(newPokemon);
    const sortedGen = sortArrayById(genArray);
    localStorage.setItem(`Gen ${genNum}`, JSON.stringify(sortedGen));
  });

}

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

// I moved this code down for simplicity but if you want to reuse it, copy eveything below this line and paste it above the generateDex function

// Evolutions
// If Evolutions Exits
// let evolutionChains = JSON.parse(localStorage.getItem(`Evolutions`)) || [];

// Fetch Evolution Chain
// const evoFetch = (id) => {
//     let pokemonEvURL = `https://pokeapi.co/api/v2/evolution-chain/${id}/`;
//     fetch(pokemonEvURL).then(response => {
//         if (response.status == 404) {
//             throw Error(response.statusText + ` - ` + response.url);
//         }
//       return response.json();
//     }).then(evolution => {
//         let evolutionChain, pokemon, evolutionDetails, level, trigger, evolvesTo, finalEv, finalEvLev, finalEvTrigger;
//         evolutionChain = evolution.chain;
//         pokemon = evolutionChain.species.name;
//         evolutionDetails = evolutionChain.evolves_to[0].evolution_details[0];
//         level = evolutionDetails.min_level;
//         trigger = evolutionDetails.trigger.name;
//         evolvesTo = evolutionChain.evolves_to[0].species.name;
//         finalEv = evolutionChain.evolves_to[0].evolves_to[0].species.name;
//         finalEvLev = evolutionChain.evolves_to[0].evolves_to[0].evolution_details[0].min_level;
//         finalEvTrigger = evolutionChain.evolves_to[0].evolves_to[0].evolution_details[0].trigger.name;
//         let chain = {pokemon,level,trigger,evolvesTo,finalEv,finalEvLev,finalEvTrigger};
//         evolutionChains.push(chain);
//         localStorage.setItem(`Evolutions`, JSON.stringify(evolutionChains));
//     }).catch(function(error) {
//         console.log(error);
//     })
// }

// // Evolutions
// let names = [];
// Pokedex.forEach(pokemon => {
//     names.push(pokemon.name);
//     let ifArrayMatches = arrayMatches(names,pokemonWhoEvolve);
//     let currentEvos = ifArrayMatches.matches;
//     for ( var i = 1; i < currentEvos.length; i++ ) {
//         evoFetch(i);
//     }
// })