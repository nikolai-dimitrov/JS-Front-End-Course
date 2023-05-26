function checkHashTag(text) {
    let textArray = text.split(' ');
    let specialWordsArray = [];
    for (const word of textArray) {
        let isDigit = false;
        if (word.startsWith('#') && word.length > 1) {
            for (const ch of word) {
                if ('1234567890'.includes(ch)) {
                    isDigit = true;
                    break;
                }
            }
            if (isDigit === false) {
                specialWordsArray.push(word.slice(1,));
            }
        }
    }
    console.log(specialWordsArray.join('\n'));

}

checkHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
checkHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');