// TODO:
function attachEvents() {
    let loadBtn = document.getElementById('load-board-btn');
    loadBtn.addEventListener('click', loadHandler);
    let createBtn = document.getElementById('create-task-btn');
    createBtn.addEventListener('click', createHandler);
    let url = 'http://localhost:3030/jsonstore/tasks/';
    let inputTitle = document.getElementById('title');
    let inputDesc = document.getElementById('description');
    let sections = {
        'ToDo': document.getElementById('todo-section'),
        'In Progress': document.getElementById('in-progress-section'),
        'Code Review': document.getElementById('code-review-section'),
        'Done': document.getElementById('done-section'),
    }
    let btnMapper = {
        'ToDo': 'Move to In Progress',
        'In Progress': 'Move to Code Review',
        'Code Review': 'Move to Done',
        'Done': 'Close',
    }

    async function loadHandler(event) {
        event.preventDefault();
        for (const key in sections) {
            let currentSection = sections[key];
            let ul = currentSection.querySelector('.task-list');
            ul.innerHTML = '';
        }
        try {
            let response = await fetch(url);
            let responseData = await response.json();
            for (const task in responseData) {
                let currentTask = responseData[task]
                let parentSection = sections[currentTask.status];
                let ulParentElement = parentSection.querySelector('.task-list');
                let liElement = customCreateElements('li', null, ulParentElement, ['task'], currentTask._id);
                let h3Element = customCreateElements('h3', `${currentTask.title}`, liElement);
                let pElement = customCreateElements('p', `${currentTask.description}`, liElement);
                let buttonElement = customCreateElements('button', `${btnMapper[currentTask.status]}`, liElement);
                if (buttonElement.textContent === 'Close') {
                    buttonElement.addEventListener('click', closeHandler);
                }else {
                    buttonElement.addEventListener('click',moveHandler);
                }
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    async function createHandler(event) {
        event.preventDefault();
        try {
            let response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    'title': inputTitle.value,
                    'description': inputDesc.value,
                    'status': 'ToDo'
                })
            })
            let responseData = await response.json();
            inputTitle.value = '';
            inputDesc.value = '';
            loadHandler(event);
        } catch (error) {
            inputTitle.value = '';
            inputDesc.value = '';
            console.log(error.message);
        }

    }
    async function moveHandler(event) {
        let parentSectionEl = event.target.parentElement.parentElement.parentElement;
        let mapperNext = {
            'todo-section':'In Progress',
            'in-progress-section':'Code Review',
            'code-review-section':'Done',
        }
        let newStatus = mapperNext[parentSectionEl.id];
        console.log(parentSectionEl)
        console.log(newStatus)
        try {
            let response = await fetch(`${url}${event.target.parentElement.id}`,{
                method:'PATCH',
                body: JSON.stringify({
                    'status':newStatus
                })
            })
            let responseData = await response.json();
            console.log(responseData);
            loadHandler(event);
        }catch(error) {
            console.log(error.message);
        }
    }

    async function closeHandler(event) {
        try {
            let response = await fetch(`${url}${event.target.parentElement.id}`, {
                method: 'DELETE',
            });
            let responseData = await response.json();
            loadHandler(event)
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

attachEvents();