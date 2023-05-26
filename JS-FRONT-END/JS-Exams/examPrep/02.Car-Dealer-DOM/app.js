window.addEventListener("load", solve);

function solve() {
    let tBodyElement = document.getElementById('table-body');
    let publishBtn = document.getElementById('publish');
    let totalProfitSum = 0;
    publishBtn.addEventListener('click', onPublish);
    let formInputFields = {
        'make': document.getElementById('make'),
        'model': document.getElementById('model'),
        'year': document.getElementById('year'),
        'fuel': document.getElementById('fuel'),
        'originalCost': document.getElementById('original-cost'),
        'sellingPrice': document.getElementById('selling-price'),
    }
    let formCurrentState = {};

    function onPublish(event) {
        event.preventDefault()
        let allFieldsFilled = Object.values(formInputFields).every(input => input.value !== '');
        if ((formInputFields.sellingPrice.value > formInputFields.originalCost.value) && allFieldsFilled) {
            let trElement = customCreateElements('tr', null, tBodyElement, ['row']);
            let tdMakeElement = customCreateElements('td', formInputFields.make.value, trElement);
            let tdModelElement = customCreateElements('td', formInputFields.model.value, trElement);
            let tdYearElement = customCreateElements('td', formInputFields.year.value, trElement);
            let tdFuelElement = customCreateElements('td', formInputFields.fuel.value, trElement);
            let tdOriginalCostElement = customCreateElements('td', formInputFields.originalCost.value, trElement);
            let tdSellingPriceElement = customCreateElements('td', formInputFields.sellingPrice.value, trElement);
            let tdButtonsContainerElement = customCreateElements('td', null, trElement);
            let editBtn = customCreateElements('button', 'Edit', tdButtonsContainerElement, ['action-btn', 'edit']);
            let sellBtn = customCreateElements('button', 'Sell', tdButtonsContainerElement, ['action-btn', 'sell']);
            editBtn.addEventListener('click', onEdit);
            sellBtn.addEventListener('click', onSell);
            for (const field in formInputFields) {
                formInputFields[field].value = '';
            }
        }
    }

    function onEdit(event) {
        let trContainerElement = Array.from(event.target.parentElement.parentElement.querySelectorAll('td'));
        formInputFields['make'].value = trContainerElement[0].textContent;
        formInputFields['model'].value = trContainerElement[1].textContent;
        formInputFields['year'].value = trContainerElement[2].textContent;
        formInputFields['fuel'].value = trContainerElement[3].textContent;
        formInputFields['originalCost'].value = trContainerElement[4].textContent;
        formInputFields['sellingPrice'].value = trContainerElement[5].textContent;
        event.target.parentElement.parentElement.remove();
    }

    function onSell(event) {
        let trContainerElement = Array.from(event.target.parentElement.parentElement.querySelectorAll('td'));
        let makeEl = trContainerElement[0];
        let modelEl = trContainerElement[1];
        let yearEl = trContainerElement[2];
        let profit = Number(trContainerElement[5].textContent) - Number(trContainerElement[4].textContent);
        let ulSoldCars = document.getElementById('cars-list');
        let liElement = customCreateElements('li', null, ulSoldCars, ['each-list']);
        let spanMakeAndModelElement = customCreateElements('span', `${makeEl.textContent} ${modelEl.textContent}`, liElement);
        let spanYearElement = customCreateElements('span', `${yearEl.textContent}`, liElement);
        let spanProfitElement = customCreateElements('span', `${profit}`, liElement);
        let totalProfitElement = document.getElementById('profit');
        totalProfitSum += profit;
        totalProfitElement.textContent = totalProfitSum.toFixed(2);
        event.target.parentElement.parentElement.remove();
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
