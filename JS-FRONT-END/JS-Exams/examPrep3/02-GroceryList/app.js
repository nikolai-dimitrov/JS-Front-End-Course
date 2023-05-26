window.addEventListener("load", solve);

function solve() {
    const baseUrl = 'http://localhost:3030/jsonstore/grocery/';
    let addBtn = document.getElementById('add-product');
    let updateBtn = document.getElementById('update-product');
    let loadBtn = document.getElementById('load-product');
    let tableBody = document.getElementById('tbody');

    addBtn.addEventListener('click', addHandler);
    updateBtn.addEventListener('click', updateFormHandler);
    loadBtn.addEventListener('click', loadHandler);

    let currentProductToEditId = '';
    let formInputFields = {
        'product': document.getElementById('product'),
        'count': document.getElementById('count'),
        'price': document.getElementById('price'),
    }

    async function addHandler(event) {
        event.preventDefault();
        try {
            let response = await fetch(baseUrl, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    'product': formInputFields['product'].value,
                    'count': formInputFields['count'].value,
                    'price': formInputFields['price'].value,
                })
            });
            let responseData = await response.json();
            loadHandler(event);
            for (const key in formInputFields) {
                formInputFields[key].value = '';
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    async function updateFormHandler(event) {
        event.preventDefault();
        try {
            let response = await fetch(`${baseUrl}${currentProductToEditId}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    'product': formInputFields["product"].value,
                    'count': formInputFields["count"].value,
                    'price': formInputFields["price"].value,
                })
            });
            let responseData = await response.json();
            addBtn.removeAttribute('disabled');
            updateBtn.setAttribute('disabled', 'true');
            for (const key in formInputFields) {
                formInputFields[key].value = '';
            }
            loadHandler(event)
        } catch (error) {
            console.log(error.message);
        }

    }

    async function updateHandler(event) {
        updateBtn.removeAttribute('disabled');
        addBtn.setAttribute('disabled', 'true');
        let trElementContainer = event.target.parentElement.parentElement;
        let currentProductName = trElementContainer.querySelector('.name');
        let currentProductCount = trElementContainer.querySelector('.count-product');
        let currentProductPrice = trElementContainer.querySelector('.product-price');

        formInputFields['product'].value = currentProductName.textContent;
        formInputFields['count'].value = currentProductCount.textContent;
        formInputFields['price'].value = currentProductPrice.textContent;

        currentProductToEditId = trElementContainer.id;

    }

    async function deleteHandler(event) {
        try {
            let response = await fetch(`${baseUrl}${event.target.parentElement.parentElement.id}`, {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
            });
            let responseData = await response.json();
            console.log(responseData);
            loadHandler(event);
        } catch (error) {

        }
    }

    async function loadHandler(event) {
        event.preventDefault();
        tableBody.innerHTML = '';
        try {
            let response = await fetch(baseUrl);
            let responseData = await response.json();
            for (const key in responseData) {
                // let count = responseData[key].count;
                // let price = responseData[key].price;
                // let product = responseData[key].product;
                // let id = responseData[key]._id;
                let {count, price, product, _id} = responseData[key]
                let trElement = customCreateElements('tr', null, tableBody, null, _id);
                let tdProductElement = customCreateElements('td', `${product}`, trElement, ['name']);
                let tdCountElement = customCreateElements('td', `${count}`, trElement, ['count-product']);
                let tdPriceElement = customCreateElements('td', `${price}`, trElement, ['product-price']);
                let tdButtonsContainer = customCreateElements('td', null, trElement, ['btn']);

                let updateBtn = customCreateElements('button', 'Update', tdButtonsContainer, ['update']);
                let deleteBtn = customCreateElements('button', 'Delete', tdButtonsContainer, ['delete']);

                updateBtn.addEventListener('click', updateHandler);
                deleteBtn.addEventListener('click', deleteHandler);
            }
        } catch (error) {
            console.log(error.message);
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


}