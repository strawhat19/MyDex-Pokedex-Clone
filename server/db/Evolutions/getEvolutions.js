// export const evolutionChains = [];

// // createEvoChain(evolutions);
// const getChains = (amount) => {
//   const generateEvoChain = (id) => {
//     let pokemonEvURL = `https://pokeapi.co/api/v2/evolution-chain/${id}/`;
//     fetch(pokemonEvURL).then(response => {
//         if (response.status == 404) {
//             throw Error(response.statusText + ` - ` + response.url);
//         }
//     return response.json();
//     }).then(evolution => {
//         let evolutionChain, name, id, evolutionDetails, level, trigger, evolvesTo, finalEv, finalEvLev, finalEvTrigger;
//         evolutionChain = evolution.chain;
//         name = evolutionChain.species.name;
//         id = evolution.id;
//         evolutionDetails = evolutionChain.evolves_to[0].evolution_details[0];
//         level = evolutionDetails.min_level;
//         trigger = evolutionDetails.trigger.name;
//         evolvesTo = evolutionChain.evolves_to[0].species.name;
//         finalEv = evolutionChain.evolves_to[0].evolves_to[0].species.name;
//         finalEvLev = evolutionChain.evolves_to[0].evolves_to[0].evolution_details[0].min_level;
//         finalEvTrigger = evolutionChain.evolves_to[0].evolves_to[0].evolution_details[0].trigger.name;
//         let chain = {name,id,level,trigger,evolvesTo,finalEv,finalEvLev,finalEvTrigger,evolutionChain};
//         evolutionChains.push(chain);
//         let sorted = sortArrayById(evolutionChains);
//         console.log(sorted);
//         console.log(str(sorted));
//         return sorted;
//     }).catch(function(error) {
//         console.log(error);
//     })
//   }
//   for (var i = 1; i < amount; i++) {
//     generateEvoChain(i);
//   }
// }

// Fetch up to Gen 8
// getChains(495);

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