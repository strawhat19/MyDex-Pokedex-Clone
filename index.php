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

        <button onclick="topFunction()" id="topButton" title="Scroll to top" >&gt;</button>
        <script>
            function topFunction() {
                document.body.scrollTop = 0; // For Safari
                document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            }
        </script>

        <!-- Footer Component -->
        <?php include("./components/Footer/footer.php") ?>
        <!-- Start Server -->
        <script type="module" src="./server/server.js"></script>
        <script type="module" src="./server/functions/renderPokemon.js"></script>
    </body>

</html>