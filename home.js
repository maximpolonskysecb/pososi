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

        // Получаем данные из атрибутов data-* с помощью jQuery
        const restoranteData = {
            id: $(event.target).closest('.restaurant-card').attr('data-id'),
            name: $(event.target).closest('.restaurant-card').attr('data-name')
        };
        console.log($(event.target).closest('.restaurant-card').attr('data-id'));
    
        // Сохраняем данные в localStorage 
        localStorage.setItem('restoranteData', JSON.stringify(restoranteData));
    
        // Перенаправляем браузер на указанную страницу 
        window.location.href = "RestPage.html";

    }
    
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Main Code ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    $('#account-button').on('click', function() {
        window.location.href = "loginPage.html";
    });
        
    let restArray = [
        ['Perfect Pizza', '5.0', 'no-image.jpg', '1', 'R1'],
        ['Perfect Burger', '5.0', 'no-image.jpg', '2', 'R2'],
        ['Perfect Salad', '5.0', 'no-image.jpg', '3', 'R3'],
        ['Perfect Drink', '5.0', 'no-image.jpg', '4', 'R4'],
        ['Perfect Desserts', '5.0', 'no-image.jpg', '5', 'R5'],
        ['Prefect Sushi', '5.0', 'no-image.jpg', '6', 'R6'],
        ['Perfect Steaks', '5.0', 'no-image.jpg', '7', 'R7'],
        ['Perfect pasta', '5.0', 'no-image.jpg', '8', 'R8'],
    ]

    dropCards();
    setUsername();
});
