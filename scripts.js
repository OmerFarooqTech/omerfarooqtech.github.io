
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
