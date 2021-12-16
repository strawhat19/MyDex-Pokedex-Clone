<header class="header">
    <nav class="nav-menu navigation" id="navigation">
        <a class="nav-link Home" href="./" title="Home"><i class="fas fa-home"></i>
            MyDex <span class="separator">|</span> PokeDex Clone
        </a>
        <div class="social-links" id="socialLinksMain">
            <div class="mainNavLink">
                <a href="https://github.com/strawhat19/" class="nav-link githubLink" title="Github Repo" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
            </div>
            <div class="mainNavLink">Welcome</div>
        </div>
        <?php include("./components/Header/registration.php") ?>
        <div class="mobile-menu-option" id="mobile-menu-option">
            <div id="menuToggle">
                <a id="openMenuToggler" class="openMenuToggler">
                    <span id="menuTogglerSpan" class="menuTogglerSpan"></span>
                    <span id="menuTogglerSpan" class="menuTogglerSpan"></span>
                    <span id="menuTogglerSpan" class="menuTogglerSpan"></span>
                </a>
            </div>
            <div class="desktop-menu-option mobile-Menu" id="desktopMenu">
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