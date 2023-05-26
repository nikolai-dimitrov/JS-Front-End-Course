function attachEventsListeners() {
    // Array.from(document.querySelectorAll('main div')).forEach((x) => {
    //     let buttonElement = x.children[2];
    //     buttonElement.addEventListener('click', onClick);
    // });
    [...(document.querySelectorAll('main div input:nth-child(3)'))].forEach(x => x.addEventListener('click', onClick));

    function onClick(event) {
        let clickedInputFieldValue = Number(event.target.parentElement.children[1].value);
        let convertedTimeObject = converter(event, clickedInputFieldValue);
        let inputFieldsArray = Array.from(document.querySelectorAll('div input:nth-child(2)'));
        for (let currentInputField of inputFieldsArray) {
            currentInputField.value = convertedTimeObject[currentInputField.id];
            console.log(currentInputField);
        }
        console.log(inputFieldsArray);
    }

    function convertToSeconds(event, clickedInputFieldValue) {
        let mapperObj = {
            'daysBtn': (x => x * 86400),
            'hoursBtn': (x => x * 3600),
            'minutesBtn': (x => x * 60),
            'secondsBtn': (x => x * 1),
        };

        if (!isNaN(clickedInputFieldValue)) {
            let calculatedSeconds = mapperObj[event.target.id](clickedInputFieldValue);
            return calculatedSeconds

        }
    }

    function converter(event, clickedInputFieldValue) {
        let timeInSeconds = convertToSeconds(event, clickedInputFieldValue)
        let obj = {
            'days': timeInSeconds / 86400,
            'hours': timeInSeconds / 3600,
            'minutes': timeInSeconds / 60,
            'seconds': timeInSeconds,
        }
        return obj;
    }
}
