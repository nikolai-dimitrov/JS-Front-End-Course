// function testF(item, index) {
//     let text = '';
//     let odd = 0
//     let even = 0
//     // text += `${index}:${item}`;
//     // console.log(text)
//     if (item % 2 === 0) {
//         even += item;
//     } else {
//         odd += item;
//     }
//
// }


function oddAndEvenSum(num) {
    let odd = 0;
    let even = 0;
    let numAsArray = num.toString().split('')
    numAsArray = numAsArray.map((x) => Number(x));
    // numAsArray.forEach(testF)
    for (const number of numAsArray) {
        if (number % 2 === 0) {
            even += number;
        } else {
            odd += number;
        }
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}

oddAndEvenSum('1000435');
oddAndEvenSum('3495892137259234');