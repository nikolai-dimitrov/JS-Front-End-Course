// window.addEventListener('load', solve);
async function solve() {
    document.getElementById('add-product').addEventListener('click', addProduct);
    document.getElementById('update-product').addEventListener('click', updateProduct);
    document.getElementById('load-product').addEventListener('click', loadProducts);
    const baseUrl = 'http://localhost:3030/jsonstore/grocery/';
    let formInputFields = {
        'productName': document.getElementById('product'),
        'productCount': document.getElementById('count'),
        'productPrice': document.getElementById('price'),
    }
    let elementToEditId = {
        'id': null,
    }
    let updateBtn = document.getElementById('update-product');
    let addBtn = document.getElementById('add-product');


    async function loadProducts(event) {
        if (event) {
            event.preventDefault();
        }
        try {
            let response = await fetch(baseUrl);
            let data = await response.json();
            let tbody = document.getElementById('tbody');
            tbody.innerHTML = '';
            let innerObjData = Object.values(data);
            for (const obj of innerObjData) {
                //Create elements.
                let trElement = document.createElement('tr');
                let tdNameElement = document.createElement('td');
                let tdCountElement = document.createElement('td');
                let tdPriceElement = document.createElement('td');
                let tdButtonsContainerElement = document.createElement('td');
                let updateBtn = document.createElement('button');
                let deleteBtn = document.createElement('button');

                //Add event listeners.
                updateBtn.addEventListener('click', updateHandler);
                deleteBtn.addEventListener('click', deleteHandler);

                //Add content classes , content and id to elements.
                trElement.id = obj._id;

                tdNameElement.classList.add('name');
                tdNameElement.textContent = obj.product;

                tdCountElement.classList.add('count-product');
                tdCountElement.textContent = obj.count;

                tdPriceElement.classList.add('product-price');
                tdPriceElement.textContent = obj.price;

                tdButtonsContainerElement.classList.add('btn');

                updateBtn.classList.add('update');
                updateBtn.textContent = ('Update');

                deleteBtn.classList.add('delete');
                deleteBtn.textContent = 'Delete';

                // Append elements to HTML.
                trElement.appendChild(tdNameElement);
                trElement.appendChild(tdCountElement);
                trElement.appendChild(tdPriceElement);
                trElement.appendChild(tdButtonsContainerElement);
                tdButtonsContainerElement.appendChild(updateBtn);
                tdButtonsContainerElement.appendChild(deleteBtn);
                tbody.appendChild(trElement);
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    async function addProduct(event) {
        event.preventDefault();
        let httpHeaders = {
            'method': 'POST',
            'body': JSON.stringify({
                'product': formInputFields["productName"].value,
                'count': formInputFields["productCount"].value,
                'price': formInputFields["productPrice"].value,
            })
        }
        try {
            let response = await fetch(baseUrl, httpHeaders);
            let data = response.json();
            formInputFields.productName.value = '';
            formInputFields.productCount.value = '';
            formInputFields.productPrice.value = '';

            await loadProducts(event);
        } catch (error) {
            console.log(error.message)
        }
    }

    async function deleteHandler(event) {
        let httpHeaders = {
            'method': 'DELETE',
        };
        let currentId = event.target.parentElement.parentElement.id
        try {
            let response = await fetch(`${baseUrl}${currentId}`, httpHeaders);
            let data = await response.json();
            await loadProducts();
        } catch (error) {
            console.log(error.message);
        }
    }

    async function updateHandler(event) {
        // let updateBtn = document.getElementById('update-product');
        // let addBtn = document.getElementById('add-product');
        elementToEditId.id = event.target.parentElement.parentElement.id;
        //todo get fetch with this id OR add all products on load in object and than get from there by id.
        let name = event.target.parentElement.parentElement.querySelector('.name');
        let count = event.target.parentElement.parentElement.querySelector('.count-product');
        let price = event.target.parentElement.parentElement.querySelector('.product-price');

        formInputFields.productName.value = name.textContent;
        formInputFields.productCount.value = count.textContent;
        formInputFields.productPrice.value = price.textContent;

        updateBtn.removeAttribute('disabled');
        addBtn.disabled = 'true';
    }

    async function updateProduct(event) {
        let currentId = elementToEditId.id;
        let httpHeaders = {
            'method': 'PATCH',
            'body': JSON.stringify({
                'product': formInputFields['productName'].value,
                'count': formInputFields['productCount'].value,
                'price': formInputFields['productPrice'].value,
            }),
        }
        try {
            let response = await fetch(`${baseUrl}${currentId}`, httpHeaders);
            let data = await response.json();
            formInputFields.productName.value = '';
            formInputFields.productCount.value = '';
            formInputFields.productPrice.value = '';

            updateBtn.setAttribute('disabled', 'true');
            addBtn.removeAttribute('disabled');

            await loadProducts(event);
        } catch (error) {
            console.log(error.message);
        }
    }
}

solve()