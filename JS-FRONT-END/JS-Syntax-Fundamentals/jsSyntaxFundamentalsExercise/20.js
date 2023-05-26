function splitedByUppercaseLetter(text) {
    let splitedText = text.split('')
    let transformedText = [];
    for (const char of splitedText) {
        if (char === char.toUpperCase()) {
            transformedText.push(1)
            transformedText.push(char);
        } else {
            transformedText.push(char);
        }
    }
    let newText = transformedText.join('')
    if (newText.startsWith('1')) {
        newText = newText.substring(1, 200);
    }
    newText = newText.split(1)
    console.log(newText.join(', '));
}

splitedByUppercaseLetter('SplitMeIfYouCanHaHaYouCantOrYouCan');
splitedByUppercaseLetter('HoldTheDoor');
splitedByUppercaseLetter('ThisIsSoAnnoyingToDo')
splitedByUppercaseLetter('momentIHave')
// function splitedByUppercaseLetter(text) {
//     let str = text.match(/[A-Z][a-z]+/g);
//     let newStr = str.join(', ');
//     console.log(newStr);
// }