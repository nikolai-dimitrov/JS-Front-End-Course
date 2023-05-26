// function calc(a) {
//     let result = 0
//     for (let i = a - 1; i >= 1; i -= 1) {
//         if (result === 0) {
//             result = a * i
//         } else {
//             result *= i
//         }
//     }
//     return result
// }

function calculateFactorial(a, b) {
    function calc(a) {
        let result = 0;
        for (let i = a - 1; i >= 1; i -= 1) {
            if (result === 0) {
                result = a * i;
            } else {
                result *= i;
            }
        }
        return result;
    }
    let x = calc(a);
    let y = calc(b);
    let totalSum = x / y;
    console.log(totalSum.toFixed(2));
}

calculateFactorial(5, 2);
calculateFactorial(6, 2);
// 5 x 4 x 3 x 2 x 1
// function calculateFactorial(num1, num2) {
//     let result = 1;
//     let ll = [];
//     function calc(num) {
//         if (num === 0) {
//             ll.push(result)
//             result = 1;
//             return;
//         }
//         result += result * (num - 1);
//         num -= 1;
//         calc(num)
//     }
//     calc(num1);
//     calc(2);
//     console.log((ll[0] / ll[1]).toFixed(2));
// }
