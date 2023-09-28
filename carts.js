// JavaScript for "Add to Cart" functionality

// Initialize an empty cart array to store cart items
let cart = [];

// Function to add an item to the cart
function addToCart(productName, productPrice) {
    // Create an object representing the product
    const product = {
        name: productName,
        price: productPrice
    };

    // Add the product to the cart array
    cart.push(product);

    // Update the cart display
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartDisplay = document.getElementById('cart-display');
    const cartTotal = calculateCartTotal();
    
    // Display the total value of items in the cart
    cartDisplay.textContent = `Cart Total: $${cartTotal.toFixed(2)}`;
}

// Function to calculate the cart total
function calculateCartTotal() {
    return cart.reduce((total, product) => total + product.price, 0);
}

// Example usage:
// addToCart('Art Deco Inspired Bed', 350);

// You can call addToCart with the product name and price as shown above
// to add items to the cart.
