// Burger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burger-menu');
    const navigation = document.querySelector('.navigation');

    burgerMenu.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
        navigation.classList.toggle('active');
    });
});