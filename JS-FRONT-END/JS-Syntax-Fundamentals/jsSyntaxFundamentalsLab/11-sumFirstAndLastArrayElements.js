function takeElement(arr) {
    let firstElement = arr[0];
    let lastElement = arr[arr.length-1];
    console.log(firstElement + lastElement);
}

takeElement([20, 30, 40]);
takeElement([10, 17, 22, 33]);
takeElement([11, 58, 69]);


// modify array
// function takeElementDemo(arr) {
//     let firstEl = arr.shift()
//     let lastEl = arr.pop()
//     console.log(firstEl + lastEl)
// }
//
// takeElementDemo([20, 30, 40]);
// takeElementDemo([10, 17, 22, 33]);
// takeElementDemo([11, 58, 69])