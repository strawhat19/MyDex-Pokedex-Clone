<header class="header">
    <nav class="nav-menu navigation" id="navigation">
        <li class="nav-link Home"><a href="/" title="Home"><i class="fas fa-home"></i> MyDex | PokeDex Clone</a></li>
        <div class="social-links" id="socialLinksMain">
            <div class="mainNavLink">
                <a href="https://github.com/strawhat19/" class="nav-link githubLink" title="Github Repo" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
            </div>
            <div class="mainNavLink">- Welcome, Login to Save Pokemon!</div>
        </div>
        <div class="registrationButtons">
            <a href="/about.php" title="About">
                <i class="fas fa-sign-in-alt"></i> About
            </a>
            <a href="/profile.php" title="Profile">
                <i class="fas fa-user-plus"></i> Profile
            </a>
        </div>
        <div class="mobile-menu-option" id="mobile-menu-option">
            <div id="menuToggle" onclick="openMobileMenu()">
                <a id="openMenuToggler" class="openMenuToggler">
                    <span id="menuTogglerSpan" class="menuTogglerSpan"></span>
                    <span id="menuTogglerSpan" class="menuTogglerSpan"></span>
                    <span id="menuTogglerSpan" class="menuTogglerSpan"></span>
                </a>
            </div>
            <ul class="desktop-menu-option mobile-Menu" id="desktopMenu">
                <li class="nav-link Github"><a href="https://github.com/strawhat19/Whats-Your-Deal"><i class="fab fa-github"></i> Github</a></li>
                <li class="nav-link"><a href="/about.php" title="About"><i class="fas fa-sign-in-alt"></i> About</a></li>
                <li class="nav-link"><a href="/profile.php" title="Profile"><i class="fas fa-user-plus"></i> Profile</a></li>
            </ul>
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