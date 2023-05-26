function sortNamesAlphabetically(arr) {
    let sortedNames = arr.sort();
    for (let i = 0; i < sortedNames.length ; i++) {
        console.log(`${i+1}.${sortedNames[i]}`);
    }
}

sortNamesAlphabetically(['John', 'Bob', 'Christina', 'Ema']);