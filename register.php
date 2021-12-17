<!DOCTYPE html>
<html lang="en">

<head>
    <?php include("./components/Header/meta.php") ?>
    <title>Register | MyDex</title>
</head>

<body>
    <!-- Header Component -->
    <?php include("./components/Header/header.php") ?>
    <main class="main">
         <!-- Registration Form Component -->
         <?php include("./components/Registration/mobileRegistration.php") ?> 
    </main>
    <!-- Footer Component -->
    <?php include("./components/Footer/footer.php") ?>
    <!-- Start Server -->
    <script type="module" src="./server/server.js"></script>
</body>

</html>