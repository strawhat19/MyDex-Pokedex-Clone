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

        <div class="currentTrainers" id="currentTrainers">
            <!-- Display Users Here -->
        </div>
    
    </main>
    <!-- Footer Component -->
    <?php include("./components/Footer/footer.php") ?>
    <!-- Start Server -->
    <script type="module" src="./server/server.js"></script>
    <script type="module" src="./server/functions/renderTrainers.js"></script>
</body>

</html>