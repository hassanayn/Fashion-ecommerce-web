document.addEventListener('DOMContentLoaded', function() {
    function searchProducts() {
        // Get the search term
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        
        console.log("Search term: ", searchTerm);  // Debugging line
        
        // here Get all product cards through serach input
        const products = document.querySelectorAll('.product-card');
        
        // here Loop through all product cards
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
 
    // Attach the search function to the input element
    document.getElementById('search-input').addEventListener('input', searchProducts);
 });
 