
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



// for header dropdown
// Toggle mobile menu
const mobileMenuIcon = document.getElementById("mobile-menu-icon");
const nav = document.querySelector("nav");

mobileMenuIcon.addEventListener("click", () => {
  nav.classList.toggle("active"); // Toggle the 'active' class on <nav>
});

// Sticky header on scroll
window.onscroll = function () {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
};



// search

function searchProducts() {
  // Get the search input value and convert it to lowercase
  const searchTerm = document.getElementById('search-input').value.toLowerCase();

  // Get all product elements
  const products = document.querySelectorAll('.product');

  // Loop through all products and hide those that don't match the search term
  products.forEach(product => {
      const productName = product.getAttribute('data-name').toLowerCase();

      // If the product name includes the search term, show the product, otherwise hide it
      if (productName.includes(searchTerm)) {
          product.style.display = 'block';
      } else {
          product.style.display = 'none';
      }
  });
}
