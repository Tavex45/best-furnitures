// JavaScript for shopping cart functionality

// Initialize an empty cart array to store cart items
let cart = [];

// Function to add an item to the cart
function addToCart(productId, productPrice) {
    cart.push({ id: productId, price: productPrice });
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartDisplay = document.getElementById('cart-display');
    const cartTotal = cart.reduce((total, item) => total + item.price, 0);
    
    // Display the total value of items in the cart
    cartDisplay.textContent = `Cart Total: $${cartTotal.toFixed(2)}`;
}

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-id');
        const productPrice = parseFloat(this.getAttribute('data-price'));
        addToCart(productId, productPrice);
    });
});
