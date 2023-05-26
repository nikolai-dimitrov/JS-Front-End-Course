function encodeAndDecodeMessages() {
    Array.from(document.querySelectorAll('div button')).forEach(x => x.addEventListener('click', onClick));

    function onClick(event) {
        if (event.target.textContent === 'Encode and send it') {
            let message = event.target.parentElement.querySelector('textarea').value;
            let newMessage = '';
            let secondTextArea = document.querySelectorAll('textarea')[1];
            for (let char of message) {
                let asciiNumber = char.charCodeAt(0) + 1;
                let newChar = String.fromCharCode(asciiNumber);
                newMessage += newChar;
            }
            event.target.parentElement.querySelector('textarea').value = '';
            secondTextArea.value = newMessage;
        } else {
            let message = event.target.parentElement.querySelector('textarea').value;
            let newMessage = '';
            for (let char of message) {
                let asciiNumber = char.charCodeAt(0) - 1;
                let newChar = String.fromCharCode(asciiNumber);
                newMessage += newChar;
            }
            event.target.parentElement.querySelector('textarea').value = newMessage;
        }
    }
}


// function encodeAndDecodeMessages() {
//     Array.from(document.querySelectorAll('div button')).forEach(x => x.addEventListener('click', onClick));
//
//     function onClick(event) {
//         let savedMessage = event.target.parentElement.querySelector('textarea').value;
//         let message = event.target.parentElement.querySelector('textarea').value;
//         let newMessage = ''
//         let secondTextArea = document.querySelectorAll('textarea')[1];
//         if (event.target.textContent === 'Encode and send it') {
//             for (let char of message) {
//                 let asciiNumber = char.charCodeAt(0) + 1;
//                 let newChar = String.fromCharCode(asciiNumber);
//                 newMessage += newChar
//             }
//             event.target.parentElement.querySelector('textarea').value = '';
//             secondTextArea.value = newMessage
//         } else {
//             secondTextArea.value = savedMessage;
//         }
//     }
// }
