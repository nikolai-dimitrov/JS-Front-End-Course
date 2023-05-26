function phoneBook(arr) {
    let phoneBookObj = {};
    for (const el of arr) {
        let name = el.split(' ')[0];
        let num = el.split(' ')[1];
        phoneBookObj[name] = num;
    }
    for (const key in phoneBookObj) {
        console.log(`${key} -> ${phoneBookObj[key]}`);
    }
}

phoneBook(
    ['Tim 0834212554',

        'Peter 0877547887',

        'Bill 0896543112',

        'Tim 0876566344']
)