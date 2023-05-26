async function getInfo() {
    let stopId = document.getElementById('stopId');
    let stopName = document.getElementById('stopName');
    let ulEl = document.getElementById('buses');
    ulEl.innerHTML = '';
    try {
        // send  request.
        let res = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId.value}`);
        if (res.ok === false) {
            throw new Error(`${res.status} ${res.statusText}`);
        }
        // display results.
        let data = await res.json();
        document.getElementById('stopName').textContent = data.name;

        for (const key in data.buses) {
            let liEl = document.createElement('li');
            liEl.textContent = `Bus ${key} arrives in ${data.buses[key]} minutes`;
            ulEl.appendChild(liEl);
        }
    } catch (error) {
        document.getElementById('stopName').textContent = 'Error';
    }
    stopId.value = '';
}
