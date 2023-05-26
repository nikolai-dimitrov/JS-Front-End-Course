function solve() {
    document.getElementById('formatItBtn').addEventListener('click', onFormat);

    function onFormat(event) {
        let textAreaContent = document.getElementById('input').value.split('.').filter(x => x.length > 0);
        let arrayLength = Math.ceil(textAreaContent.length / 3);
        for (let i = 0; i < (arrayLength); i++) {
            let threeSentence = textAreaContent.splice(0, 3);
            console.log(threeSentence);
            let paragraph = document.createElement('p');
            paragraph.textContent = threeSentence.join('.') + '.';
            document.getElementById('output').appendChild(paragraph);
        }
    }
}