import Pokemon from "../models/Pokemon.js";

export const generateDex = (pokemonData, genArray, genNum) => {
  pokeFetch(pokemonData.species.url).then(dexEntries => {
    let descriptions = dexEntries.flavor_text_entries.filter(description => {
      if (description.language.name == `en`) {
        return description
      }
    })
    descriptions = [...new Set(descriptions)];
    let re = /\n/gi;
    let re2 = /\f/gi;
    let str = descriptions[0].flavor_text;
    let lastIndex = descriptions.length - 1;
    let str2 = descriptions[lastIndex].flavor_text;
    let entry = str.replace(re, ` `);
    let entry2 = str2.replace(re, ` `);
    let pokeDescription = entry.replace(re2, ` `);
    let pokeDescription2 = entry2.replace(re2, ` `);
    const newPokemon = new Pokemon(
      pokemonData.name,
      pokemonData.id,
      pokemonData.id - 1,
      pokemonData.types,
      pokemonData.sprites.front_default,
      pokemonData.sprites.front_shiny,
      pokemonData.stats,
      pokemonData.height,
      pokemonData.weight,
      pokeDescription,
      pokeDescription2
    );
    console.log(newPokemon);
    genArray.push(newPokemon);
    localStorage.setItem(`Gen ${genNum}`, JSON.stringify(genArray));
  });
}