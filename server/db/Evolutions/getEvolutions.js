// Imports
import { capitalize, set, sortArrayById, str } from "../../functions/globalFunctions.js";
import { Evolutions } from "./Evolutions.js";
export const evolutionChains = [];
export const evolutionsArray = [];

// createEvoChain(evolutions);
const getChains = (amount) => {
  const generateEvoChain = (id) => {
    let pokemonEvURL = `https://pokeapi.co/api/v2/evolution-chain/${id}/`;
    fetch(pokemonEvURL).then(response => {
        if (response.status == 404) {
            throw Error(response.statusText + ` - ` + response.url);
        }
    return response.json();
    }).then(evolution => {
        let chain, name, id, evos, evoDetails, evoCond, atLevel, trigger, evolvesTo;
        id = evolution.id;
        chain = evolution.chain;
        name = evolution.chain.species.name;
        // Check if Pokemon Evolves
        if (evolution.chain.evolves_to.length > 0) {
            evos = evolution.chain.evolves_to;
            evolvesTo = evolution.chain.evolves_to[0].species.name;
            evoDetails = evolution.chain.evolves_to[0].evolution_details[0];
            let capitalizedTriggerName = capitalize(evolution.chain.evolves_to[0].evolution_details[0].trigger.name.split(`-`)[0]) + ` ` + capitalize(evolution.chain.evolves_to[0].evolution_details[0].trigger.name.split(`-`)[1]);
            // If more than 1 trigger check for Special Evolution Conditions
            if (evolution.chain.evolves_to[0].evolution_details[0].trigger.name.split(`-`).length > 1) { // Growlithe
                trigger = `Via ` + capitalizedTriggerName;
                if (capitalizedTriggerName === `Use Item`) {
                    if (name === `eevee`) {
                        let evolvesToArray = [];
                        let useItemArray = [];
                       chain.evolves_to.forEach(evol => {
                        let itemName = evol.evolution_details[0].item.name;
                        evolvesTo = evol.species.name;
                        useItemArray.push(itemName);
                        evolvesToArray.push(evolvesTo);
                        let evolutionChain = {name,id,trigger,useItemArray,evolvesToArray};
                        evolutionChains.push(evolutionChain);
                        console.log(evolutionChain);
                        let chains = sortArrayById(evolutionChains);
                        localStorage.setItem(`Evolution Chains`, JSON.stringify(chains));
                        return chains;
                       })
                    }
                    let itemName = evolution.chain.evolves_to[0].evolution_details[0].item.name;
                    let evolutionChain = {name,id,trigger,itemName,evolvesTo};
                    evolutionChains.push(evolutionChain);
                    let chains = sortArrayById(evolutionChains);
                    localStorage.setItem(`Evolution Chains`, JSON.stringify(chains));
                    return chains;
                }
            } else {
                trigger = `Via ` + evolution.chain.evolves_to[0].evolution_details[0].trigger.name;
            }
            if (!evolution.chain.evolves_to[0].evolution_details[0].min_level) {
                let entries = Object.entries(evoDetails);
                let values = entries.filter(entry => {
                    if (entry[1] && entry[0] != 'trigger') {
                        return entry;
                    }
                })
                // If Pokemon Requires more than 1 Special Condition to Evolve
               if (values.length > 0) {
                let evolveConditions = [];
                values.forEach(value => {
                    let key = value[0];
                    let val = value[1];
                    let keySplits = key.split(`_`);
                    if (keySplits.length > 1) {
                        let splits = [];
                        keySplits.forEach((split,index) => {
                            let lastElement = keySplits.length - 1;
                            let capSplit = capitalize(split);
                            if (index === lastElement) {
                                let keyString = `${capSplit}`;
                                splits.push(keyString);
                                key = splits.join(``);
                                return key;
                            } else {
                                let keyString = `${capSplit} `;
                                splits.push(keyString);
                                key = splits.join(``);
                                return key;
                            }
                        })
                    } else {
                        key = value[0];
                        return key;
                    }
                    if (!isNaN(val)) {
                        evoCond = `${key}: ${val}`;
                        evolveConditions.push(evoCond);
                        let evolutionChain = {name,id,trigger,evolvesTo,evolveConditions};
                        evolutionChains.push(evolutionChain);
                        let chains = sortArrayById(evolutionChains);
                        localStorage.setItem(`Evolution Chains`, JSON.stringify(chains));
                        return chains;
                    } else {
                        evoCond = `${key}: ${val.name}`;
                        evolveConditions.push(evoCond);
                        let evolutionChain = {name,id,trigger,evolvesTo,evolveConditions};
                        evolutionChains.push(evolutionChain);
                        let chains = sortArrayById(evolutionChains);
                        // console.log(`Object Evolution Chains`, chains);
                        localStorage.setItem(`Evolution Chains`, JSON.stringify(chains));
                        return chains;
                    }
                })
               }
            } else { // No Special Evolution Conditions
                atLevel = evolution.chain.evolves_to[0].evolution_details[0].min_level;
                // Check if Pokemon has more Evolutions
                if (evos[0].evolves_to.length > 0) {
                    let finalEvolution = evolution.chain.evolves_to[0].evolves_to[0].species.name;
                    let finalEvolutionLevel = evolution.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level;
                    let finalEvolutionTrigger = evolution.chain.evolves_to[0].evolves_to[0].evolution_details[0].trigger.name;
                    if (finalEvolutionTrigger === `level-up`) {
                        finalEvolutionTrigger = trigger;
                        let evolutionChain = {name,id,evolvesTo,atLevel,trigger,finalEvolution,finalEvolutionLevel,finalEvolutionTrigger};
                        evolutionChains.push(evolutionChain);
                        let chains = sortArrayById(evolutionChains);
                        localStorage.setItem(`Evolution Chains`, JSON.stringify(chains));
                        return chains;
                    } else if (finalEvolutionTrigger === `use-item`) {
                        finalEvolutionTrigger = evolution.chain.evolves_to[0].evolves_to[0].evolution_details[0].item.name;
                        let evolutionChain = {name,id,evolvesTo,atLevel,trigger,finalEvolution,finalEvolutionTrigger};
                        evolutionChains.push(evolutionChain);
                        let chains = sortArrayById(evolutionChains);
                        localStorage.setItem(`Evolution Chains`, JSON.stringify(chains));
                        return chains;
                    }

                } else { // Pokemon Evolves Once
                    let evolutionChain = {name,id,evolvesTo,atLevel,trigger};
                    evolutionChains.push(evolutionChain);
                    let chains = sortArrayById(evolutionChains);
                    localStorage.setItem(`Evolution Chains`, JSON.stringify(chains));
                    return chains;
                }
            }
        }
    }).catch(function(error) {
        console.log(error);
    })
  }
//   generateEvoChain(amount);
  for (var i = 1; i < amount; i++) {
    generateEvoChain(i);
  }
}

// Fetch up to Gen 8
// getChains(476);
getChains(200);

// let chainsSTR = getChains(476);
// console.log(chainsSTR);

//   // Combine and Get Matching Elements
//   const currentEvoNames = arrayMatches(pokedexNames,evolutionNames);
  
//   // let pokeHolder = [];
//   // currentEvoNames.matches.forEach(match => {

//   //     Pokedex.filter(pokemon => {
//   //         if (pokemon.name == match) {
//   //             pokeHolder.push(pokemon);
//   //             return pokeHolder
//   //         }
//   //     })

//   // })

//   // let evosHolder = [];
//   // currentEvoNames.matches.forEach(match => {

//   //     evolutions.filter(evolution => {
//   //         if (evolution.pokemon == match) {
//   //             evosHolder.push(evolution);
//   //             return evosHolder
//   //         }
//   //     })

//   // })

// }

// // Extract Pokemon Names
// const extractPokemonNames = (pokedexToExtractFrom, evolutionsToExtractFrom) => {
//     const pokedexNames = [];
//     const evolutionNames = [];

//     pokedexToExtractFrom.forEach(pokemon => {
//         pokedexNames.push(pokemon.name);
//         return pokedexNames;
//     })

//     evolutionsToExtractFrom.forEach(evolution => {
//         evolutionNames.push(evolution.pokemon);
//         return evolutionNames;
//     })

//     generateEvos(pokedexNames,evolutionNames);
// }

// // -----------------------------------------------------------------------------------------------------------------------------------//
// // generateEvolutionChains(Gen) that takes in a { Gen } ( Either Gen1 // Gen2 // Gen3... ) of Pokemon and returns evolutionChains
// export const generateEvolutionChains = (PokedexGeneration) => {

//     // Logs
//     let currentDex = PokedexGeneration;
//     let newDexEntries = removeDuplicateObjFromArray(evolutionDex);
//     let pokeDexChains = [];
//     newDexEntries.forEach(pokemon => {
//        pokeDexChains.push(pokemon.evolution);
//             return pokeDexChains;
//     })
//     // return newDexEntries;
//     //-----
//     // Return all Function Values
//     return {
//         currentDex,
//         newDexEntries,
//         pokeDexChains
//     }
// }

// // Outputting Evolution Chains
// export const newDexEntries = generateEvolutionChains(`New Dex Entries`);
// console.log(`newDexEntries`,`New Dex Entries`,newDexEntries);

//  // --------------------------------------------------------------------------------------------------------------------------------//

//  // Evolution Functions
// //  export const insertGensIntoDex = ( Gen, genChains ) => { 
// //     let entries = sortArrayById(genChains.pokedexEntriesWithEvos);
// //     let ifMatch = matchingObjectsFromArrays(entries,Pokedex);
// //     console.log(`ifMatch`,ifMatch);
// //     entries.forEach(entry => {
// //         // console.log(entry);
// //     })
// // }

// // If Evolutions Exists

// fetchChains(500);

// // insertGensIntoDex( Pokedex , gen1Chains );

// // After This Update PokeDex

// // Pokemon With Evols

// // console.log(`Pokemon Who Evolve`, pokemonWithEvols);

//  // pokemonWhoEvolve.forEach(pokemon => {
//     //     evolveNames.push(pokemon.pokemon);
//     //     console.log(`Evolve Names`,str([...new Set(evolveNames)]));
//     //     // let currentEvos = ifArrayMatches.matches;
//     //     // for ( var i = 1; i < currentEvos.length; i++ ) {
//     //     //     evoFetch(i);
//     //     // }
//     // })

// // Creating New Pokemon With Evolution Chains
// // pokemonWithEvols.forEach(pokemon => {

// //     const {name,evolution: {evolvesTo,trigger,level,finalEv,finalEvLev}} = pokemon;

// //     const logEvols = (trigger) => {
// //         if (trigger == `level-up`) {
// //             const triggerNew = trigger.split(`-`);
// //             const triggerSTR = capitalize(triggerNew[0]) + ` ` + capitalize(triggerNew[1]);

// //             console.console.log(`Pokemon Name:`, capitalize(name));
// //             console.console.log(`Evolves to`, capitalize(evolvesTo),`by`, triggerSTR, `at Level`, level);
// //             console.console.log(`Evolves to`, capitalize(finalEv),`At level`, finalEvLev);
// //             console.console.log(`-------------------------------------------`);
// //             console.console.log(`Level Up!`);
// //         } else {
// //             const triggerSTR = `Trade`;
// //             console.console.log(`Pokemon Name:`, capitalize(name));
// //             console.console.log(`Evolves to`, capitalize(evolvesTo),`by`, triggerSTR);
// //             console.console.log(`Evolves to`, capitalize(finalEv),`at level`, finalEvLev);
// //             console.console.log(`-------------------------------------------`);
// //             console.console.log(`Trade Up!`);
// //         }
// //     }

// //     // logEvols(trigger);

// // })

// // const extractedNames = extractPokemonNames( Pokedex, gen1EvolutionChains );
// // console.log(extractedNames);