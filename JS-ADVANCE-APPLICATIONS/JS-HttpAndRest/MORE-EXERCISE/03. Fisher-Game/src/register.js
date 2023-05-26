// console.log('TODO:// Implement Register functionality');
window.addEventListener('load',checkUser);
let guestButtonsContainer = document.getElementById('guest')
let logoutButton = document.getElementById('logout');
//
let registerSubmitBtn = document.querySelector('#register-view #register button');
registerSubmitBtn.addEventListener('click', submitRegisterForm);
async function submitRegisterForm(event) {
    event.preventDefault()
    let formData = new FormData(event.target.parentElement);
    let email = formData.get('email');
    let password = formData.get('password');
    let rePass = formData.get('rePass');

    try {
        if (email === '' || password === '') {
            let errorMsg = "All fields are required";
            throw new Error(errorMsg);
        }
        if (password !== rePass) {
            let errorMsg = "Password don't match.";
            throw new Error(errorMsg);
        }
        if (!email.includes('@')) {
            let errorMsg = "Please enter valid email.";
            throw new Error(errorMsg);
        }
        let response = await fetch('http://localhost:3030/users/register', {
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
        // console.log(responseData)
        sessionStorage.setItem('accessToken', responseData.accessToken);
        sessionStorage.setItem('email',`${email}`);
        window.location = '/';
    } catch (error) {
        console.log(error.message);
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