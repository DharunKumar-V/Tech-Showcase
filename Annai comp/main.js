document.addEventListener("DOMContentLoaded", function () {
    // Dropdown hover interaction
    const dropdown = document.querySelector(".dropdown");
    const dropdownContent = dropdown ? dropdown.querySelector(".dropdown-content") : null;

    if (dropdown) {
        dropdown.addEventListener("mouseenter", function () {
            dropdownContent.style.display = "block";
        });

        dropdown.addEventListener("mouseleave", function () {
            dropdownContent.style.display = "none";
        });
    }

    // Burger Menu for mobile view
    const burger = document.querySelector(".burger");
    const navItems = document.querySelector(".nav-items");

    if (burger && navItems) {
        burger.addEventListener("click", function () {
            burger.classList.toggle("active");
            navItems.classList.toggle("active");
        });
    }

    // Smooth scroll to sections
    function scrollToSection(sectionId) {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Button hover effect
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.1)';
        });

        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });

    // Repair boxes functionality
    let currentIndex = 0;
    const repairBoxes = document.querySelectorAll('.repair-box');
    const totalRepairs = repairBoxes.length;

    function showRepair(index) {
        const offset = -index * (300 + 20); // Adjust the offset based on the width of repair-box + margin
        document.querySelector('.repairs-container').style.transform = `translateX(${offset}px)`; // Use backticks for template literals
    }

    function nextRepair() {
        currentIndex = (currentIndex + 1) % totalRepairs;
        showRepair(currentIndex);
    }

    // Auto-slide every 5 seconds
    setInterval(nextRepair, 5000);

    // Check visibility function
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Check visibility for product and service cards
    function checkVisibility() {
        const productCards = document.querySelectorAll('.product-card');
        const serviceCards = document.querySelectorAll('.service-card');

        productCards.forEach(card => {
            card.classList.toggle('visible', isInViewport(card));
        });

        serviceCards.forEach(card => {
            card.classList.toggle('visible', isInViewport(card));
        });
    }

    // Event listeners
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('load', checkVisibility);

    // Function to show hero content with animation
    function showHeroContent() {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.classList.add('visible');
        }
    }

    // Check visibility on load
    window.addEventListener('load', showHeroContent);

    // Text image section fade-in effect
    window.onload = function () {
        const textImageSection = document.querySelector('.text-image-section');
        if (textImageSection) {
            setTimeout(() => {
                textImageSection.style.opacity = '1';
            }, 300);
        }
    };

    // Map and contact form visibility
    window.addEventListener('scroll', function () {
        const mapContainer = document.getElementById('map-container');
        const contactContainer = document.getElementById('contact-container');

        if (mapContainer) {
            const rectMap = mapContainer.getBoundingClientRect();
            if (rectMap.top <= window.innerHeight && rectMap.bottom >= 0) {
                mapContainer.style.opacity = 1; // Fade in
                mapContainer.style.transform = 'translateX(0)'; // Move into view
            }
        }

        if (contactContainer) {
            const rectContact = contactContainer.getBoundingClientRect();
            if (rectContact.top <= window.innerHeight && rectContact.bottom >= 0) {
                contactContainer.style.opacity = 1; // Fade in
                contactContainer.style.transform = 'translateX(0)'; // Move into view
            }
        }
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission
            const form = this;

            fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    alert('Message sent successfully!');
                    form.reset(); // Reset the form
                } else {
                    alert('Failed to send message. Please try again.');
                }
            })
            .catch(error => {
                alert('Error: ' + error.message);
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll to sections
    function scrollToSection(sectionId) {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Button click event for Explore Products
    const exploreButton = document.querySelector('.explore-products-button');
    if (exploreButton) {
        exploreButton.addEventListener('click', function () {
            scrollToSection('#products');
        });
    }
});

