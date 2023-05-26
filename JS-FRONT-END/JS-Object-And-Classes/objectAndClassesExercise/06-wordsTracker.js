function wordsTracker(arr) {
    let result = {};
    let searchedWords = arr[0].split(' ');
    let list = arr.slice(1,);
    for (const searchedWord of searchedWords) {
        let x = list.filter((x) => x === searchedWord).length;
        result[searchedWord] = x;
    }
    let sortedResult = [];
    for (const kk in result) {
        sortedResult.push([kk, result[kk]]);
    }
    sortedResult.sort((a, b) => {
        return b[1] - a[1];
    })
    for (const pair of sortedResult) {
        console.log(`${pair[0]} - ${pair[1]}`);
    }
}

wordsTracker([

    'this sentence',

    'In', 'this', 'sentence', 'you', 'have',

    'to', 'count', 'the', 'occurrences', 'of',

    'the', 'words', 'this', 'and', 'sentence',

    'because', 'this', 'is', 'your', 'task',

])


// let x = 10
// let x = [1, 2, 3]

// function manipulateNum(num) {
// return num -= 5
// num.push(5);
// }

// manipulateNum(x);
// console.log(x);