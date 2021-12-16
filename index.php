<!DOCTYPE html>
<html lang="en">

<head>
    <?php include("./components/Header/meta.php") ?>
    <title>MyDex | PokeDex Clone</title>
</head>

<body>
    <!-- Header Component -->
    <?php include("./components/Header/header.php") ?>
    <main class="main">
        <?php include("./components/Search/search.php") ?>
        <div class="pokedex" id="pokedex"></div>
    </main>
    <!-- Footer Component -->
    <?php include("./components/Footer/footer.php") ?>
    <script type="module" src="./assets/scripts/render.js"></script>
</body>

</html>