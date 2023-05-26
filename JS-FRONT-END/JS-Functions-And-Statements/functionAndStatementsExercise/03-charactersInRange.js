function printCharSequence(firstSymbol, secondSymbol) {
    let chars = [];

    function getAsciiValues(char1, char2) {
        let charAscii1 = char1.charCodeAt(0);
        let charAscii2 = char2.charCodeAt(0);
        let numsAsciiArray = [charAscii1, charAscii2];

        let sortedNums = numsAsciiArray.sort((a, b) => a - b);
        return sortedNums
    }

    let [start, end] = getAsciiValues(firstSymbol, secondSymbol);
    for (let i = start + 1; i < end; i++) {
        chars.push(String.fromCharCode(i));
    }
    console.log(chars.join(' '));
}

printCharSequence('a', 'd');
printCharSequence('#', ':');
printCharSequence('C', '#');