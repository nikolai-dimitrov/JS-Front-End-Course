// const person = {
//     name: 'gosho',
//     age: 20,
// }
// // console.log(person.name)
// let {name, age} = person
// age = 30
// console.log(age)
// console.log(person)

// ALL WORKS
// let y = 10
// const upper = {
//     increment: (x) => x += 1,
//     // decrement(x) {
//     //     return x -= 1
//     // },
//
//     // sukraten i IZPOLZVAN ZAPIS
//     decrement() {
//         return y -= 1
//     },
//     // dulag zapis
//     testF: function () {
//         return y = 0
//     }
// }
// console.log(upper["increment"](7))
// console.log(upper["decrement"]())
// console.log(upper["testF"]())
let result = {
    'name':'Gosho'
}

console.log(result.name)
result.print  = function () {
    console.log('Recently added!')
}
console.log(result)
result.print()