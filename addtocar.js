document.addEventListener("DOMContentLoaded", function() {
    // Select all "Add" buttons
    const addButtonList = document.querySelectorAll(".card button");

    // Add click event listeners to each "Add" button
    addButtonList.forEach(function(addButton) {
        addButton.addEventListener("click", function() {
            // Get the information of the selected item
            const card = addButton.closest(".card");
            const itemName = card.querySelector(".card-title").textContent;
            const itemPrice = card.querySelector(".card-price").textContent;

            // Create a new item element
            const item = document.createElement("div");
            item.classList.add("row", "mb-3", "d-flex", "align-items-center");
            item.innerHTML = `
                <div class="col-md-5">
                    <h5 class="fw-bold mb-0">${itemName}</h5>
                </div>
                <div class="col-md-4">
                    <input type="number" class="form-control form-control-sm" value="1">
                </div>
                <div class="col-md-3">
                    <p class="mb-0">${itemPrice}</p>
                </div>
            `;

            // Append the new item to the cart
            const cartItems = document.querySelector("#cart-items");
            cartItems.appendChild(item);
        });
    });
});
