function reverseArray(numOfElements, arr) {
    let reversedArray = arr.slice(0, numOfElements).reverse();
    console.log(reversedArray.join(' '));
}

reverseArray(3, [10, 20, 30, 40, 50]);
reverseArray(4, [-1, 20, 99, 5]);
reverseArray(2, [66, 43, 75, 89, 47]);

// function reverseArrayDemo(numOfElements, arr) {
//     let newArray = []
//     for (let i = 0; i < numOfElements ; i++) {
//         newArray.push(arr[i]);
//     }
//     let reversedArr = [];
//     for (let i = newArray.length-1; i >= 0 ; i--) {
//         reversedArr.push(newArray[i]);
//     }
//
//     console.log(reversedArr.join(' '));
// }
//
// reverseArrayDemo(3, [10, 20, 30, 40, 50]);
// reverseArrayDemo(4, [-1, 20, 99, 5]);
// reverseArrayDemo(2, [66, 43, 75, 89, 47]);