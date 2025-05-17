// JavaScript for adding products to the cart
document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    // Event listener for 'Add to Cart' button
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const productName = button.getAttribute("data-name");
            const productPrice = button.getAttribute("data-price");

            // Retrieve current cart from localStorage
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            // Add selected product to cart
            cart.push({ name: productName, price: productPrice });

            // Save the updated cart back to localStorage
            localStorage.setItem("cart", JSON.stringify(cart));

            // Optionally, show an alert or update the cart link with the item count
            // alert(productName + " has been added to the cart!");
        });
    });
});