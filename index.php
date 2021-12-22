<!DOCTYPE html>
<html lang="en">

<head>
    <?php include("./components/Header/meta.php") ?>
    <title>MyDex | PokeDex Clone</title>
</head>

<body>
    <!-- Header Component -->
    <?php include("./components/Header/header.php") ?>

    <!-- Banner Component -->
    <?php include("./components/Banner/banner.php") ?>
    
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