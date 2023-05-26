window.addEventListener('load', solve);

function solve() {
    let hiddenInputForId = document.getElementById('task-id');
    let elementLabelMapper = {}
    let totalPointsEl = document.getElementById('total-sprint-points');
    let totalPoints = 0;
    let taskCounter = 1;
    let parentSection = document.getElementById('tasks-section');
    let createBtn = document.getElementById('create-task-btn');
    createBtn.addEventListener('click', createHandler);
    let deleteBtn = document.getElementById('delete-task-btn');
    deleteBtn.addEventListener('click', deleteHandler);
    let formInputFields = {
        'title': document.getElementById('title'),
        'description': document.getElementById('description'),
        'label': document.getElementById('label'),
        'points': document.getElementById('points'),
        'assignee': document.getElementById('assignee'),
    }
    let iconsMapper = {
        'Feature': '&#8865',
        'Low Priority Bug': '&#9737',
        'High Priority Bug': '&#9888',
    }
    let clasesMapper = {
        'Feature': 'feature',
        'Low Priority Bug': 'low-priority',
        'High Priority Bug': 'high-priority',
    }

    function createHandler(event) {
        event.preventDefault();
        let areAllFieldsFilled = Object.values(formInputFields).every(input => input.value !== '');
        if (areAllFieldsFilled) {
            let articleEl = customCreateElements('article', null, parentSection, ['task-card'], `task-${taskCounter}`);
            let div1El = customCreateElements('div', `${formInputFields['label'].value} ${iconsMapper[formInputFields['label'].value]}`, articleEl, ['task-card-label', `${clasesMapper[formInputFields['label'].value]}`]);
            let h3El = customCreateElements('h3', `${formInputFields['title'].value}`, articleEl, ['task-card-title']);
            let pEl = customCreateElements('p', `${formInputFields['description'].value}`, articleEl, ['task-card-description']);
            let divPointsEl = customCreateElements('div', `Estimated at ${formInputFields["points"].value} pts`, articleEl, ['task-card-points']);
            let divAssigneeEl = customCreateElements('div', `Assigned to: ${formInputFields["assignee"].value}`, articleEl, ['task-card-assignee']);
            let divBtnContainer = customCreateElements('div', null, articleEl, ['task-card-actions']);
            let btnDelete = customCreateElements('button', 'Delete', divBtnContainer);
            btnDelete.addEventListener('click', deleteBtnFunc);
            div1El.innerHTML = `${formInputFields['label'].value} ${iconsMapper[formInputFields['label'].value]}`;
            elementLabelMapper[`task-${taskCounter}`] = {
                'title': formInputFields['title'].value,
                'description': formInputFields['description'].value,
                'label': formInputFields['label'].value,
                'points': formInputFields['points'].value,
                'assignee': formInputFields['assignee'].value,
            };
            taskCounter += 1
            totalPoints += Number(formInputFields['points'].value);
            totalPointsEl.textContent = `Total Points ${totalPoints}pts`
            for (const field in formInputFields) {
                formInputFields[field].value = '';
            }
        }
    }

    function deleteBtnFunc(event) {
        let currentArticleEl = event.target.parentElement.parentElement;
        let currentArticleId = currentArticleEl.id;
        console.log(elementLabelMapper)
        formInputFields['title'].value = elementLabelMapper[currentArticleId].title
        formInputFields['description'].value = elementLabelMapper[currentArticleId].description
        formInputFields['label'].value = elementLabelMapper[currentArticleId].label
        formInputFields['points'].value = elementLabelMapper[currentArticleId].points
        formInputFields['assignee'].value = elementLabelMapper[currentArticleId].assignee
        deleteBtn.removeAttribute('disabled');
        createBtn.setAttribute('disabled', 'true');
        hiddenInputForId.value = currentArticleId;
        for (const field in formInputFields) {
            formInputFields[field].setAttribute('disabled', 'true');
        }
    }

    function deleteHandler(event) {
        event.preventDefault();
        let currentElId = hiddenInputForId.value;
        let elementToDelete = document.getElementById(currentElId);
        totalPoints -= Number(formInputFields["points"].value);
        totalPointsEl.textContent = `Total Points ${totalPoints}pts`
        console.log(totalPoints)
        elementToDelete.remove();
        for (const field in formInputFields) {
            formInputFields[field].removeAttribute('disabled');
            formInputFields[field].value = '';
        }
        createBtn.removeAttribute('disabled');
        deleteBtn.setAttribute('disabled', 'true');
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

// formInputFields['title'].value = currentArticleEl.querySelector('.task-card-title');
// formInputFields['description'].value = currentArticleEl.querySelector('.task-card-description');
// // formInputFields['label'] = currentArticleEl.querySelector('.task-card-label');
// formInputFields['label'].value = elementLabelMapper[currentArticleEl.id];
// formInputFields['points'].value = currentArticleEl.querySelector('.task-card-points');
// formInputFields['assignee'].value = currentArticleEl.querySelector('.task-card-assignee');