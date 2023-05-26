function oddOccurrences(text) {
    let testResult = [];
    let transformedArr = text.toLowerCase().split(' ');
    for (const word of transformedArr) {
        let wordOccCount = transformedArr.filter((x) => x === word).length;
        if (wordOccCount % 2 !== 0) {
            if (!(testResult.includes(word))) {
                testResult.push(word);
            }
        }
    }
    console.log(testResult.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');