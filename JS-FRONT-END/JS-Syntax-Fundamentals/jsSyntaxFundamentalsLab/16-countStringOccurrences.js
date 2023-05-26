function countStrOccurrences(text, word) {
    let counter = 0;
    let textAsArray = text.split(' ');
    for (const textElement of textAsArray) {
        if (textElement === word) {
            counter += 1;
        }
    }
    console.log(counter);
}

countStrOccurrences('This is a word and it also is a sentence', 'is');
countStrOccurrences('softuni is great place for learning new programming languages', 'softuni');