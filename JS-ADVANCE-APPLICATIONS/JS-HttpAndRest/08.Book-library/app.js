function attachEvents() {
    let baseUrl = 'http://localhost:3030/jsonstore/collections/books';
    document.getElementById('loadBooks').addEventListener('click', loadAllBooks);
    let tBodyEl = document.querySelector('tbody');
    let formBtn = document.querySelector('#form button');
    let titleInput = document.querySelector('input[name="title"]');
    let authorInput = document.querySelector('input[name="author"]');
    formBtn.addEventListener('click', onSubmit);
    tBodyEl.innerHTML = '';
    let allBooksData = {};
    let currentBookId = null;

    async function loadAllBooks() {
        tBodyEl.innerHTML = ''
        try {
            let response = await fetch(baseUrl);
            // if (!response.ok) {
            //     throw new Error():
            // }
            let data = await response.json();
            allBooksData = data;
            for (const key in data) {
                // Create html elements
                let trElement = document.createElement('tr');
                trElement.id = key
                let tdAuthorElement = document.createElement('td');
                let tdTitleElement = document.createElement('td');
                let tdButtonContainerElement = document.createElement('td');
                let btnEditElement = document.createElement('button');
                let btnDeleteElement = document.createElement('button');

                //Add event listeners.
                btnEditElement.addEventListener('click', editBook);
                btnDeleteElement.addEventListener('click', deleteBook);

                //Assign values to elements.
                tdTitleElement.textContent = data[key].title;
                tdAuthorElement.textContent = data[key].author;
                btnEditElement.textContent = 'Edit';
                btnDeleteElement.textContent = 'Delete';

                // Append all elements.
                tBodyEl.appendChild(trElement);
                trElement.appendChild(tdTitleElement);
                trElement.appendChild(tdAuthorElement);
                trElement.appendChild(tdButtonContainerElement);
                tdButtonContainerElement.appendChild(btnEditElement);
                tdButtonContainerElement.appendChild(btnDeleteElement);
            }

        } catch (error) {
            // console.log(error.message)
        }
    }

    async function onSubmit() {
        let httpsHeaders = {};
        let url = null;
        try {
            if (titleInput.value && authorInput.value) {
                let entityObj = {
                    'author': authorInput.value,
                    'title': titleInput.value,
                }
                if (formBtn.textContent === 'Submit') {
                    httpsHeaders = {
                        'method': 'POST',
                        'body': '',
                    }
                    url = baseUrl;
                } else {
                    httpsHeaders = {
                        'method': 'PUT',
                        'body': '',
                    }
                    formBtn.textContent = 'Submit'
                    url = `${baseUrl}/${currentBookId}`;
                }
                httpsHeaders.body = JSON.stringify(entityObj);
                let response = await fetch(url, httpsHeaders);
                // if (!response.ok) {
                //     throw new Error()
                // }
                // let data = response.json();
                await loadAllBooks()
                titleInput.value = '';
                authorInput.value = '';
            }
        } catch (error) {
            // console.log(error.message);
        }
    }

    async function editBook(event) {
        let formHeading = document.querySelector('#form h3');
        let currentEntityId = event.target.parentElement.parentElement.id;
        formHeading.textContent = 'Edit FORM';
        formBtn.textContent = 'Save';
        currentBookId = currentEntityId
        titleInput.value = allBooksData[currentEntityId].title;
        authorInput.value = allBooksData[currentEntityId].author;

    }

    async function deleteBook(event) {
        let currentEntityId = event.target.parentElement.parentElement.id;
        let httpHeaders = {
            'method': 'DELETE'
        }
        let response = await fetch(`${baseUrl}/${currentEntityId}`, httpHeaders);
        await loadAllBooks();
    }
}

attachEvents();