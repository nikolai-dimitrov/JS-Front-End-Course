function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/tasks/'
    let taskNameInput = document.getElementById('title');
    let loadBtn = document.getElementById('load-button');
    let addBtn = document.getElementById('add-button');
    let ulContainerTodo = document.getElementById('todo-list');
    loadBtn.addEventListener('click', loadHandler);
    addBtn.addEventListener('click', addHandler);

    async function loadHandler(event) {
        event.preventDefault();
        ulContainerTodo.innerHTML = ''
        try {
            let response = await fetch(baseUrl)
            // if(response.ok === false) {
            //     let error = await response.json();
            //     throw new Error(error.message);
            // }
            let responseData = await response.json();
            for (const objKey in responseData) {
                let taskName = responseData[objKey].name;
                let _id = responseData[objKey]._id;

                let liElement = customCreateElements('li', null, ulContainerTodo, null, _id);
                let spanTaskNameElement = customCreateElements('span', taskName, liElement);
                let buttonRemove = customCreateElements('button', 'Remove', liElement);
                let buttonEdit = customCreateElements('button', 'Edit', liElement);

                buttonRemove.addEventListener('click', removeHandler);
                buttonEdit.addEventListener('click', editHandler);
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    async function addHandler(event) {
        event.preventDefault();
        try {
            let response = await fetch(baseUrl, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    'name': taskNameInput.value

                })
            });
            // if (response.ok === false) {
            //     let error = await response.json()
            //     throw new Error(error.message)
            // }
            let responseData = await response.json();
            taskNameInput.value = '';
            loadHandler(event);
        } catch (error) {
            console.log(error.message);
        }

    }

    async function removeHandler(event) {
        let liElement = event.target.parentElement
        try {
            let response = await fetch(`${baseUrl}${liElement.id}`,
                {
                    method: 'DELETE',
                    headers: {'Content-Type': 'application/json'},
                });
            // if (response.ok === false) {
            //     let error = await response.json();
            //     throw new Error(error.message);
            // }
            let responseData = await response.json();
            console.log(responseData)
            loadHandler(event);
        } catch (error) {
            console.log(error.message);
        }
    }

    async function editHandler(event) {
        let liElementContainer = event.target.parentElement
        let currentSpan = event.target.parentElement.querySelector('span');
        liElementContainer.innerHTML = '<input type="text" value=""/><button>Remove</button><button>Submit</button>';
        let buttonRemove = liElementContainer.querySelectorAll('button')[0];
        let buttonSubmit = liElementContainer.querySelectorAll('button')[1];
        buttonRemove.addEventListener('click',removeHandler);
        buttonSubmit.addEventListener('click', submitHandler);
        liElementContainer.querySelector("input").value = `${currentSpan.textContent}`;
    }

    async function submitHandler(event) {
        let currentElementId = event.target.parentElement.id;
        let newValueField = event.target.parentElement.querySelector('input');
        try {
            let response = await fetch(`${baseUrl}${currentElementId}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    'name': newValueField.value,
                })
            });
            // if (response.ok === false) {
            //     let error = await response.json();
            //     throw new Error(error.message);
            // }
            let responseData = await response.json();
            loadHandler(event);
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
