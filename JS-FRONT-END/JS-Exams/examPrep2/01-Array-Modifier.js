// function modifyArray(arr) {
//     let array = arr.shift().split(' ').map(el => Number(el));
//     let commandsMapper = {
//         swap,
//         multiply,
//         decrease,
//     }
//     for (const commandLine of arr) {
//         if (commandLine === 'end') {
//             break
//         }
//         let commandArray = commandLine.split(' ');
//         let command = commandArray.shift();
//         commandsMapper[command](...commandArray);
//
//
//     }
//     console.log(array.join(', '));
//
//     function swap(index1, index2) {
//         let firstEl = array[index1];
//         let secondEl = array[index2];
//         array[index1] = secondEl;
//         array[index2] = firstEl;
//     }
//
//     function multiply(index1, index2) {
//         let firstNum = array[index1];
//         let secondNum = array[index2];
//         array[index1] = firstNum * secondNum;
//     }
//
//     function decrease() {
//         for (let i = 0; i < array.length; i++) {
//             array[i] -= 1;
//         }
//     }
// }
//
// modifyArray([
//     '23 -2 321 87 42 90 -123',
//     'swap 1 3',
//     'swap 3 6',
//     'swap 1 0',
//     'multiply 1 2',
//     'multiply 2 1',
//     'decrease',
//     'end'
// ])