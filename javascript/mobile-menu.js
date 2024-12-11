// Anker JS burger menu in mobile version //

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const mobileMenu = document.getElementById('mobile-menu');

    // Toggle menu shown by icon click
    menuIcon.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // Close the menu when a link is clicked
    const menuLinks = document.querySelectorAll('#mobile-menu li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
});