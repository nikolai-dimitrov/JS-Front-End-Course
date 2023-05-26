function isSameDigits(num) {
    let splittedNum = String(num).split('')
    let arr = [splittedNum[0]];
    let sum = Number(splittedNum[0]);
    for (let i = 1; i < splittedNum.length ; i++) {
        if (splittedNum[i] == arr[0]) {
            arr.push(splittedNum[i])
            sum += Number(splittedNum[i]);
        } else {
            sum += Number(splittedNum[i]);
        }
    }
    if (arr.length === splittedNum.length) {
        console.log('true');
    } else {
        console.log('false');
    }
    console.log(sum);
}

isSameDigits(2222222);
isSameDigits(1234);

// function isSameDigits(num) {
//     let splittedNum = String(num).split('')
//     let digitCounter = 1;
//     let firstChar = Number(splittedNum[0]);
//     let digitSum = firstChar;
//     for (const numElement of splittedNum.slice(1, 200)) {
//         digitSum += Number(numElement);
//         if (Number(numElement) === firstChar) {
//             digitCounter += 1;
//         }
//     }
//     if (splittedNum.length === digitCounter) {
//         console.log('true');
//     } else {
//         console.log('false');
//     }
//     console.log(digitSum);
// }