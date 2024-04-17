$(document).ready(function () {

    // Function to handle adding items to the cart
    function addToCart(event) {
        // Get the restaurant data from the clicked card
        const restData = {
            name: $(event.target).closest('.restaurant-card').attr('data-name'),
            price: parseFloat($(event.target).closest('.restaurant-card').find('.card-text').text().trim())
        };

        // Retrieve the cart items from local storage or initialize an empty array
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Check if the item is already in the cart
        const existingItemIndex = cartItems.findIndex(item => item.name === restData.name);

        if (existingItemIndex !== -1) {
            // If the item is already in the cart, update its quantity
            cartItems[existingItemIndex].quantity++;
        } else {
            // If the item is not in the cart, add it with quantity 1
            cartItems.push({ name: restData.name, price: restData.price, quantity: 1 });
        }

        // Save the updated cart items back to local storage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Redirect to the cart page
        window.location.href = "cart.html";
    }

    // Event listener for the add to cart button
    $('.add-to-cart-button').on('click', addToCart);

});
