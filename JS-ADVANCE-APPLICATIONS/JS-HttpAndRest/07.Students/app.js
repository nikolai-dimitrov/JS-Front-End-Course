function attachEvents() {
    document.getElementById('submit').addEventListener('click', onSubmit);
    window.addEventListener('load', loadAllStudents);
    let tBodyEl = document.querySelector('tbody');
    let baseUrl = 'http://localhost:3030/jsonstore/collections/students';

    async function loadAllStudents() {
        tBodyEl.innerHTML = '';
        try {
            let response = await fetch(baseUrl);
            if (!response.ok){
                throw new Error()
            }
            let data = await response.json();
            data = Object.values(data)
            for (const currentEntity of data) {
                tBodyEl.innerHTML += `
                            <tr>
                                <td>${currentEntity.firstName}</td>
                                <td>${currentEntity.lastName}</td>
                                <td>${currentEntity.facultyNumber}</td>
                                <td>${currentEntity.grade}</td>
                            </tr>`
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    async function onSubmit() {
        let firstName = document.querySelector('input[name="firstName"]').value;
        let lastName = document.querySelector('input[name="lastName"]').value;
        let facultyNumber = document.querySelector('input[name="facultyNumber"]').value;
        let grade = document.querySelector('input[name="grade"]').value;
        let bodyObj = {
            firstName,
            lastName,
            facultyNumber,
            grade,
        }
        let httpHeaders = {
            'method': 'POST',
            'body': JSON.stringify(bodyObj),
        }
        try {
            let response = await fetch(baseUrl, httpHeaders);
            if (!response.ok) {
                throw new Error()
            }
            // let data = await response.json();
            await loadAllStudents()
        } catch (error) {
            console.log(error.message);
        }
    }
}

attachEvents();