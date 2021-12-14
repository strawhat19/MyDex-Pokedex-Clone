<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="https://cdn-icons.flaticon.com/png/512/280/premium/280954.png?token=exp=1639447053~hmac=feb97b0684df70dbf7fe09531a88820a" type="image/x-icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.css">
    <link rel="stylesheet" href="./assets/styles/index.css" />
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