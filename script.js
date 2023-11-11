// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple Form Validation (Assuming you have a form with an id of 'contactForm')
document.getElementById('contactForm').addEventListener('submit', function(e) {
    // Example: Check if an email field is empty
    var email = document.getElementById('email').value;
    if (email === '') {
        e.preventDefault();
        alert('Email should not be empty.');
    }
});
