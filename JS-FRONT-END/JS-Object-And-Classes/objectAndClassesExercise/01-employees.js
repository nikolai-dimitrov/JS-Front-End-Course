function employees(arr) {
    let result = {};
    arr.reduc
    for (const el of arr) {
        result[el] = el.length;
    }
    for (const key in result) {
        console.log(`Name: ${key} -- Personal Number: ${result[key]}`);
    }
}

employees([

    'Silas Butler',

    'Adnaan Buckley',

    'Juan Peterson',

    'Brendan Villarreal'
]);