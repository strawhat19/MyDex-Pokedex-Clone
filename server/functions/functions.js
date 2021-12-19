// Global Functions

// Sort Keys in Object Alphabetically
export const sortObject = (object) => {
    Object.keys(object)
    .sort()
    .reduce(function (acc, key) { 
        acc[key] = object[key];
        return acc;
    }, {});
} 

// Capitalize First Letter of Word
export const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
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

// Uncomment this to Execute Function
// detectPokemonSizes();

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

// Uncomment this to Execute Function
// detectDescriptionSizes();