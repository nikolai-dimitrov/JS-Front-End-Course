function solve() {
    let baseUrl = 'http://localhost:3030/jsonstore/bus/schedule';
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');
    let displaySpan = document.getElementsByClassName('info')[0];
    let data = {
        'name': 'depot',
        'next': 'depot',
    }

    async function depart() {
        try {
            let response = await fetch(`${baseUrl}/${data.next}`);
            if (response.ok === false) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            data = await response.json();
            displaySpan.textContent = `Next stop ${data.name}`;
            departBtn.disabled = 'true';
            arriveBtn.disabled = '';
            console.log(data);
        } catch (error) {
            departBtn.disabled = 'true';
            arriveBtn.disabled = 'true';
        }

    }

    async function arrive() {
        displaySpan.textContent = `Arriving at ${data.name}`;
        departBtn.disabled = '';
        arriveBtn.disabled = 'true';
    }

    return {
        depart,
        arrive
    };
}

let result = solve();