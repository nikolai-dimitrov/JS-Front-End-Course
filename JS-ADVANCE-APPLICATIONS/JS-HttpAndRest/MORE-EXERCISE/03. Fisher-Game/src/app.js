window.addEventListener('load', checkUser);
let catchesDivContainer = document.getElementById('catches');
let guestButtonsContainer = document.getElementById('guest');
let logoutButton = document.getElementById('logout');
let loadButton = document.querySelector('aside button');
loadButton.addEventListener('click', loadCatches)
logoutButton.addEventListener('click', onLogout);
let addButton = document.querySelector('aside form fieldset button');
addButton.addEventListener('click', addCatch)

async function getUserInfo() {
    let token = sessionStorage.getItem('accessToken');
    if (token === null){
        return false
    }
    try {
        let data = await fetch('http://localhost:3030/users/me', {
            method: 'get',
            'headers': {
                'X-Authorization': token
            }
        })
        let responseData = await data.json();
        console.log(responseData)
        return responseData
    } catch (error) {
        console.log(error.message)
    }
}

function customCreateElements(type, content, parent, classes, id, attributes) {
    let element = document.createElement(type);
    if (content && type !== 'input') {
        element.textContent = content;
    }
    if (content && type === 'input') {
        element.value = content;
    }
    if (classes && classes.length > 0) {
        element.classList.add(...classes);
    }
    if (id) {
        element.id = id;
    }
    if (attributes) {
        for (const attrName in attributes) {
            element.setAttribute(attrName, attributes[attrName]);
        }
    }
    if (parent) {
        parent.appendChild(element);
    }
    return element;
}

function createHtml(catchObj, userInfo) {
    let divCatch = customCreateElements('div', null, catchesDivContainer, ['catch']);
    let labelAngler = customCreateElements('label', 'Angler', divCatch);
    let inputAngler = customCreateElements('input', `${catchObj.angler}`, divCatch, ['angler'], null, {'type': 'text'});
    let labelWeight = customCreateElements('label', 'Weight', divCatch);
    let inputWeight = customCreateElements('input', `${catchObj.weight}`, divCatch, ['weight'], null, {'type': 'text'});
    let labelSpecies = customCreateElements('label', 'Species', divCatch);
    let inputSpecies = customCreateElements('input', `${catchObj.species}`, divCatch, ['species'], null, {'type': 'text'});
    let labelLocation = customCreateElements('label', 'Location', divCatch);
    let inputLocation = customCreateElements('input', `${catchObj.location}`, divCatch, ['location'], null, {'type': 'text'});
    let labelBait = customCreateElements('label', 'Bait', divCatch);
    let inputBait = customCreateElements('input', `${catchObj.bait}`, divCatch, ['bait'], null, {'type': 'text'});
    let labelCaptureTime = customCreateElements('label', 'Capture Time', divCatch);
    let inputCaptureTime = customCreateElements('input', `${catchObj.captureTime}`, divCatch, ['captureTime'], null, {'type': 'number'});
    let updateButton = customCreateElements('button', 'Update', divCatch, ['update'], catchObj._id);
    let deleteButton = customCreateElements('button', 'Delete', divCatch, ['delete'], catchObj._id);
    let inputFieldsArray = Array.from(divCatch.querySelectorAll('input'));
    if (userInfo === false) {
        updateButton.disabled = 'true';
        deleteButton.disabled = 'true';
        inputFieldsArray.map(input => input.disabled = 'true');

    } else if (userInfo._id !== catchObj._ownerId) {
        updateButton.disabled = 'true';
        deleteButton.disabled = 'true';
        inputFieldsArray.map(input => input.disabled = 'true');
    }
}

async function loadCatches() {
    let token = sessionStorage.getItem('accessToken');
    try {
        let response = await fetch('http://localhost:3030/data/catches', {
            'method': 'get'
        })
        let responseData = await response.json();
        catchesDivContainer.innerHTML = '';
        let userInfo = await getUserInfo();
        console.log(userInfo)
        document.getElementById('main').style.display = '';
        catchesDivContainer.style.display = '';
        for (let catchObj of responseData.values()) {
            // console.log(catchObj)
            createHtml(catchObj, userInfo)
        }
    } catch (error) {
        console.log(error.message);
    }
}

async function addCatch(event) {
    event.preventDefault()
    let token = sessionStorage.getItem('accessToken');
    let formData = new FormData(event.target.parentElement.parentElement);
    let angler = formData.get('angler');
    let weight = formData.get('weight');
    let species = formData.get('species');
    let location = formData.get('location');
    let bait = formData.get('bait');
    let captureTime = formData.get('captureTime');
    try {
        let response = await fetch('http://localhost:3030/data/catches', {
            'method': 'post',
            'headers': {
                'X-Authorization': token
            },
            'body': JSON.stringify({
                angler,
                weight,
                species,
                location,
                bait,
                captureTime,
            })
        });
        if (!response === false) {
            let error = await response.json();
            throw new Error(error.message);
        }
        let responseData = await response.json();
        console.log(responseData)
    } catch (error) {
        console.log(error.message);
    }
}

function onLogout() {
    let token = sessionStorage.getItem('accessToken');
    fetch('http://localhost:3030/users/logout', {
        method: 'GET',
        headers: {
            'X-Authorization': token
        }
    })
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('email');
    window.location = '/';
}

function checkUser() {
    document.getElementById('main').style.display = 'none';
    let token = sessionStorage.getItem('accessToken');
    if (token != null) {
        guestButtonsContainer.style.display = 'none';
        let headerSpan = document.querySelector('nav .email span');
        addButton.removeAttribute('disabled')
        headerSpan.textContent = sessionStorage.getItem('email');
    } else {
        document.getElementById('catches').style.display = 'none';
        logoutButton.style.display = 'none';
    }
}
