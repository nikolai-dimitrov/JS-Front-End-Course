function sortingNumbers(array) {
    let sortedNums = array.sort((a, b) => a - b);
    let smallNums = array.slice(0, (sortedNums.length / 2)).reverse();
    let bigNums = array.slice((sortedNums.length / 2), 100).reverse();
    let result = []
    for (let i = 0; i < (sortedNums.length / 2); i++) {
        result.push(sortedNums[i]);
        result.push(bigNums[i]);
    }
    return result.slice(0, array.length);
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, 18, 56]));