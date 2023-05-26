function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', loadContacts);
    document.getElementById('btnCreate').addEventListener('click', createContact);
    let phonebookUl = document.getElementById('phonebook');
    let personNameField = document.getElementById('person');
    let personPhoneField = document.getElementById('phone');
    const baseUrl = 'http://localhost:3030/jsonstore/phonebook/'

    async function loadContacts() {
        try {
            phonebookUl.innerHTML = '';
            let response = await fetch(baseUrl);
            if (!response.ok) {
                throw new Error();
            }
            let data = await response.json();
            for (const key in data) {
                console.log(data[key])
                let currentObj = data[key];
                //Create and append li element.
                let liElement = document.createElement('li');
                liElement.textContent = `${currentObj.person}: ${currentObj.phone}`;
                liElement.id = currentObj._id;
                phonebookUl.appendChild(liElement);

                //Create and append button element.
                let buttonElement = document.createElement('button');
                buttonElement.textContent = 'Delete';
                buttonElement.addEventListener('click', deleteContact);
                liElement.appendChild(buttonElement);
                // phonebookUl.innerHTML += `<li>${currentObj.person}:${currentObj.phone}<button>Delete</button></li>`;
            }

        } catch (error) {
            console.log(error);
        }
    }

    async function createContact() {
        let jsonObj = JSON.stringify({
            'person': personNameField.value,
            'phone': personPhoneField.value,
        });
        let httpHeader = {
            method: 'POST',
            body: jsonObj,
        };
        personNameField.value = '';
        personPhoneField.value = '';
        try {
            let response = await fetch(baseUrl, httpHeader);
            if (!response.ok) {
                throw new Error();
            }
            let data = response.json();
            await loadContacts();
        } catch (error) {
            console.log(error);
        }
    }

    async function deleteContact(event) {
        let currentEntityId = event.target.parentElement.id;
        let httpHeader = {
            'method': 'DELETE',
        };
        // console.log(currentEntityId)
        try {
            let response = await fetch(`${baseUrl}${currentEntityId}`, httpHeader);
            if (!response.ok) {
                throw new Error();
            }
            let data = await response.json();
            await loadContacts();

        } catch (error) {
            console.log(error);
        }
    }
}

attachEvents();