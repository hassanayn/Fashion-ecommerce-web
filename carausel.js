
//the folowing are the code for carousel js


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


function searchProducts() {
  // Get the search term
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  
  console.log("Search term: ", searchTerm);  // Debugging line
  
  // Get all product cards
  const products = document.querySelectorAll('.product-card');
  
  // Loop through all product cards
  products.forEach(product => {
      const productName = product.querySelector('.product-name').textContent.toLowerCase();
      
      console.log("Product Name: ", productName);  // Debugging line
      
      // Check if the product name contains the search term
      if (productName.includes(searchTerm)) {
          // Show the product if it matches the search term
          product.style.display = '';
      } else {
          // Hide the product if it does not match
          product.style.display = 'none';
      }
  });
}

