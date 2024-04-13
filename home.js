$(document).ready(function () {

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Functions ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function dropCards() {
        const sampleCard = $('.restaurant-card');
        restArray.forEach(restInfo => {
            const newCard = sampleCard.clone();
            newCard.find('.card-title').text(restInfo[0]);
            newCard.find('.card-text').text(restInfo[1]);
            newCard.find('img').attr('src', restInfo[2]);
            newCard.attr('data-id', restInfo[3]);
            newCard.attr('data-name', restInfo[4]);
            newCard.on('click', handleClick);

            $('.restaurants-box').append(newCard);

        });
        sampleCard.remove();
    }

    function setUsername() {
        const username = localStorage.getItem('username') 

        if (username) {
            $('#account-button').text(JSON.parse(username));
        }
    }

    function handleClick(event) {
        const card = $(event.currentTarget); // Use currentTarget instead of target
        const restaurantData = {
            id: card.data('id'), // Use jQuery's data() method
            name: card.data('name')
        };
    
        localStorage.setItem('restaurantData', JSON.stringify(restaurantData)); // Ensure the key matches in all references
    
        document.location = "RestPage.html"; // Redirect
    }
    
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Main Code ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    $('#account-button').on('click', function() {
        window.location.href = "loginPage.html";
    });
    
    let restArray = [
        ['restorante', '5.0', 'no-image.jpg', '1', 'R1'],
        ['restorante', '5.0', 'no-image.jpg', '2', 'R2'],
        ['restorante', '5.0', 'no-image.jpg', '3', 'R3'],
        ['restorante', '5.0', 'no-image.jpg', '4', 'R4'],
        ['restorante', '5.0', 'no-image.jpg', '5', 'R5'],
        ['restorante', '5.0', 'no-image.jpg', '6', 'R6'],
        ['restorante', '5.0', 'no-image.jpg', '7', 'R7'],
        ['restorante', '5.0', 'no-image.jpg', '8', 'R8'],
    ]

    dropCards();
    setUsername();
});
