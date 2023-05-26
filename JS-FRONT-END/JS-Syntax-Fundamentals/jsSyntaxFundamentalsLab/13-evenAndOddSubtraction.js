function subtract(arr) {
    let evenSum = 0;
    let oddSum = 0;
    for (const el of arr) {
        let currentEl = Number(el);
        if (currentEl % 2 == 0) {
            evenSum += el;
        } else {
            oddSum += el;
        }
    }
    console.log(evenSum - oddSum);
}

subtract([1, 2, 3, 4, 5, 6]);
subtract([3, 5, 7, 9]);
// function subtractDemo(arr) {
//     let odd = arr.filter((n) => Number(n) % 2 == 1);
//     let even = arr.filter((n) => Number(n) % 2 == 0);
//     let result = ((odd.reduce((a, b) => a + b)) - (even.reduce((a, b) => a + b)));
//     console.log(result);
// }