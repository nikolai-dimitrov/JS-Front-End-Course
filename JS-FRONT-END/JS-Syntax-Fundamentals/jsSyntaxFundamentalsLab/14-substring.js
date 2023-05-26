function slicing(word, start, end) {
    let start_index = Number(start);
    let end_index = Number(end);
    let currentWord = word.substring(start_index, end_index + 1);
    console.log(currentWord);
}

slicing('ASentence', 1, 8);
slicing('SkipWord', 4, 7);


// function substringSlicing(word, start, end) {
//     let substring = word.slice(start, end + 1);
//     console.log(substring);
// }