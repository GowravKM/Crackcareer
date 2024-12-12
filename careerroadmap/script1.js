// Smooth scroll to sections when navigation items are clicked
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100, // Adjusted for header height
                behavior: 'smooth'
            });
        }
    });
});

// Handle the Quiz and Explore Career button clicks
const exploreButton = document.querySelector('.explore-btn');
const quizButton = document.querySelector('.quiz-btn');

// Assuming 'exploreButton' is already defined, like this:
// const exploreButton = document.querySelector('.explore-btn');

if (exploreButton) {
    exploreButton.addEventListener('click', function(event) {
        event.preventDefault();
        // Redirect to the Careers List page
        location.href = 'careerroadmap/CareersList/careerslist.html'; // This will redirect to the Careers List page
    });
}


if (quizButton) {
    quizButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Take a Quiz clicked! This would redirect you to the Quiz page.');
        // Logic to redirect or load the Quiz page can be added here
    });
}


