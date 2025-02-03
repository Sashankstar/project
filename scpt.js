// JavaScript for Custom Slider
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
let currentIndex = 0;

// Function to show the next slide
function showNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Automatically change slides every 3 seconds
setInterval(showNextSlide, 5000);