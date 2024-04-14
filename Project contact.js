document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    
    setTimeout(function() {
        document.getElementById("confirmation-message").style.display = "block";
        document.getElementById("contact-form").reset(); // Reset the form
    }, 1000);
});
