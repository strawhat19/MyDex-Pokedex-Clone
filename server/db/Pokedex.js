// Importing or Fetching All Generations of Pokemon

// Currently just Gens 1 - 4 for Development Simplicity, Will get more Gens Later
import Pokemon from "../models/Pokemon.js";
import { Gen1 } from "./Gens/gen1.js";
import { Gen2 } from "./Gens/gen2.js";
import { Gen3 } from "./Gens/gen3.js";
import { Gen4 } from "./Gens/gen4.js";

// Import Global Helper Functions
import { log, str, parse, set, get, pageName, getCurrentPageName, testing, arrayContain, arrayMatches, asyncFetch, genFetch, pokeFetch, capitalize, matchingObjectsFromArrays, sortObjByKeyLength } from "../server.js";
import { removeDuplicateObjFromArray, sortArrayById, } from '../functions/functions.js';

// Evolutions DB
import { gen1EvolutionChains } from './Evolutions/gen1EvolutionChains.js';
import { gen1Evos } from "./Evolutions/gen1evoChains.js";

// Creating & Exporting Pokedex
export const Pokedex = Gen1.concat(Gen2).concat(Gen3).concat(Gen4);

// Logs
console.log(`Pokedex`,Pokedex);

// -----------------------------------------------------------------------------------------------------------------------------------//
// generateEvolutionChains(Gen) that takes in a { Gen } ( Either Gen1 // Gen2 // Gen3... ) of Pokemon and returns evolutionChains
export const generateEvolutionChains = (Gen) => {
    let pokedexEntriesWithEvos = removeDuplicateObjFromArray(gen1Evos);
    let pokeDexChains = [];
    pokedexEntriesWithEvos.forEach(pokemon => {
       pokeDexChains.push(pokemon.evolution);
            return pokeDexChains;
            // for ( var i = 1; i < currentEvos.length; i++ ) {
            //     evoFetch(i);
            // }
    })
    // return pokedexEntriesWithEvos;
    //-----
    // Return all Function Values
    return {
        Gen,
        pokedexEntriesWithEvos,
        pokeDexChains
    }
}
 // --------------------------------------------------------------------------------------------------------------------------------//

// Outputting Evolution Chains
export const gen1Chains = generateEvolutionChains(`Gen 1 Pokemon That Have Evolutions`);
console.log(gen1Chains);

export const insertGensIntoDex = ( Gen, genChains ) => { 
    let entries = sortArrayById(genChains.pokedexEntriesWithEvos);
    entries.forEach(entry => {
        console.log(entry);
    })
}

insertGensIntoDex( Pokedex , gen1Chains );

// After This Update PokeDex

// Pokemon With Evols

// console.log(`Pokemon Who Evolve`, pokemonWithEvols);

 // pokemonWhoEvolve.forEach(pokemon => {
    //     evolveNames.push(pokemon.pokemon);
    //     console.log(`Evolve Names`,str([...new Set(evolveNames)]));
    //     // let currentEvos = ifArrayMatches.matches;
    //     // for ( var i = 1; i < currentEvos.length; i++ ) {
    //     //     evoFetch(i);
    //     // }
    // })

// Creating New Pokemon With Evolution Chains
// pokemonWithEvols.forEach(pokemon => {

//     const {name,evolution: {evolvesTo,trigger,level,finalEv,finalEvLev}} = pokemon;

//     const logEvols = (trigger) => {
//         if (trigger == `level-up`) {
//             const triggerNew = trigger.split(`-`);
//             const triggerSTR = capitalize(triggerNew[0]) + ` ` + capitalize(triggerNew[1]);

//             console.console.log(`Pokemon Name:`, capitalize(name));
//             console.console.log(`Evolves to`, capitalize(evolvesTo),`by`, triggerSTR, `at Level`, level);
//             console.console.log(`Evolves to`, capitalize(finalEv),`At level`, finalEvLev);
//             console.console.log(`-------------------------------------------`);
//             console.console.log(`Level Up!`);
//         } else {
//             const triggerSTR = `Trade`;
//             console.console.log(`Pokemon Name:`, capitalize(name));
//             console.console.log(`Evolves to`, capitalize(evolvesTo),`by`, triggerSTR);
//             console.console.log(`Evolves to`, capitalize(finalEv),`at level`, finalEvLev);
//             console.console.log(`-------------------------------------------`);
//             console.console.log(`Trade Up!`);
//         }
//     }

//     // logEvols(trigger);

// })

const generateEvos = (pokedexNames,evolutionNames) => {

    // Combine and Get Matching Elements
    const currentEvoNames = arrayMatches(pokedexNames,evolutionNames);
    console.log(currentEvoNames);

    // Get Evolution Chains

    // const uniqueEvos = removeDuplicateObjFromArray(currentEvosState);
    // console.console.log(`Current Evolution Chains: `, uniqueEvos);
    // const uniquePokeEvols = removeDuplicateObjFromArray(currentPokeEvolState);
    // console.console.log(`Current Pokemon With Evolutions: `, uniquePokeEvols);

    // if (uniquePokeEvols.length === uniqueEvos.length) {
    //     let newPokeArray = [];
    //     for (var i = 0; i < uniquePokeEvols.length; i++) {
    //         const newPokeWithEvolution = new Pokemon(
    //             uniquePokeEvols[i].name,                // name
    //             uniquePokeEvols[i].id,                  // id
    //             uniquePokeEvols[i].index,               // index
    //             uniquePokeEvols[i].generation,          // generation
    //             uniquePokeEvols[i].types,               // types
    //             uniquePokeEvols[i].image,               // image
    //             uniquePokeEvols[i].shiny,               // shiny
    //             uniquePokeEvols[i].stats,               // stats
    //             uniquePokeEvols[i].size,                // size
    //             uniquePokeEvols[i].weight,              // weight
    //             uniquePokeEvols[i].description,         // description
    //             uniquePokeEvols[i].altDescription,      // altDescription
    //             uniqueEvos[i]                           // evolution
    //         )
    //         newPokeArray.push(newPokeWithEvolution);
    //         localStorage.setItem(`New Pokemon With Evolutions:`, JSON.stringify(newPokeArray))
    //     }
    // }
    
    // let pokeHolder = [];
    // currentEvoNames.matches.forEach(match => {

    //     Pokedex.filter(pokemon => {
    //         if (pokemon.name == match) {
    //             pokeHolder.push(pokemon);
    //             return pokeHolder
    //         }
    //     })

    // })

    // let evosHolder = [];
    // currentEvoNames.matches.forEach(match => {

    //     evolutions.filter(evolution => {
    //         if (evolution.pokemon == match) {
    //             evosHolder.push(evolution);
    //             return evosHolder
    //         }
    //     })

    // })

}

const extractPokemonNames = (pokedexToExtractFrom, evolutionsToExtractFrom) => {
    const pokedexNames = [];
    const evolutionNames = [];

    pokedexToExtractFrom.forEach(pokemon => {
        pokedexNames.push(pokemon.name);
        return pokedexNames;
    })

    evolutionsToExtractFrom.forEach(evolution => {
        evolutionNames.push(evolution.pokemon);
        return evolutionNames;
    })

    generateEvos(pokedexNames,evolutionNames);
}

// const extractedNames = extractPokemonNames( Pokedex, gen1EvolutionChains );
// console.log(extractedNames);

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
export const fetchChains = () => {
    let evolutionChains = JSON.parse(localStorage.getItem(`Evolutions`)) || [];

    // Fetch Evolution Chain
    const evoFetch = (id) => {
        let pokemonEvURL = `https://pokeapi.co/api/v2/evolution-chain/${id}/`;
        fetch(pokemonEvURL).then(response => {
            if (response.status == 404) {
                throw Error(response.statusText + ` - ` + response.url);
            }
        return response.json();
        }).then(evolution => {
            let evolutionChain, name, evolutionDetails, level, trigger, evolvesTo, finalEv, finalEvLev, finalEvTrigger;
            evolutionChain = evolution.chain;
            name = evolutionChain.species.name;
            evolutionDetails = evolutionChain.evolves_to[0].evolution_details[0];
            level = evolutionDetails.min_level;
            trigger = evolutionDetails.trigger.name;
            evolvesTo = evolutionChain.evolves_to[0].species.name;
            finalEv = evolutionChain.evolves_to[0].evolves_to[0].species.name;
            finalEvLev = evolutionChain.evolves_to[0].evolves_to[0].evolution_details[0].min_level;
            finalEvTrigger = evolutionChain.evolves_to[0].evolves_to[0].evolution_details[0].trigger.name;
            let chain = {name,level,trigger,evolvesTo,finalEv,finalEvLev,finalEvTrigger,evolutionChain};
            evolutionChains.push(chain);
            set(`Evolutions 2`, JSON.stringify(evolutionChains));
        }).catch(function(error) {
            console.console.log(error);
        })
    }
}

// fetchChains();