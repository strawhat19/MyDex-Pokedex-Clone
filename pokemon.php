<!DOCTYPE html>
<html lang="en">

<head>
    <?php include("./components/Header/meta.php") ?>
    <title>Trainer | MyDex</title>
</head>

<body>
    <!-- Header Component -->
    <?php include("./components/Header/header.php") ?>

    <!-- Pokemon Info Component -->
    <div class="pokemonInfo" id="pokemonInfo">
        <!-- Pokemon Data Inserted Here -->
    </div>
    <!-- Footer Component -->
    <?php include("./components/Footer/footer.php") ?>
    <!-- Start Server -->
    <script type="module" src="./server/server.js"></script>
    <!-- <script type="module" src="./server/db/Pokedex.js"></script> -->
</body>

</html>