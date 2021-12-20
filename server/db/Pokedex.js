// Importing or Fetching All Generations of Pokemon
// Currently just Gens 1 - 4 for Development Simplicity, Will get more Gens Later
import {  log, str, parse, set, get, arrayMatches, sortArrayById, sortObjByKeyLength, asyncFetch, genFetch, pokeFetch,removeDuplicateObjFromArray, capitalize } from "../functions/functions.js";
import { evolutions } from './evolutions.js';
import Pokemon from "../models/Pokemon.js";
import { Gen1 } from "./Gens/gen1.js";
import { Gen2 } from "./Gens/gen2.js";
import { Gen3 } from "./Gens/gen3.js";
import { Gen4 } from "./Gens/gen4.js";
import { newPokemonWithEvols } from "./Gens/genWithEvol.js";

// Creating & Exporting Pokedex
export const Pokedex = Gen1.concat(Gen2).concat(Gen3).concat(Gen4);
// console.log(`Evos:`, JSON.parse(localStorage.getItem(`Evolutions`)));

// For Specific Pokemon
// let pokemonName = window.location.search.replace(`?=`,``);
// console.log(`Current Pokemon Viewed Is:`, pokemonName);

// Pokemon With Evols
let pokemonWithEvols = removeDuplicateObjFromArray(parse(newPokemonWithEvols));
log(`Pokemon Who Evolve`, pokemonWithEvols);

export const GenerateEvolutions = () => {
    
    // Evolutions
    let names = JSON.parse(localStorage.getItem(`Current Pokedex`)) || [];
    let pokemonWhoEvolve = JSON.parse(localStorage.getItem(`Evos`)) || [];
    let evolveNames = JSON.parse(localStorage.getItem(`Evolve Names`)) || [];
    let uniqueEvolutions = removeDuplicateObjFromArray(pokemonWhoEvolve);
    log(`Unique Evolutions`, uniqueEvolutions);
    // set(`Unique Evolutions`, str(uniqueEvolutions));
    let ifArrayMatches = arrayMatches(names,pokemonWhoEvolve);

    // console.log(ifArrayMatches);

    pokemonWhoEvolve.forEach(pokemon => {
        evolveNames.push(pokemon.pokemon);
        // set(`Evolve Names`,str([...new Set(evolveNames)]));
        log(`Evolve Names`,str([...new Set(evolveNames)]));
    //     let currentEvos = ifArrayMatches.matches;
    //     // for ( var i = 1; i < currentEvos.length; i++ ) {
    //     //     evoFetch(i);
    //     // }
    })
    
}

// Creating New Pokemon With Evolution Chains
pokemonWithEvols.forEach(pokemon => {

    const {name,evolution: {evolvesTo,trigger,level,finalEv,finalEvLev}} = pokemon;

    const logEvols = (trigger) => {
        if (trigger == `level-up`) {
            const triggerNew = trigger.split(`-`);
            const triggerSTR = capitalize(triggerNew[0]) + ` ` + capitalize(triggerNew[1]);

            console.log(`Pokemon Name:`, capitalize(name));
            console.log(`Evolves to`, capitalize(evolvesTo),`by`, triggerSTR, `at Level`, level);
            console.log(`Evolves to`, capitalize(finalEv),`At level`, finalEvLev);
            console.log(`-------------------------------------------`);
            console.log(`Level Up!`);
        } else {
            const triggerSTR = `Trade`;
            console.log(`Pokemon Name:`, capitalize(name));
            console.log(`Evolves to`, capitalize(evolvesTo),`by`, triggerSTR);
            console.log(`Evolves to`, capitalize(finalEv),`at level`, finalEvLev);
            console.log(`-------------------------------------------`);
            console.log(`Trade Up!`);
        }
    }

    // logEvols(trigger);

})

const generateEvos = () => {
    const matches = JSON.parse(localStorage.getItem(`Evolutions`)) || [];
    const namesState = JSON.parse(localStorage.getItem(`Current Pokedex`)) || [];
    const currentEvosState = JSON.parse(localStorage.getItem(`Current Evolution Chains`)) || [];
    const currentPokeEvolState = JSON.parse(localStorage.getItem(`Current Pokemon With Evolutions`)) || [];

    // Array of Names
    let uniqueNames = namesState.filter((item, index) => {
        return namesState.indexOf(item) === index;
    });

    const currentEvoNames = arrayMatches(matches,uniqueNames);

    const uniqueEvos = removeDuplicateObjFromArray(currentEvosState);
    // console.log(`Current Evolution Chains: `, uniqueEvos);
    const uniquePokeEvols = removeDuplicateObjFromArray(currentPokeEvolState);
    // console.log(`Current Pokemon With Evolutions: `, uniquePokeEvols);

    if (uniquePokeEvols.length === uniqueEvos.length) {
        let newPokeArray = [];
        for (var i = 0; i < uniquePokeEvols.length; i++) {
            const newPokeWithEvolution = new Pokemon(
                uniquePokeEvols[i].name,                // name
                uniquePokeEvols[i].id,                  // id
                uniquePokeEvols[i].index,               // index
                uniquePokeEvols[i].generation,          // generation
                uniquePokeEvols[i].types,               // types
                uniquePokeEvols[i].image,               // image
                uniquePokeEvols[i].shiny,               // shiny
                uniquePokeEvols[i].stats,               // stats
                uniquePokeEvols[i].size,                // size
                uniquePokeEvols[i].weight,              // weight
                uniquePokeEvols[i].description,         // description
                uniquePokeEvols[i].altDescription,      // altDescription
                uniqueEvos[i]                           // evolution
            )
            newPokeArray.push(newPokeWithEvolution);
            localStorage.setItem(`New Pokemon With Evolutions:`, JSON.stringify(newPokeArray))
        }
    }
    
    let pokeHolder = [];
    currentEvoNames.matches.forEach(match => {

        Pokedex.filter(pokemon => {
            if (pokemon.name == match) {
                pokeHolder.push(pokemon);
                set(`Current Pokemon With Evolutions`, str(pokeHolder));
            }
        })

    })

    let evosHolder = [];
    currentEvoNames.matches.forEach(match => {

        evolutions.filter(evolution => {
            if (evolution.pokemon == match) {
                evosHolder.push(evolution);
                set(`Current Evolution Chains`,str(evosHolder));
            }
        })

    })

}

const reWriteEvos = () => {
    const names = [];
    const matches = [];
    const evos = [];

    evolutions.forEach(evolution => {
        evos.push(evolution);
        matches.push(evolution.pokemon);
        localStorage.setItem(`Evolutions`, JSON.stringify(matches));
        localStorage.setItem(`Evos`, JSON.stringify(evos));
    })

    Pokedex.forEach(pokemon => {
        names.push(pokemon.name);
        localStorage.setItem(`Current Pokedex`, JSON.stringify(names));
    })

    generateEvos();
}

reWriteEvos();

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
            let evolutionChain, pokemon, evolutionDetails, level, trigger, evolvesTo, finalEv, finalEvLev, finalEvTrigger;
            evolutionChain = evolution.chain;
            pokemon = evolutionChain.species.name;
            evolutionDetails = evolutionChain.evolves_to[0].evolution_details[0];
            level = evolutionDetails.min_level;
            trigger = evolutionDetails.trigger.name;
            evolvesTo = evolutionChain.evolves_to[0].species.name;
            finalEv = evolutionChain.evolves_to[0].evolves_to[0].species.name;
            finalEvLev = evolutionChain.evolves_to[0].evolves_to[0].evolution_details[0].min_level;
            finalEvTrigger = evolutionChain.evolves_to[0].evolves_to[0].evolution_details[0].trigger.name;
            let chain = {pokemon,level,trigger,evolvesTo,finalEv,finalEvLev,finalEvTrigger,evolutionChain};
            evolutionChains.push(chain);
            localStorage.setItem(`Evolutions 2`, JSON.stringify(evolutionChains));
        }).catch(function(error) {
            console.log(error);
        })
    }
}

fetchChains();