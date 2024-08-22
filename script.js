document.addEventListener('DOMContentLoaded', () => {
    // Get all "Read More" buttons
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    
    // Add event listener to each button
    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Find the corresponding product details element
            const productDetails = button.nextElementSibling;
            
            // Toggle the visibility of the product details
            if (productDetails.style.display === 'block') {
                productDetails.style.display = 'none';
                button.textContent = 'Read More'; // Update button text
            } else {
                productDetails.style.display = 'block';
                button.textContent = 'Read Less'; // Update button text
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const overviewSection = document.getElementById('overview');

    // Add the delayed-animation class after the page loads
    setTimeout(function() {
        overviewSection.classList.add('delayed-animation');
    }, 2000); // 2 seconds delay before starting the animation
});
document.addEventListener('DOMContentLoaded', function() {
    const overviewSection = document.getElementById('overview');

    // Add the delayed-animation class after the page loads
    setTimeout(function() {
        overviewSection.classList.add('delayed-animation');
    }, 2000); // 2 seconds delay before starting the animation
});
// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const overviewSection = document.querySelector('#overview');
    const overviewContent = overviewSection.querySelector('.overview-content');

    // Add a scroll event listener to trigger the animation
    window.addEventListener('scroll', function() {
        const sectionPosition = overviewSection.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        // Trigger the animation when the section is in view
        if (sectionPosition < viewportHeight - 100) {
            overviewContent.classList.add('scale-fade');
        } else {
            overviewContent.classList.remove('scale-fade');
        }
    });

    // Trigger animation on initial load
    window.dispatchEvent(new Event('scroll'));
});
