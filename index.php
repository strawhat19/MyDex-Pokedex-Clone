<!DOCTYPE html>
<html lang="en">

<head>
    <?php include("./components/Header/meta.php") ?>
    <title>MyDex | PokeDex Clone</title>
    <script type="module" src="https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js"></script>
    <script type="module" src="https://www.gstatic.com/firebasejs/7.16.1/firebase-auth.js"></script>
    <script type="module" src="https://www.gstatic.com/firebasejs/7.16.1/firebase-database.js"></script>
    <script type="module" src="https://www.gstatic.com/firebasejs/7.16.1/firebase-firestore.js"></script>
    <script type="module">
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
        import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
    </script>
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
    <script type="module" src="./assets/scripts/fetch.js"></script>
    <script type="module" src="./server.js"></script>
</body>

</html>