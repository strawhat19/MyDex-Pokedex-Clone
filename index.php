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
        <div class="pokedex gen1" id="gen1"></div>
        <div class="pokedex gen2" id="gen2"></div>
        <div class="pokedex gen3" id="gen3"></div>
        <div class="pokedex gen4" id="gen4"></div>
    </main>
    <!-- Footer Component -->
    <?php include("./components/Footer/footer.php") ?>
</body>

</html>