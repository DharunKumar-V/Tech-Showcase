// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add visible class to reviews when they come into view
function handleScroll() {
    const reviews = document.querySelectorAll('.g');
    reviews.forEach((review) => {
        if (isInViewport(review)) {
            review.classList.add('visible');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Trigger scroll handler on load for initial visibility
window.addEventListener('load', handleScroll);