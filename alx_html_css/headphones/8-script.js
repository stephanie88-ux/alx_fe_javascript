/* ===================================
   HEADPHONES WEBSITE - JAVASCRIPT
   Mobile menu toggle functionality
   =================================== */

// Wait for DOM to fully load before running code
// This ensures all HTML elements exist before we try to access them
document.addEventListener('DOMContentLoaded', function() {

    // ===================================
    // MOBILE MENU TOGGLE
    // ===================================

    // Get the hamburger button element
    const hamburger = document.querySelector('.hamburger');

    // Get the navigation menu element
    const nav = document.querySelector('.nav');

    // Add click event listener to hamburger button
    hamburger.addEventListener('click', function() {
        // Toggle the 'active' class on the nav element
        // If 'active' exists, remove it; if it doesn't exist, add it
        nav.classList.toggle('active');

        // Optional: Add animation to hamburger lines (transform to X)
        // You can uncomment this section for a more interactive hamburger animation
        /*
        const lines = document.querySelectorAll('.hamburger-line');
        if (nav.classList.contains('active')) {
            lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            lines[1].style.opacity = '0';
            lines[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
        } else {
            lines[0].style.transform = 'none';
            lines[1].style.opacity = '1';
            lines[2].style.transform = 'none';
        }
        */
    });

    // ===================================
    // CLOSE MENU WHEN CLICKING ON A LINK
    // ===================================

    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-list a');

    // Add click event to each link
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // Close the mobile menu when a link is clicked
            // This provides better user experience on mobile
            nav.classList.remove('active');
        });
    });

    // ===================================
    // CLOSE MENU WHEN CLICKING OUTSIDE
    // (Optional enhancement)
    // ===================================

    // Click anywhere on the page to close mobile menu
    document.addEventListener('click', function(event) {
        // Check if click was outside hamburger and nav
        const isClickInsideNav = nav.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);

        // If click is outside both elements and menu is open, close it
        if (!isClickInsideNav && !isClickOnHamburger && nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });

    // ===================================
    // CONSOLE MESSAGE (for debugging)
    // ===================================

    console.log('Headphones website loaded successfully!');
    console.log('Mobile menu functionality is active.');

});