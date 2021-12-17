<!-- Registration Form Logic -->
<script type="module" class="register">

window.addEventListener(`DOMContentLoaded`,event => {

    const loginForm = $(`#loginForm`);
    const registerForm = $(`#registerForm`);
    const loginLink = $(`.loginLink`);
    const registerLink = $(`.registerLink`);

    let fadeDuration = 1000;
    let page = window.location.pathname.replace(`/MyDex-pokedex-clone/`,``);
    let php = `.php`;
    let pageName = page.replace(php,``);

    const setRegister = (pageName) => {

        registerForm.hide();
        registerLink.on(`click`,event=> {
            if (registerForm.hasClass(`inactive`)) {
                loginForm.hide(fadeDuration);
                loginForm.addClass(`inactive`);
                loginForm.removeClass(`active`);
                registerForm.addClass(`active`);
                registerForm.removeClass(`inactive`);
                registerForm.show(fadeDuration);
            } else {
                // Register User Function
                alert(`Register Form is Active!`);
                return;
            }
        })

        loginLink.on(`click`,event=> {
            if (loginForm.hasClass(`inactive`)) {
                registerForm.hide(fadeDuration);
                registerForm.addClass(`inactive`);
                registerForm.removeClass(`active`);
                loginForm.addClass(`active`);
                loginForm.removeClass(`inactive`);
                loginForm.show(fadeDuration);
            } else {
                // Log In User Function
                alert(`Login Form is Active!`);
                return;
            }
        })
        
    }

    setRegister(pageName);

})
 
</script>

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
    <!-- Registration Buttons -->
    <div class="registrationButtons">
        <a class="loginLink" title="Login">
            <i class="fas fa-sign-in-alt"></i> Login
        </a>
        <a class="registerLink" title="Register">
            <i class="fas fa-user-plus"></i> Register
        </a>
    </div>
</div>