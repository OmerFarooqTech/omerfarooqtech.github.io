document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    // Toggle the menu when the hamburger button is clicked
    hamburger.addEventListener('click', function() {
        menu.classList.toggle('active'); // Toggle the 'active' class on the menu
    });

    // Function to smoothly scroll to a specific element
    function smoothScroll(target, duration) {
        const targetElement = document.querySelector(target);
        if (!targetElement) return; // Exit if the target element doesn't exist

        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1); // Ensure progress does not exceed 1
            const easing = easeInOutQuad(progress); // Easing function
            window.scrollTo(0, startPosition + distance * easing);

            if (progress < 1) requestAnimationFrame(animation);
        }

        function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // Easing function for smooth effect
        }

        requestAnimationFrame(animation);
    }

    // Intersection Observer for slide-up effect
    const cards = document.querySelectorAll('.slide-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it becomes visible
            }
        });
    });

    cards.forEach(card => {
        observer.observe(card);
    });

    // Close menu when a menu item is clicked
    const menuItems = document.querySelectorAll('.menu-item'); // Assuming your menu items have the class 'menu-item'
    menuItems.forEach(item => {
        item.addEventListener('click', closeMenu);
    });

    // Close menu when the user scrolls
    window.addEventListener('scroll', closeMenu);
});

// Function to close the menu
function closeMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.remove('active'); // Remove the active class to hide the menu
}
