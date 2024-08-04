// script.js
let currentSlide1 = 0;
let currentSlide2 = 0;
const slides1 = document.querySelectorAll('#slider1 .slide');
const slides2 = document.querySelectorAll('#slider2 .slide');

function showSlide(slides, index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = (i === index) ? '1' : '0';
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextSlide(slides, currentSlide) {
    currentSlide = (currentSlide + 1) % slides.length;
    return currentSlide;
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(slides1, currentSlide1);
    setInterval(() => {
        currentSlide1 = nextSlide(slides1, currentSlide1);
        showSlide(slides1, currentSlide1);
    }, 3000); // Change slide every 3 seconds

    showSlide(slides2, currentSlide2);
    setInterval(() => {
        currentSlide2 = nextSlide(slides2, currentSlide2);
        showSlide(slides2, currentSlide2);
    }, 3000); // Change slide every 3 seconds

    // Newsletter popup
    const popup = document.getElementById('newsletter-popup');
    const closeBtn = document.querySelector('.close');

    // Show the popup after a delay (e.g., 5 seconds)
    setTimeout(() => {
        popup.style.display = 'flex';
    }, 5000);

    // Close the popup
    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Form submission handling
    const form = document.getElementById('newsletter-form');
    const responseMessage = document.getElementById('response-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;

        // Simulate a successful form submission
        setTimeout(() => {
            responseMessage.textContent = `Thank you for subscribing with ${email}!`;
            form.reset();
        }, 1000);
    });
});
