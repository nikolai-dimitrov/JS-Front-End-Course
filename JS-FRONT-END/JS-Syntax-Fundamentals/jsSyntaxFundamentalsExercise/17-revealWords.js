function revealWord(words, text) {
    let wordsArray = words.split(', ');
    let textArray = text.split(' ');
    for (const word of wordsArray) {
        let hiddenWord = '*'.repeat(word.length)
        for (let i = 0; i < textArray.length; i++) {
            let currentWord = textArray[i];
            if (currentWord.length === hiddenWord.length && currentWord === hiddenWord) {
                text = text.replace(hiddenWord, word);
            }
        }

    }
    console.log(text);
}

revealWord('great', 'softuni is ***** place for learning new programming languages');
revealWord('great, learning', 'softuni is ***** place for ******** new programming languages');
// function revealWord(words, text) {
//     let wordsArray = words.split(', ')
//     for (const word of wordsArray) {
//         let hiddenWord = '*'.repeat(word.length)
//         while (text.includes(hiddenWord)) {
//             if ()
//                 text = text.replace(hiddenWord,word)
//         }
//     }
//     console.log(text)
// }