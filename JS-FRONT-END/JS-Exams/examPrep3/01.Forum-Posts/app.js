window.addEventListener("load", solve);

function solve() {
    let publishBtn = document.getElementById('publish-btn');
    let clearBtn = document.getElementById('clear-btn');
    publishBtn.addEventListener('click', publishHandler);
    clearBtn.addEventListener('click', clearHandler);

    let ulPostContainer = document.getElementById('review-list');
    let ulPublishList = document.getElementById('published-list');

    let formInputFields = {
        'postTitle': document.getElementById('post-title'),
        'postCategory': document.getElementById('post-category'),
        'postContent': document.getElementById('post-content'),
    }

    function publishHandler(event) {
        event.preventDefault();
        let AllFieldsAreFilled = Object.values(formInputFields).every(input => input.value !== '');
        if (AllFieldsAreFilled) {
            let liElement = customCreateElements('li', null, ulPostContainer, ['rpost']);
            let articleElement = customCreateElements('article', null, liElement);
            let h4Element = customCreateElements('h4', formInputFields.postTitle.value, articleElement);
            let pCategoryElement = customCreateElements('p', `Category: ${formInputFields.postCategory.value}`, articleElement);
            let pContentElement = customCreateElements('p', `Content: ${formInputFields.postContent.value}`, articleElement);
            let editBtn = customCreateElements('button', 'Edit', liElement, ['action-btn', 'edit']);
            let approveBtn = customCreateElements('button', 'Approve', liElement, ['action-btn', 'approve']);

            editBtn.addEventListener('click', editHandler);
            approveBtn.addEventListener('click', approveHandler);
            for (const input in formInputFields) {
                formInputFields[input].value = '';
            }
        }
    }

    function editHandler(event) {
        let currentArticleChildrens = event.target.parentElement.querySelector('article').children;
        let currentTitle = currentArticleChildrens[0];
        let currentCategory = currentArticleChildrens[1];
        let currentContent = currentArticleChildrens[2];
        currentCategory.textContent = currentCategory.textContent.split(": ").slice(1,).join(": ");
        currentContent.textContent = currentContent.textContent.split(": ").slice(1,).join(": ");
        console.log(currentCategory)
        console.log(currentContent)


        formInputFields['postTitle'].value = currentTitle.textContent;
        formInputFields['postCategory'].value = currentCategory.textContent;
        console.log()
        formInputFields['postContent'].value = currentContent.textContent;

        event.target.parentElement.remove();
    }

    function approveHandler(event) {
        let currentLi = event.target.parentElement;
        let currentEditBtn = event.target.parentElement.querySelector('.edit');
        let currentApproveBtn = event.target.parentElement.querySelector('.approve');
        currentEditBtn.remove();
        currentApproveBtn.remove();
        ulPublishList.appendChild(currentLi);
    }

    function clearHandler() {
        ulPublishList.innerHTML = '';
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
