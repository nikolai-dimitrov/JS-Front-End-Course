function censoredWords(text, word) {
    while (text.includes(word)) {
        let specialSumbol = '*'.repeat(word.length);
        text = text.replace(word, specialSumbol);
    }
    console.log(text);
}

censoredWords('A small sentence with some words', 'small');
censoredWords('Find the hidden word', 'hidden');