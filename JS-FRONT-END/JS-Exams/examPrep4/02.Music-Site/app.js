window.addEventListener('load', solve);

function solve() {
    document.querySelector('form').addEventListener("submit", onSubmit);
    let likesCount = 0
    let formInputFields = {
        'genre': document.getElementById('genre'),
        'name': document.getElementById('name'),
        'author': document.getElementById('author'),
        'date': document.getElementById('date'),
    }

    function onSubmit(event) {
        event.preventDefault();
        let isAllFieldsFilled = Object.values(formInputFields).every(input => input.value !== '');
        if (isAllFieldsFilled) {
            let divAllHitsContainer = document.querySelector('#all-hits .all-hits-container')
            let divElement = customCreateElements('div', null, divAllHitsContainer, ['hits-info']);
            let imgElement = customCreateElements('img', null, divElement, null, null, {'src': './static/img/img.png'});
            let h2GenreElement = customCreateElements('h2', `Genre: ${formInputFields["genre"].value}`, divElement);
            let h2NameElement = customCreateElements('h2', `Name: ${formInputFields["name"].value}`, divElement);
            let h2AuthorElement = customCreateElements('h2', `Author: ${formInputFields["author"].value}`, divElement);
            let h3DateElement = customCreateElements('h3', `Date: ${formInputFields["date"].value}`, divElement);

            let saveBtn = customCreateElements('button', 'Save song', divElement, ['save-btn']);
            let likeBtn = customCreateElements('button', 'Like song', divElement, ['like-btn']);
            let deleteBtn = customCreateElements('button', 'Delete', divElement, ['delete-btn']);

            saveBtn.addEventListener('click', saveHandler);
            likeBtn.addEventListener('click', likeHandler);
            deleteBtn.addEventListener('click', deleteHandler);

            for (let field in formInputFields) {
                formInputFields[field].value = '';
            }
        }

    }

    function saveHandler(event) {
        let divSavedElementsContainer = document.querySelector('#saved-hits .saved-container');
        divSavedElementsContainer.appendChild(event.target.parentElement);
        let saveBtn = event.target.parentElement.querySelector('.save-btn');
        let likeBtn = event.target.parentElement.querySelector('.like-btn');
        saveBtn.remove();
        likeBtn.remove();
    }

    function likeHandler(event) {
        let likesElement = document.querySelector('#total-likes .likes p');
        likesCount += 1;
        likesElement.textContent = `Total Likes: ${likesCount}`;
        event.target.disabled = 'true';
    }

    function deleteHandler(event) {
        event.target.parentElement.remove();
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
}
