<script type="module" id="backgroundSwitcher">

    // Imports
    import { banner } from './server/server.js';

    // Background Images
    // PoGo Image
    const pogo = `./assets/images/pogo.jpg`;
    // Pokemon Cards Image
    const pokemonCards = `./assets/images/pokemonCards.jpg`;
    // Pokeball Banner Image
    const pokeballBanner = `./assets/images/pokeballBanner.jpg`;
    // Boy Holding Pokeball Image
    const boyHoldingPokeball = `./assets/images/boyHoldingPokeball.jpg`;

    // Images in Home Page Slider
    const backgrounds = [
        pogo,
        pokemonCards,
        pokeballBanner,
        boyHoldingPokeball
    ];

    const backgroundSwitcher = (arrayOfBackgroundImages) => {
        // Background Switcher Slider Home Page
        window.addEventListener('DOMContentLoaded', event => {

            // Random Image Switcher // Every 5 Seconds
            setInterval(() => {

                let ranX = Math.floor(Math.random() * arrayOfBackgroundImages.length);
                let randomBG = arrayOfBackgroundImages[ranX];

                const backgroundProperties = `background: url(${randomBG}); background-size: cover; background-repeat: no-repeat;  transition: var(--transition); opacity: 1;`;

                switch(randomBG) {
                    case pokeballBanner:
                        banner.attr(`style`,
                            `background-position: 50% 10%;
                            ${backgroundProperties}
                        `);
                        break;
                    case boyHoldingPokeball:
                        banner.attr(`style`,
                            `background-position: 50% 100%;
                            ${backgroundProperties}
                        `);
                        break;
                    default:
                        banner.attr(`style`,
                            `background-position: 50% 35%;
                            ${backgroundProperties}
                        `);
                        break;
                }

            },5000) // Changes Slides every 5 Seconds

        });
    }

    backgroundSwitcher(backgrounds);
    
</script>

<div class="banner" id="homeBanner">
    <div class="bannerContent">
        <img class="logo" alt="pokeball" title="logo" src="./assets/graphics/pokeballDraw.svg" />
        <h1>MyDex | Pokedex Clone</h1>
        <p>A clone of the Pokedex where you can create an account, save your favorite pokemon or teams, and then show them off to friends you added via your PokeProfile! This app was made using XAMPP Apache Server with PHP & SASS for Templating and Google Firebase BaaS (Backend As A Service) with Firestore.</p>
    </div>
</div>