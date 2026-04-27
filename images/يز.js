// Burger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Main header burger menu
    const burgerMenu = document.getElementById('burger-menu');
    const mainNavigation = document.querySelector('.main-header .navigation');

    if (burgerMenu && mainNavigation) {
        burgerMenu.addEventListener('click', function(event) {
            event.preventDefault();
            burgerMenu.classList.toggle('active');
            mainNavigation.classList.toggle('active');
        });
    }

    // Sub-header burger menu
    const subBurgerMenu = document.getElementById('sub-burger-menu');
    const subNavigation = document.querySelector('.sub-header .navigation');

    if (subBurgerMenu && subNavigation) {
        subBurgerMenu.addEventListener('click', function(event) {
            event.preventDefault();
            subBurgerMenu.classList.toggle('active');
            subNavigation.classList.toggle('active');
        });
    }

    // Close menus when clicking outside
    document.addEventListener('click', function(event) {
        // Close main menu
        if (burgerMenu && mainNavigation && !burgerMenu.contains(event.target) && !mainNavigation.contains(event.target)) {
            burgerMenu.classList.remove('active');
            mainNavigation.classList.remove('active');
        }

        // Close sub menu
        if (subBurgerMenu && subNavigation && !subBurgerMenu.contains(event.target) && !subNavigation.contains(event.target)) {
            subBurgerMenu.classList.remove('active');
            subNavigation.classList.remove('active');
        }
    });
});