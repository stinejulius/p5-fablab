// Anker JS burger menu in mobile version //

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuIcon) {
        // Elementet findes
        console.log('Elementet med id "menuIcon" blev fundet.');
      } else {
        // Elementet findes ikke
        console.log('Elementet med id "menuIcon" blev ikke fundet.');
      }

    // Vis menu ved klik
    menuIcon.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // Luk menu ved klik på link
    const menuLinks = document.querySelectorAll('#mobile-menu li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
});