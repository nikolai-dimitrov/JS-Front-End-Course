// function sum(a, b) {
//     return a + b;
// }

function subtract(a, b, c) {
    // let mySum = (a, b) => a + b;
    function summed(a, b) {
        return a + b
    }

    let result = summed(a, b) - c
    // let result = mySum(a, b) - c;
    console.log(result);
}

subtract(23, 6, 10);