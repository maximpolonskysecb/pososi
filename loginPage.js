document.addEventListener('DOMContentLoaded', () => {
    $(document).ready(function () {

        // Functions
        function signupSwitch() {

            $('#username-area').val('');
            $('#password-area').val('');
            $('#error-message').text('')


            $('#signup-switch-button').text('Login');
            $('#signup-switch-button').attr('id', 'login-switch-button');
            $('#title').text('SIGN UP');
            $('#login-button').val('Signup');
            $('#login-button').attr('id', 'signup-button');

            $('#login-switch-button').off('click');
            $('#login-switch-button').on('click', loginSwitch);
            $('#signup-button').off('click');
            $('#signup-button').on('click', signup)

        }

        function loginSwitch() {

            $('#username-area').val('');
            $('#password-area').val('');
            $('#error-message').text('')

            $('#login-switch-button').text('Signup');
            $('#login-switch-button').attr('id', 'signup-switch-button');
            $('#title').text('LOG IN');
            $('#signup-button').val('Login');
            $('#signup-button').attr('id', 'login-button');

            $('#signup-switch-button').off('click');
            $('#signup-switch-button').on('click', signupSwitch);
            $('#login-button').off('click');
            $('#login-button').on('click', login)

        }

        function signup() {
            
            usernameArea = $('#username-area');
            passwordArea = $('#password-area');
            
            if (usernameArea.val() !== '' && passwordArea.val() !== '') {
                if (!usernames.includes(usernameArea.val())) {
                    usernames.push(usernameArea.val().toLowerCase());
                    passwords.push(passwordArea.val());
                    loginSwitch();
                } else {
                    $('#error-message').text('This username already exists, try another one.')
                }
            }

            usernameArea.val('');
            passwordArea.val('');
        }

        function login() {
            usernameArea = $('#username-area');
            passwordArea = $('#password-area');
            
            if (usernameArea.val() !== '' && passwordArea.val() !== '') {
                if (usernames.includes(usernameArea.val().toLowerCase())) {
                    if (passwordArea.val() === passwords[$.inArray(usernameArea.val().toLowerCase(), usernames)]) {
                        localStorage.setItem('username', JSON.stringify(usernameArea.val()));
                        window.location.href = 'home.html';
                    } else {
                        $('#error-message').text('Icorrect password');
                    }
                } else {
                    $('#error-message').text("Username doesn't exist");
                }
            }

            usernameArea.val('');
            passwordArea.val('');

        }

        // Main Program
        loginSwitch();
        let usernames = [];
        let passwords = [];

    });

    
    const images = [
            'fast-food-burger-svgrepo-com.svg',
            'fast-food-bread-2-svgrepo-com.svg',
            'fast-food-noodle-svgrepo-com.svg',
            'fast-food-donut-svgrepo-com.svg',
            // Добавьте пути к другим изображениям
    ];

    document.querySelectorAll('span').forEach(span => {
            const randomImage = images[Math.floor(Math.random() * images.length)];
            const imgElement = document.createElement('img');
            imgElement.src = randomImage;
            imgElement.style.width = "9vh" 
            span.appendChild(imgElement);
    });
    document.querySelectorAll('span').forEach(span => {
        span.addEventListener('mouseover', () => {
          const img = span.querySelector('img');
          if (img && !img.classList.contains('animating')) {
            img.classList.add('animating');
            img.style.opacity = 1; // Сделать видимым
          }
        });
      
        span.addEventListener('mouseleave', () => {
          const img = span.querySelector('img');
          if (img) {
            setTimeout(() =>{ img.classList.remove('animating'),
           
            img.style.opacity = 0; // Сделать невидимым
            },1300)
          }
        });
      });
      
      
});
