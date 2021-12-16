const body = $(`body`);
body.hide();
body.fadeIn(5000);

const footer = $(`footer`);
footer.css(`opacity`,`1`);
footer.fadeIn(5000);

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

// detectPokemonSizes();

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

// detectDescriptionSizes();