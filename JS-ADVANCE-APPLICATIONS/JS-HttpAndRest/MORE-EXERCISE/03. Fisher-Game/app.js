window.addEventListener('load', checkUser);
let guestButtonsContainer = document.getElementById('guest')
let logoutButton = document.getElementById('logout');
let loginButton = document.querySelector('#guest #login');
let registerButton = document.querySelector('#guest #register');
loginButton.setAttribute('src','src/login.html');
registerButton.setAttribute('src','src/register.html');
window.location = 'src/index.html'
function checkUser() {
    let token = sessionStorage.getItem('accessToken');
    if (token != null) {
        guestButtonsContainer.style.display = 'none';
    } else {
        logoutButton.style.display = 'none';
    }
}

// // window.addEventListener('load', solve);
//
// function solve() {
//     let sectionHomeView = document.getElementById('home-view');
//     let sectionViewsContainer = document.getElementById('views');
//     let sectionLoginView = document.getElementById('login-view');
//     let sectionRegisterView = document.getElementById('register-view');
//     let homeViewMain = document.getElementById('main');
//     document.getElementsByTagName('main')[0].appendChild(sectionViewsContainer);
//
//     let logoutNavBtn = document.getElementById('logout');
//     let registerNavBtn = document.querySelector('header nav #register');
//     let registerSubmitBtn = document.querySelector('#register-view #register button');
//     let logoutBtn = document.querySelector('header nav #logout');
//
//     registerNavBtn.addEventListener('click', registerUserView);
//     registerSubmitBtn.addEventListener('click', submitRegisterForm);
//
//     logoutBtn.addEventListener('click', logout);
//
//     let token = sessionStorage.getItem('accessToken');
//     if (!token) {
//         homeViewMain.style.display = 'none';
//         sectionRegisterView.style.display = 'none';
//         sectionLoginView.style.display = 'none';
//         logoutNavBtn.style.display = 'none';
//     } else {
//         sectionHomeView.style.display = ''
//         console.log('have token authorized');
//         sectionRegisterView.style.display = 'none';
//         sectionLoginView.style.display = 'none';
//         document.getElementById('guest').style.display = 'none';
//         document.querySelector('#home-view #addForm button').removeAttribute('disabled')
//     }
//
//     function registerUserView() {
//         sectionRegisterView.style.display = '';
//         sectionHomeView.style.display = 'none';
//         // window.location = ''
//     }
//
//     async function logout() {
//         try {
//             let response = await fetch('http://localhost:3030/users/logout');
//             if (response.ok === false) {
//                 let error = await response.json();
//                 throw new Error(error.message);
//             }
//             let responseData = response.json();
//         } catch (error) {
//             console.log(error.message)
//         }
//         sessionStorage.removeItem('accessToken');
//     }
// }
//
// solve()