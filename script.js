<!DOCTYPE html>
<html>
<head>
    <title>Best Furnitures</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <!-- ... (previous code) ... -->

    <section class="products">
        <h2>Our Products</h2>
        <div class="product-list">
            <!-- Display product images and details here -->
            <div class="product">
                <img src="bed3.jpg" alt="Bed 3">
                <h3>Bed C</h3>
                <p>Description of Bed C</p>
                <button onclick="addToCart('Bed C', 300)">Buy Now</button>
            </div>
            <div class="product">
                <img src="bed4.jpg" alt="Bed 4">
                <h3>Bed D</h3>
                <p>Description of Bed D</p>
                <button onclick="addToCart('Bed D', 350)">Buy Now</button>
            </div>
            <!-- Add more products as needed -->
        </div>
    </section>

    <section class="checkout">
        <h2>Checkout</h2>
        <div class="order-summary">
            <h3>Order Summary</h3>
            <div class="cart-items">
                <!-- Cart items will be displayed here -->
            </div>
            <div class="total">
                <p id="subtotal">Subtotal: $0</p>
                <p id="shipping">Shipping: $20</p>
                <h4 id="total">Total: $20</h4>
            </div>
        </div>
        <div class="payment-methods">
            <h3>Payment Method</h3>
            <!-- Include payment method options (e.g., radio buttons) here -->
            <!-- ... (payment method options) ... -->
            
            <button onclick="placeOrder()">Place Order</button>
        </div>
    </section>

    <footer>
        <p>&copy; 2023 Best Furnitures</p>
    </footer>

    <script>
        let cart = [];
        let subtotal = 0;

        function addToCart(itemName, itemPrice) {
            cart.push({ name: itemName, price: itemPrice });
            subtotal += itemPrice;

            // Update the cart items displayed
            updateCartItems();

            // Update the subtotal and total amounts
            updateTotalAmounts();
        }

        function updateCartItems() {
            const cartItems = document.querySelector('.cart-items');
            cartItems.innerHTML = '';

            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.innerHTML = `
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price}</p>
                `;
                cartItems.appendChild(cartItem);
            });
        }

        function updateTotalAmounts() {
            const subtotalElement = document.getElementById('subtotal');
            const totalElement = document.getElementById('total');

            subtotalElement.textContent = `Subtotal: $${subtotal}`;
            totalElement.textContent = `Total: $${subtotal + 20}`;
        }

        function placeOrder() {
            // Implement code to process the order and payment here
            // You can use cart and subtotal to handle the order details
            alert('Order placed successfully!');
        }
    </script>
</body>
</html>
