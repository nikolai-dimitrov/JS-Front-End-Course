function personInfo(firstName, lastName, age) {
    return {
        firstName,
        lastName,
        age,
    }
}

const peter = personInfo('Peter', 'Pan', 20);
const {firstName, age} = peter
console.log(firstName)
// console.log(personInfo('Peter', 'Pan', 20));

// function personInfo(firstName, lastName, age) {
//     const x = {
//         firstName,
//         lastName,
//         age,
//     }
//     for (const key in x) {
//         console.log(`Key: ${key} - Value: ${x[key]}`)
//     }
//     return x
// }
// console.log(personInfo('Peter', 'Pan', 20));