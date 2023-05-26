function validate() {
    let inputField = document.getElementById('email');
    inputField.addEventListener('change', onChange);

    function onChange(event) {
        let emailArray = event.target.value.split(/[@.]+/);
        if (emailArray.length !== 3) {
            event.target.classList.add('error');
            return;
        }
        for (const el of emailArray) {
            for (const char of el) {
                console.log(char);
                if (!(char.charCodeAt(0) >= 97) && (!char.charCodeAt(0) <= 122)) {
                    event.target.classList.add('error');
                    return;
                }
            }
        }
        event.target.classList.remove('error');
    }

    function validateEmail(event,email) {

    }
}
