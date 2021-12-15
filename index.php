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
        <input id="pokeSearch" type="text" name="search" placeholder="Search Pokemon by Name..." />
        <input id="typeSearch" type="text" name="typeSearch" placeholder="Search Pokemon by Type..." />
        <div class="pokedex" id="pokedex"></div>
    </main>
    <!-- Footer Component -->
    <?php include("./components/Footer/footer.php") ?>
</body>

</html>