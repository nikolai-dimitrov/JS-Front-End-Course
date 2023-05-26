function addressBook(arr) {
    let matrix = [];
    for (const el of arr) {
        let x = el.split(':');
        matrix.push(x);
    }
    let result = Object.fromEntries(matrix);
    let listToSort = []
    for (const [key, value] of Object.entries(result)) {
        listToSort.push(`${key}:${value}`)
    }
    let sortedArr = listToSort.sort((a, b) => {
        return a.localeCompare(b);
    })
    let sortedMatrix = []
    for (const el of sortedArr) {
        let x = el.split(':');
        sortedMatrix.push(x);
    }
    let finalResult = Object.fromEntries(sortedMatrix);
    for (const key in finalResult) {
        console.log(`${key} -> ${finalResult[key]}`);
    }

}
addressBook(['Tim:Doe Crossing',

    'Bill:Nelson Place',

    'Peter:Carlyle Ave',

    'Bill:Ornery Rd']);
//
// addressBook(['Bob:Huxley Rd',
//
//     'John:Milwaukee Crossing',
//
//     'Peter:Fordem Ave',
//
//     'Bob:Redwing Ave',
//
//     'George:Mesta Crossing',
//
//     'Ted:Gateway Way',
//
//     'Bill:Gateway Way',
//
//     'John:Grover Rd',
//
//     'Peter:Huxley Rd',
//
//     'Jeff:Gateway Way',
//
//     'Jeff:Huxley Rd'])