// Global Functions
export const set = (itemKey,item) => {
    localStorage.setItem(itemKey,item);
}
export const get = (itemKey) => {
    localStorage.getItem(itemKey);
}
export const log = (message,item) => {
    console.log(message,item);
}
export const str = JSON.stringify;
export const parse = JSON.parse;
// Capitalize First Letter of Word
export const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// Sort Array By ID
export const sortArrayById = (arrayWithIDS) => {
    const sortedArray = [...new Set(arrayWithIDS)].sort((a, b) => a.id - b.id);
    return sortedArray;
}

// Fetch More Pokemon Data
export const pokeFetch = async (url) => {
    const pokeResponse = await fetch(url);
    const pokeData = await pokeResponse.json();
    return pokeData;
};

// Fetch One Generation At A Time
export const genFetch = async (offset, limit) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
  const pokemon = await response.json();
  return pokemon;
};

// Sort Keys in Object Alphabetically
export const sortObject = (object) => {
    Object.keys(object)
    .sort()
    .reduce(function (acc, key) { 
        acc[key] = object[key];
        return acc;
    }, {});
}

// Sort Object by Key Length
export const sortObjByKeyLength = (obj) => {
    let object = {};
    let keyArray = Object.keys(obj);
    keyArray.sort();
    keyArray.forEach(function(item) {object[item] = obj[item]});
    return object;
}

// Remove Duplicate Objects from an Array
export const removeDuplicateObjFromArray = (array) => {
    const uniqueArray = array.filter((value, index) => {
        const _value = JSON.stringify(value);
        return index === array.findIndex(obj => {
            return JSON.stringify(obj) === _value;
        });
    });
    return uniqueArray;
}

// Async Fetching
export const asyncFetch = async (url) => {
    const response = await fetch(url).then(response => response.json()).catch(function(error) {
        console.log(`No Response! `, error);
    })

    if (!response) {
        console.log(`No Response!`);
    } else {
        console.log(`Succes!`);
    }
};

// If Two Arrays Share Common Values, This Function Will Return The Matching Values
export const arrayMatches = (array1,array2) => {
    let ifMatch = array1.some(contents => array2.indexOf(contents) >= 0);
    if (ifMatch) {
        // Return Matching Values from Arrays
        let matchesArray = _.intersection(array1, array2);
        return {
            match: ifMatch,
            howMany: matchesArray.length,
            matches: matchesArray
        };
    } else {
        return `No Matches!`;
    }
}

// Get User Badges
export const getBadges = (value) => {
    Trainers.where(`collection`,`==`,value).get().then(user => {
        user.forEach(doc => {
            let match = doc.data();
            if (match) {
                IDS.push(match.badge);
                let uniqueIDS = [...new Set(IDS)];
                console.log(uniqueIDS);
                if (uniqueIDS.includes(trainerNumber)) trainerNumber = trainerNumber + 1;
                return uniqueIDS;
            } else {
                alert(`No Users Found!`);
                return;
            }
        })
    });
}

// Detect Pokemon Element Sizes
export const detectPokemonSizes = () => {
    let heights = [];
    let widths = [];
    window.addEventListener(`DOMContentLoaded`,event => {
        let pokemon = document.querySelectorAll(`.pokemon`);
        pokemon.forEach(poke => {
            let height = poke.offsetHeight;
            let width = poke.offsetWidth;
            widths.push(width);
            heights.push(height);
            const Widths = [...new Set(widths)].sort((a, b) => a - b).reverse();
            const Heights = [...new Set(heights)].sort((a, b) => a - b).reverse();
            console.log(`Widths:`);
            console.log(Widths);
            console.log(`Heights:`);
            console.log(Heights);
        })
    })
}

// Detect Lengths of Pokemon Descriptions
export const detectDescriptionSizes = () => {
    let re = /\n/gi;
    let re2 = /\f/gi;
    let descriptions = [];
    let altDescriptions = [];
    window.addEventListener(`DOMContentLoaded`,event => {
        let pokemonDescriptions = document.querySelectorAll(`.pokemon .description`);
        let pokemonAltDescriptions = document.querySelectorAll(`.pokemon .altDescription`);
        pokemonDescriptions.forEach(description => {
            let entry = description.textContent.replace(re, ` `);
            let pokeDescription = entry.replace(re2, ` `);
            descriptions.push(pokeDescription.split(``).length);
            const Descriptions = [...new Set(descriptions)].sort((a, b) => a - b).reverse();
            console.log(`Descriptions:`);
            console.log(`${description.parentElement.parentElement.parentElement.title} ${Descriptions[0]}`);
        })
        pokemonAltDescriptions.forEach(description => {
            let entry = description.textContent.replace(re, ` `);
            let pokeDescription = entry.replace(re2, ` `);
            altDescriptions.push(pokeDescription.split(``).length);
            const AltDescriptions = [...new Set(altDescriptions)].sort((a, b) => a - b).reverse();
            console.log(`Alt Descriptions:`);
            console.log(`${description.parentElement.parentElement.parentElement.title} ${AltDescriptions[0]}`);
        })
    })
}