// Import Global Helper Functions
// import { log, str, fetchData, pageName, getCurrentPageName, testing, arrayContain, asyncFetch, genFetch, capitalize } from '../server.js';

// Without Starting Server
import { str, set, get, parse, pokeFetch, arrayMatches, sortArrayById, sortObjByKeyLength, matchingObjectsFromArrays, removeDuplicateObjFromArray, genFetch, capitalize } from '../functions/globalFunctions.js';

// DB
import Pokemon from "../models/Pokemon.js";
import { Gen1 } from "./Gens/gen1.js";
import { Gen2 } from "./Gens/gen2.js";
import { Gen3 } from "./Gens/gen3.js";
import { Gen4 } from "./Gens/gen4.js";
import { Gen5 } from "./Gens/gen5.js";
import { Gen6 } from "./Gens/gen6.js";
import { Gen7 } from "./Gens/gen7.js";
import { Gen8 } from "./Gens/gen8.js";
import { Evolutions } from "./Evolutions/Evolutions.js";

// Creating & Exporting Pokedex
export const Pokedex = Gen1.concat(Gen2).concat(Gen3).concat(Gen4).concat(Gen5).concat(Gen6).concat(Gen7).concat(Gen8);

// Generating Pokedex
export const generatePokedex = (pokemonData, genArray, genNum) => {

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
    let pokemonName = pokemonData.name;

    let evolutionChain = Evolutions.filter(evo => {
      if (evo.name == pokemonName || evo.evolvesTo == pokemonName || evo.finalEvolution == pokemonName) {
        return evo;
      }
    });

    if (evolutionChain.length > 0) {

      const evolution = evolutionChain[0];

        // Creating New Pokedex Entries 
        const newPokemon = new Pokemon(
          pokemonData.name,                     // name
          pokemonData.id,                       // id
          pokemonData.id - 1,                   // index
          `Gen ${genNum}`,                      // generation
          pokemonData.types,                    // types
          pokemonData.sprites.front_default,    // image
          pokemonData.sprites.front_shiny,      // shiny
          pokemonData.stats,                    // stats
          pokemonData.height,                   // size
          pokemonData.weight,                   // weight
          pokeDescription,                      // description
          pokeDescription2,                     // altDescription
          evolution                             // evolution
        );
    
        sortObjByKeyLength(newPokemon);
        genArray.push(newPokemon);
        const sortedGen = sortArrayById(genArray);
        // set(`Gen ${genNum}`,str(sortedGen));
        console.log(sortedGen);
        return sortedGen;

    } else {

      // Creating New Pokedex Entries 
      const newPokemon = new Pokemon(
        pokemonData.name,                     // name
        pokemonData.id,                       // id
        pokemonData.id - 1,                   // index
        `Gen ${genNum}`,                      // generation
        pokemonData.types,                    // types
        pokemonData.sprites.front_default,    // image
        pokemonData.sprites.front_shiny,      // shiny
        pokemonData.stats,                    // stats
        pokemonData.height,                   // size
        pokemonData.weight,                   // weight
        pokeDescription,                      // description
        pokeDescription2,                     // altDescription
        `${capitalize(pokemonData.name)} does not evolve` // evolution
      );
  
      sortObjByKeyLength(newPokemon);
      genArray.push(newPokemon);
      const sortedGen = sortArrayById(genArray);
      console.log(sortedGen);
      return sortedGen;

    }

  });

}

// Gen 1 Fetch
// let gen1 = [];
// genFetch(0, 151).then((generation1) => {
//   generation1.results.forEach((poke) => {
//     pokeFetch(poke.url).then((pokemonData) => {
//       generatePokedex(pokemonData, gen1, 1);
//     })
//   });
// });

// // Gen 2 Fetch
// let gen2 = [];
// genFetch(151, 100).then((generation2) => {
//   generation2.results.forEach((poke) => {
//     pokeFetch(poke.url).then((pokemonData) => {
//       generatePokedex(pokemonData, gen2, 2);
//     })
//   });
// });

// // Gen 3 Fetch
// let gen3 = [];
// genFetch(251, 135).then((generation3) => {
//   generation3.results.forEach((poke) => {
//     pokeFetch(poke.url).then((pokemonData) => {
//       generatePokedex(pokemonData, gen3, 3);
//     })
//   });
// });

// // Gen 4 Fetch
// let gen4 = [];
// genFetch(386, 107).then((generation4) => {
//   generation4.results.forEach((poke) => {
//     pokeFetch(poke.url).then((pokemonData) => {
//       generatePokedex(pokemonData, gen4, 4);
//     })
//   });
// });

// // Gen 5 Fetch
// let gen5 = [];
// genFetch(493, 156).then((generation5) => {
//   generation5.results.forEach((poke) => {
//     pokeFetch(poke.url).then((pokemonData) => {
//       generatePokedex(pokemonData, gen5, 5);
//     })
//   });
// });

// // Gen 6 Fetch
// let gen6 = [];
// genFetch(649, 72).then((generation6) => {
//   generation6.results.forEach((poke) => {
//     pokeFetch(poke.url).then((pokemonData) => {
//       generatePokedex(pokemonData, gen6, 6);
//     })
//   });
// });

// // Gen 7 Fetch
// let gen7 = [];
// genFetch(721, 88).then((generation7) => {
//   generation7.results.forEach((poke) => {
//     pokeFetch(poke.url).then((pokemonData) => {
//       generatePokedex(pokemonData, gen7, 7);
//     })
//   });
// });

// // Gen 8 Fetch
// let gen8 = [];
// genFetch(809, 89).then((generation8) => {
//   generation8.results.forEach((poke) => {
//     pokeFetch(poke.url).then((pokemonData) => {
//       generatePokedex(pokemonData, gen8, 8);
//     })
//   });
// });