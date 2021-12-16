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
menuToggle.on(`click`, event=> {
    openMobileMenu();
})

// Get Year Function for Copyright in Footer
window.addEventListener(`DOMContentLoaded`, event => {
    const date = new Date();
    const year = date.getFullYear();
    const yearElement = $(`.year`);
    yearElement.html(year);
})

// Fade in DOM Elements
export let fadeDuration = 1000;

const body = $(`body`);
body.hide();
body.fadeIn(fadeDuration);

const footer = $(`footer`);
footer.css(`opacity`,`1`);
footer.fadeIn(fadeDuration);

const header = $(`header`);
header.css(`opacity`,`1`);
header.fadeIn(fadeDuration);

const searchFilter = $(`.searchFilter`);
searchFilter.css(`opacity`,`1`);
searchFilter.fadeIn(fadeDuration);