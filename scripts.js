
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

		function toggleMenu() {
			const menu = document.querySelector('.menu');
			menu.classList.toggle('active');
		}


// Get the button
const scrollToTopButton = document.querySelector('.scup-top');

// Show the button when the user scrolls down 100px from the top of the document
window.onscroll = function() {
    console.log("Scrolling..."); // This will log every time you scroll
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "flex"; // Show the button
    } else {
        scrollToTopButton.style.display = "none"; // Hide the button
    }
};

// Scroll to the top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll effect
    });
}

