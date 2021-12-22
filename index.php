<!DOCTYPE html>
<html lang="en">

<head>
    <?php include("./components/Header/meta.php") ?>
    <title>MyDex | PokeDex Clone</title>
</head>

<body>
    <!-- Header Component -->
    <?php include("./components/Header/header.php") ?>
    <div class="banner">
        <div class="bannerContent">
            <img class="logo" alt="pokeball" title="logo" src="./assets/graphics/pokeballDraw.svg" />
            <h1>MyDex | Pokedex Clone</h1>
            <p>A clone of the Pokedex where you can create an account, save your favorite pokemon or teams, and then show them off to friends you added via your PokeProfile! This app was made using XAMPP Apache Server with PHP & SASS for Templating and Google Firebase BaaS (Backend As A Service) with Firestore.</p>
        </div>
    </div>
    <main class="main">
        <?php include("./components/Search/search.php") ?>
        <div class="pokedex" id="pokedex"></div>
    </main>
    <!-- Footer Component -->
    <?php include("./components/Footer/footer.php") ?>
    <!-- Start Server -->
    <script type="module" src="./server/server.js"></script>
    <script type="module" src="./server/functions/renderPokemon.js"></script>
</body>

</html>