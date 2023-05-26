function attachEventsListeners() {
    document.querySelector('input[type=button]').addEventListener('click', onClick);

    function onClick(event) {
        let inputValue = document.getElementById('inputDistance').value;
        let outputField = document.getElementById('outputDistance');
        let inputUnits = document.getElementById('inputUnits').value;
        let outputUnits = document.getElementById('outputUnits').value;
        let result = convertToMeters(event, inputValue, inputUnits, outputUnits);
        outputField.value = result;
    }

    function convertToMeters(event, inputValue, inputUnits, outputUnits) {
        let metersMapper = {
            'km': x => x * 1000,
            'm': x => x * 1,
            'cm': x => x * 0.01,
            'mm': x => x * 0.001,
            'mi': x => x * 1609.34,
            'yrd': x => x * 0.9144,
            'ft': x => x * 0.3048,
            'in': x => x * 0.0254,
        }
        let meters = metersMapper[inputUnits](inputValue);
        let outputMapper = {
            'km': x => x / 1000,
            'm': x => x * 1,
            'cm': x => x / 0.01,
            'mm': x => x / 0.001,
            'mi': x => x / 1609.34,
            'yrd': x => x / 0.9144,
            'ft': x => x / 0.3048,
            'in': x => x / 0.0254,
        }
        return outputMapper[outputUnits](meters);

    }
}