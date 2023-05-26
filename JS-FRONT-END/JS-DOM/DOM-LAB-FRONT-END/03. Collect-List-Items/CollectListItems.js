function extractText() {
    let arr = Array.from(document.querySelector('#items li'));
    let result = [];
    for (const el of arr) {
        result.push(el.textContent);
    }
    result = result.join('\n');
    document.getElementById('result').value = result;
}



// function extractText() {
//     let arr = Array.from(document.getElementsByTagName('li'));
//     let result = [];
//     for (const el of arr) {
//         result.push(el.textContent);
//     }
//     result = result.join('\n');
//     document.getElementById('result').value = result;
// }