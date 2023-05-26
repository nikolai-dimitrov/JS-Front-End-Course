window.addEventListener('load', checkUser);
let guestButtonsContainer = document.getElementById('guest')
let logoutButton = document.getElementById('logout');
let loginButton = document.querySelector('#login button');
loginButton.addEventListener('click', onLogin)


async function onLogin(event) {
    event.preventDefault();
    let formData = new FormData(event.target.parentElement);
    let email = formData.get('email');
    let password = formData.get('password');
    try {
        if (email === '') {
            throw new Error('Email is required');
        }
        if (password === '') {
            throw new Error('Password is required');
        }
        let response = await fetch('http://localhost:3030/users/login', {
            'method': 'post',
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify({
                email,
                password,
            })
        });

        if (response.ok === false) {
            let error = await response.json();
            throw new Error(error.message);
        }
        let responseData = await response.json();
        sessionStorage.setItem('accessToken', responseData.accessToken);
        sessionStorage.setItem('email', `${email}`);
        window.location = '/'
    } catch (error) {
        console.log(error.message);
        alert(error.message)
    }
}

function checkUser() {
    let token = sessionStorage.getItem('accessToken');
    if (token != null) {
        guestButtonsContainer.style.display = 'none';
    } else {
        logoutButton.style.display = 'none';
    }
}