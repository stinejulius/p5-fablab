// Anker JS burger menu in mobile version //

document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    burgerIcon.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close the menu after clicking a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
});