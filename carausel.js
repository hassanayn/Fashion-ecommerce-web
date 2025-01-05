
//carousel js


let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;

  // Reset slide position if index is out of bounds
  if (index >= totalSlides) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = totalSlides - 1;
  }

  // Hide all slides
  slides.forEach(slide => slide.style.display = 'none');

  // Show the current slide
  slides[slideIndex].style.display = 'block';
}

function moveSlide(step) {
  slideIndex += step;
  showSlide(slideIndex);
}

// Automatically change slide every 5 seconds
setInterval(() => {
  slideIndex++;
  showSlide(slideIndex);
}, 5000);

// Initialize the first slide
showSlide(slideIndex);


