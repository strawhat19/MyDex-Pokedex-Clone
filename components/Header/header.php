<header class="header">
    <nav class="nav-menu navigation" id="navigation">
        <a class="nav-link Home" href="./" title="Home"><i class="fas fa-home"></i> MyDex | PokeDex Clone</a>
        <div class="social-links" id="socialLinksMain">
            <div class="mainNavLink">
                <a href="https://github.com/strawhat19/" class="nav-link githubLink" title="Github Repo" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
            </div>
            <div class="mainNavLink">Welcome</div>
        </div>
        <div class="registration">
            <form class="loginForm active" id="loginForm">
                <input id="emailField" type="text" name="emailField" placeholder="Email" />
                <input id="passwordField" type="password" name="passwordField" placeholder="Password" />
            </form>
            <form class="registerForm inactive" id="registerForm">
                <input id="email" type="email" name="email" placeholder="Email" />
                <input id="username" type="text" name="username" placeholder="Username" />
                <input id="password" type="password" name="password" placeholder="Password" />
            </form>
            <div class="registrationButtons">
                <a class="loginLink" title="Login">
                    <i class="fas fa-sign-in-alt"></i> Login
                </a>
                <a class="registerLink" title="Register">
                    <i class="fas fa-user-plus"></i> Register
                </a>
            </div>
        </div>
        <div class="mobile-menu-option" id="mobile-menu-option">
            <div id="menuToggle" onclick="openMobileMenu()">
                <a id="openMenuToggler" class="openMenuToggler">
                    <span id="menuTogglerSpan" class="menuTogglerSpan"></span>
                    <span id="menuTogglerSpan" class="menuTogglerSpan"></span>
                    <span id="menuTogglerSpan" class="menuTogglerSpan"></span>
                </a>
            </div>
            <div class="desktop-menu-option mobile-Menu" id="desktopMenu">
                <div class="nav-link Github"><a href="https://github.com/strawhat19/"><i class="fab fa-github"></i> Github</a></div>
                <div class="nav-link"><a href="./about.php" title="About"><i class="fas fa-sign-in-alt"></i> About</a></div>
                <div class="nav-link"><a href="./profile.php" title="Profile"><i class="fas fa-user-plus"></i> Profile</a></div>
            </div>
        </div>
    </nav>
</header>

<!-- jQuery Core -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<!-- Moment.js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
<script>
    const openMobileMenu = (identifier) => {
        let mobileMenuOpen = $("#desktopMenu");
        let menuToggler = $("#openMenuToggler");
        let mobileMenuJS = document.getElementById(`desktopMenu`);

        mobileMenuOpen.toggleClass("open-mobile-menu");
        menuToggler.toggleClass("clicked");

        identifier = mobileMenuJS.classList[2];

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
</script>