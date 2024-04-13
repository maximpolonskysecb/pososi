document.addEventListener('DOMContentLoaded', () => {
    const restoranteData = JSON.parse(localStorage.getItem('restoranteData'));
    console.log(restoranteData);

    // Измените textContent элемента, который не содержит важных дочерних элементов
    // Например, добавьте новый span или div для названия ресторана
    
    
   
    

        if (restoranteData && restoranteData.name == "R1") {
            // Данные для каждой пиццы
            const pizzas = [
                {src: "a1.jpeg", price: "10$", info: "Pizza Margherita"},
                {src: "a2.jpeg", price: "12$", info: "Pizza Pepperoni"},
                {src: "a3.jpeg", price: "9$", info: "Pizza Vegan"},
                {src: "a4.jpeg", price: "11$", info: "Pizza Four Cheeses"},
                {src: "a5.jpeg", price: "13$", info: "Pizza Hawaiian"},
                {src: "a6.jpeg", price: "8$", info: "Pizza Marinara"},
                {src: "a7.jpeg", price: "15$", info: "Pizza Meat Lover's"},
                {src: "a8.jpeg", price: "14$", info: "Pizza BBQ Chicken"},
                {src: "a9.jpeg", price: "16$", info: "Pizza Buffalo"},
                {src: "a10.jpeg", price: "18$", info: "Pizza Seafood"},
                
            ];

            let name = document.getElementById("restaurant-name");
            name.textContent ="Perfect Pizza";

            

            






            const cards = document.querySelectorAll('.card');
        
           
            cards.forEach((card, index) => {
                if (index < pizzas.length) {  
                    const pizza = pizzas[index];
                    const image = card.querySelector('.food');
                    image.src = pizza.src;
        
                    const cardPrice = card.querySelector('.card-price');
                    cardPrice.textContent = pizza.price;
        
                    const cardInfo = card.querySelector('.card-info');
                    cardInfo.textContent = pizza.info;
                }
            });
        }
        if (restoranteData && restoranteData.name == "R2") {
        
            const burgers = [
                {src: "burger1.jpeg", price: "8$", info: "Classic Burger"},
                {src: "burger2.jpeg", price: "9$", info: "Cheese Burger"},
                {src: "burger3.jpeg", price: "10$", info: "Bacon Burger"},
                {src: "burger4.jpeg", price: "11$", info: "Veggie Burger"},
                {src: "burger5.jpeg", price: "12$", info: "Spicy Chicken Burger"},
                {src: "burger6.jpeg", price: "13$", info: "Double Beef Burger"},
                {src: "burger7.jpeg", price: "14$", info: "Fish Burger"},
                {src: "burger8.jpeg", price: "15$", info: "Mushroom Swiss Burger"},
                {src: "burger9.jpeg", price: "16$", info: "Black Bean Burger"},
                {src: "burger10.jpeg", price: "17$", info: "Slider Trio"}
            ];
            

            let name = document.getElementById("restaurant-name");
            name.textContent ="Perfect Burger";


            const cards = document.querySelectorAll('.card');
        
            // Применение данных для каждого элемента
            cards.forEach((card, index) => {
                if (index < burgers.length) {  // Проверяем, есть ли данные пиццы для этой карточки
                    const burger = burgers[index];
                    const image = card.querySelector('.food');
                    image.src = burger.src;
        
                    const cardPrice = card.querySelector('.card-price');
                    cardPrice.textContent = burger.price;
        
                    const cardInfo = card.querySelector('.card-info');
                    cardInfo.textContent = burger.info;
                }
            });
        }


        if (restoranteData && restoranteData.name == "R3") {
            // Данные для каждой пиццы
            const salads = [
                {src: "salad1.jpeg", price: "5$", info: "Greek Salad"},
                {src: "salad1.jpeg", price: "6$", info: "Caesar Salad"},
                {src: "salad1.jpeg", price: "7$", info: "Garden Salad"},
                {src: "salad1.jpeg", price: "8$", info: "Caprese Salad"},
                {src: "salad1.jpeg", price: "9$", info: "Cobb Salad"},
                {src: "salad1.jpeg", price: "10$", info: "Spinach Salad"},
                {src: "salad1.jpeg", price: "11$", info: "Kale Salad"},
                {src: "salad1.jpeg", price: "12$", info: "Quinoa Salad"},
                {src: "salad1.jpeg", price: "13$", info: "Broccoli Salad"},
                {src: "salad1.jpeg", price: "14$", info: "Pasta Salad"}
            ];
            

            let name = document.getElementById("restaurant-name");
            name.textContent ="Perfect Salad";

            

            






            const cards = document.querySelectorAll('.card');
        
            // Применение данных для каждого элемента
            cards.forEach((card, index) => {
                if (index < salads.length) {  // Проверяем, есть ли данные пиццы для этой карточки
                    const salad = salads[index];
                    const image = card.querySelector('.food');
                    image.src = salad.src;
        
                    const cardPrice = card.querySelector('.card-price');
                    cardPrice.textContent = salad.price;
        
                    const cardInfo = card.querySelector('.card-info');
                    cardInfo.textContent = salad.info;
                }
            });
        }



        if (restoranteData && restoranteData.name == "R4") {
            // Данные для каждой пиццы
            const drinks = [
                {src: "drink1.jpeg", price: "2$", info: "Coca Cola"},
                {src: "drink1.jpeg", price: "2$", info: "Orange Juice"},
                {src: "drink1.jpeg", price: "3$", info: "Mineral Water"},
                {src: "drink1.jpeg", price: "3$", info: "Lemonade"},
                {src: "drink1.jpeg", price: "4$", info: "Iced Tea"},
                {src: "drink1.jpeg", price: "4$", info: "Coffee"},
                {src: "drink1.jpeg", price: "5$", info: "Hot Chocolate"},
                {src: "drink1.jpeg", price: "5$", info: "Milkshake"},
                {src: "drink1.jpeg", price: "6$", info: "Smoothie"},
                {src: "drink1.jpeg", price: "6$", info: "Espresso"}
            ];
            

            let name = document.getElementById("restaurant-name");
            name.textContent ="Perfect Drink";


            const cards = document.querySelectorAll('.card');
        
            // Применение данных для каждого элемента
            cards.forEach((card, index) => {
                if (index < drinks.length) {  // Проверяем, есть ли данные пиццы для этой карточки
                    const drink = drinks[index];
                    const image = card.querySelector('.food');
                    image.src = drink.src;
        
                    const cardPrice = card.querySelector('.card-price');
                    cardPrice.textContent = drink.price;
        
                    const cardInfo = card.querySelector('.card-info');
                    cardInfo.textContent = drink.info;
                }
            });
        }







        if (restoranteData && restoranteData.name == "R5") {
            // Данные для каждой пиццы
            const desserts = [
                {src: "dessert1.jpeg", price: "4$", info: "Chocolate Cake"},
                {src: "dessert1.jpeg", price: "4$", info: "Apple Pie"},
                {src: "dessert1.jpeg", price: "5$", info: "Cheesecake"},
                {src: "dessert1.jpeg", price: "5$", info: "Ice Cream"},
                {src: "dessert1.jpeg", price: "6$", info: "Tiramisu"},
                {src: "dessert1.jpeg", price: "6$", info: "Macarons"},
                {src: "dessert1.jpeg", price: "7$", info: "Panna Cotta"},
                {src: "dessert1.jpeg", price: "7$", info: "Fruit Tart"},
                {src: "dessert1.jpeg", price: "8$", info: "Brownie"},
                {src: "dessert1.jpeg", price: "8$", info: "Donuts"}
            ];
            

            let name = document.getElementById("restaurant-name");
            name.textContent ="Perfect Desserts";

        

            const cards = document.querySelectorAll('.card');
        
            // Применение данных для каждого элемента
            cards.forEach((card, index) => {
                if (index < desserts.length) {  // Проверяем, есть ли данные пиццы для этой карточки
                    const dessert = desserts[index];
                    const image = card.querySelector('.food');
                    image.src = dessert.src;
        
                    const cardPrice = card.querySelector('.card-price');
                    cardPrice.textContent = dessert.price;
        
                    const cardInfo = card.querySelector('.card-info');
                    cardInfo.textContent = dessert.info;
                }
            });
        }







        if (restoranteData && restoranteData.name == "R6") {
            // Данные для каждой пиццы
            const sushi = [
                {src: "sushi1.jpeg", price: "11$", info: "California Roll"},
                {src: "sushi1.jpeg", price: "12$", info: "Nigiri Sushi"},
                {src: "sushi1.jpeg", price: "13$", info: "Dragon Roll"},
                {src: "sushi1.jpeg", price: "14$", info: "Tempura Roll"},
                {src: "sushi1.jpeg", price: "15$", info: "Sashimi"},
                {src: "sushi1.jpeg", price: "16$", info: "Maki Rolls"},
                {src: "sushi1.jpeg", price: "17$", info: "Spicy Tuna Roll"},
                {src: "sushi1.jpeg", price: "18$", info: "Futomaki"},
                {src: "sushi1.jpeg", price: "19$", info: "Philadelphia Roll"},
                {src: "sushi1.jpeg", price: "20$", info: "Eel Avocado Roll"}
            ];
            

            let name = document.getElementById("restaurant-name");
            name.textContent ="Perfect Sushi";



            const cards = document.querySelectorAll('.card');
        
            // Применение данных для каждого элемента
            cards.forEach((card, index) => {
                if (index < sushi.length) {  // Проверяем, есть ли данные пиццы для этой карточки
                    const sushis = sushi[index];
                    const image = card.querySelector('.food');
                    image.src = sushis.src;
        
                    const cardPrice = card.querySelector('.card-price');
                    cardPrice.textContent = sushis.price;
        
                    const cardInfo = card.querySelector('.card-info');
                    cardInfo.textContent = sushis.info;
                }
            });
        }


        if (restoranteData && restoranteData.name == "R7") {
            // Данные для каждой пиццы
            const steaks = [
                {src: "steak1.jpeg", price: "15$", info: "Ribeye Steak"},
                {src: "steak1.jpeg", price: "16$", info: "T-bone Steak"},
                {src: "steak1.jpeg", price: "17$", info: "Filet Mignon"},
                {src: "steak1.jpeg", price: "18$", info: "Porterhouse Steak"},
                {src: "steak1.jpeg", price: "19$", info: "Sirloin Steak"},
                {src: "steak1.jpeg", price: "20$", info: "New York Strip"},
                {src: "steak1.jpeg", price: "21$", info: "Flat Iron Steak"},
                {src: "steak1.jpeg", price: "22$", info: "Hanger Steak"},
                {src: "steak1.jpeg", price: "23$", info: "Chuck Steak"},
                {src: "steak1.jpeg", price: "24$", info: "Skirt Steak"}
            ];
            

            let name = document.getElementById("restaurant-name");
            name.textContent ="Perfect Steaks";

            

            






            const cards = document.querySelectorAll('.card');
        
            // Применение данных для каждого элемента
            cards.forEach((card, index) => {
                if (index < steaks.length) {  // Проверяем, есть ли данные пиццы для этой карточки
                    const steak = steaks[index];
                    const image = card.querySelector('.food');
                    image.src = steak.src;
        
                    const cardPrice = card.querySelector('.card-price');
                    cardPrice.textContent = steak.price;
        
                    const cardInfo = card.querySelector('.card-info');
                    cardInfo.textContent = steak.info;
                }
            });
        }



        if (restoranteData && restoranteData.name == "R8") {
            // Данные для каждой пиццы
            const pastas = [
                {src: "pasta1.jpeg", price: "9$", info: "Spaghetti Carbonara"},
                {src: "pasta1.jpeg", price: "10$", info: "Lasagna"},
                {src: "pasta1.jpeg", price: "11$", info: "Fettuccine Alfredo"},
                {src: "pasta1.jpeg", price: "12$", info: "Penne alla Vodka"},
                {src: "pasta1.jpeg", price: "13$", info: "Ravioli"},
                {src: "pasta1.jpeg", price: "14$", info: "Macaroni and Cheese"},
                {src: "pasta1.jpeg", price: "15$", info: "Tagliatelle Bolognese"},
                {src: "pasta1.jpeg", price: "16$", info: "Pesto Pasta"},
                {src: "pasta1.jpeg", price: "17$", info: "Tortellini"},
                {src: "pasta1.jpeg", price: "18$", info: "Spaghetti Marinara"}
            ];
            

            let name = document.getElementById("restaurant-name");
            name.textContent ="Perfect Pasta";

            

            






            const cards = document.querySelectorAll('.card');
        
            // Применение данных для каждого элемента
            cards.forEach((card, index) => {
                if (index < pastas.length) {  // Проверяем, есть ли данные пиццы для этой карточки
                    const pasta = pastas[index];
                    const image = card.querySelector('.food');
                    image.src = pasta.src;
        
                    const cardPrice = card.querySelector('.card-price');
                    cardPrice.textContent = pasta.price;
        
                    const cardInfo = card.querySelector('.card-info');
                    cardInfo.textContent = pasta.info;
                }
            });
        }
        

    
    
});
