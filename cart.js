// // Event listener for "Add to Cart" button
// document.querySelectorAll('.add-to-cart').forEach(button => {
//     button.addEventListener('click', function () {
//       const productCard = button.closest('.product-card');
//       const productName = productCard.querySelector('.product-title').textContent;
//       const productPrice = productCard.querySelector('.discount-price').textContent.replace('$', '');
//       const productImage = productCard.querySelector('.product-img').src;
  
//       const product = {
//         name: productName,
//         price: parseFloat(productPrice),
//         image: productImage,
//         quantity: 1
//       };
  
//       // Retrieve cart from localStorage, or initialize as an empty array
//       let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
//       // Check if the product is already in the cart
//       const existingProductIndex = cart.findIndex(item => item.name === product.name);
//       if (existingProductIndex !== -1) {
//         // If product exists, increase quantity
//         cart[existingProductIndex].quantity += 1;
//       } else {
//         // If product is new, add it to the cart
//         cart.push(product);
//       }
  
//       // Save the updated cart to localStorage
//       localStorage.setItem('cart', JSON.stringify(cart));
  
//       alert(`${productName} has been added to your cart!`);
//     });
//   });
  
//   // Function to load cart items on the cart page
//   function loadCartItems() {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const cartItemsContainer = document.getElementById('cart-items');
  
//     // Clear any existing items in the cart
//     cartItemsContainer.innerHTML = '';
  
//     // Display each item in the cart
//     cart.forEach(item => {
//       const listItem = document.createElement('li');
//       listItem.classList.add('cart-item');
//       listItem.innerHTML = `
//         <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
//         <div class="cart-item-info">
//           <span class="cart-item-name">${item.name}</span>
//           <span class="cart-item-price">$${item.price}</span>
//           <span class="cart-item-quantity">x${item.quantity}</span>
//         </div>
//       `;
//       cartItemsContainer.appendChild(listItem);
//     });
  
//     // If no items in the cart, show a message
//     if (cart.length === 0) {
//       cartItemsContainer.innerHTML = 'Your cart is empty.';
//     }
//   }
  
//   // Load cart items when the page loads (cart page)
//   if (document.body.classList.contains('cart-page')) {
//     window.onload = loadCartItems;
//   }
  
// Function to remove an item from the cart
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  // Remove the item at the specified index
  cart.splice(index, 1);
  
  // Save the updated cart back to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
  
  // Refresh the cart page to reflect the changes
  displayCart();
}

// Function to display cart items on the cart page
function displayCart() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');
  cartContainer.innerHTML = ''; // Clear current cart items display
  
  if (cartItems.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    totalPriceElement.textContent = "$0.00";
    return;
  }

  let totalPrice = 0;
  cartItems.forEach((item, index) => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    
    // Format item HTML
    cartItem.innerHTML = `
      <p>${item.name} - ${item.price}</p>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    
    cartContainer.appendChild(cartItem);
    
    // Add the price to the total
    totalPrice += parseFloat(item.price.replace('$', ''));
  });

  // Update the total price display
  totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}

// Run displayCart function when the cart page is loaded
if (window.location.pathname.includes('cart.html')) {
  displayCart();
}
