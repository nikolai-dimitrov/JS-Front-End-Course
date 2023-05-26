function findWord(word, text) {
    let textArray = text.split(' ');
    for (const currentWord of textArray) {
        if (currentWord.toLowerCase() === word.toLowerCase()) {
            console.log(word);
            return;
        }
    }
    console.log(`${word} not found!`);
}

findWord('javascript', 'JavaScript is the best programming language');
findWord('python', 'JavaScript is the best programming language');