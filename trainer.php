<!DOCTYPE html>
<html lang="en">

<head>
    <?php include("./components/Header/meta.php") ?>
    <title>Trainer | MyDex</title>
</head>

<body>
    <!-- Header Component -->
    <?php include("./components/Header/header.php") ?>
    <main class="main">
        <?php include("./components/Search/search.php") ?>
        <div class="pokedex trainerPokedex" id="trainerPokedex"></div>
    </main>
    <!-- Footer Component -->
    <?php include("./components/Footer/footer.php") ?>
    <script type="module" src="./users.js"></script>
</body>

</html>