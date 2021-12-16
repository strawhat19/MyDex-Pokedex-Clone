import { fadeDuration } from './index.js';
let page = window.location.pathname.replace(`/MyDex-pokedex-clone/`,``);
let php = `.php`;
let pageName = page.replace(php,``);
console.log(page);
console.log(pageName);
if (!page.includes(php)) {
    console.log(`PHP`);
    console.log(window.location.href + php);
} else {
    console.log(`Normal`);
    console.log(window.location.href);
}
window.addEventListener(`DOMContentLoaded`,event=> {
    const loginForm = $(`#loginForm`);
    const registerForm = $(`#registerForm`);
    const loginLink = $(`.loginLink`);
    const registerLink = $(`.registerLink`);
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
})