<!-- Bring in Global Imports -->
<!-- jQuery Core -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<!-- jQuery UI -->
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
<!-- Moment.js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>

<script>
document.addEventListener(`DOMContentLoaded`,event => {
    // Open Mobile Menu Function for Mobile Menu in Header
    const menuToggle = $(`#menuToggle`);
    const openMobileMenu = () => {
        let mobileMenuOpen = $("#desktopMenu");
        let menuToggler = $("#openMenuToggler");
        let mobileMenuJS = document.getElementById(`desktopMenu`);
        mobileMenuOpen.toggleClass("open-mobile-menu");
        menuToggler.toggleClass("clicked");
        let identifier = mobileMenuJS.classList[2];
        switch (identifier) {
            case `null`:
            case `undefined`:
            default:
                mobileMenuOpen.toggleClass(`closed`);
                break;
            case `open-mobile-menu`:
                break;
        }
    }
    menuToggle.on(`click`, event => {
        openMobileMenu();
    })
})
</script>

<header class="header">
    <nav class="nav-menu navigation" id="navigation">
        <!-- Home Link -->
        <a class="nav-link Home" href="./" title="Home"><i class="fas fa-home"></i>
            MyDex <span class="separator">|</span> PokeDex Clone
        </a>
        <!-- Social Links -->
        <div class="social-links" id="socialLinksMain">
            <div class="mainNavLink">
                <a href="https://github.com/strawhat19/" class="nav-link githubLink" title="Github Repo" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
            </div>
            <div class="mainNavLink">Welcome</div>
        </div>
        <!-- Registration Form -->
        <?php include("./components/Registration/registration.php") ?>
        <div class="mobile-menu-option" id="mobile-menu-option">
            <div id="menuToggle">
                <a id="openMenuToggler" class="openMenuToggler">
                    <span id="menuTogglerSpan" class="menuTogglerSpan"></span>
                    <span id="menuTogglerSpan" class="menuTogglerSpan"></span>
                    <span id="menuTogglerSpan" class="menuTogglerSpan"></span>
                </a>
            </div>
            <!-- Mobile Menu -->
            <div class="desktop-menu-option mobile-Menu" id="desktopMenu">
                <!-- Nav Links -->
                <div class="nav-link Github"><a href="https://github.com/strawhat19/"><i class="fab fa-github"></i> Github</a></div>
                <div class="nav-link">  <a href="./login.php" class="loginMobile" title="Login">
                    <i class="fas fa-sign-in-alt"></i> Login
                </a></div>
                <div class="nav-link"><a href="./register.php" class="registerMobile" title="Register">
                    <i class="fas fa-user-plus"></i> Register
                </a></div>
            </div>
        </div>
    </nav>
</header>