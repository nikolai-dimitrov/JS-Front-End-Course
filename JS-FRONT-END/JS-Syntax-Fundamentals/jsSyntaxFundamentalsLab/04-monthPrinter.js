function monthMapper(num) {
    let result = 'Error!';
    let obj = {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December',
    }
    num = Number(num)
    if (1 <= num && num <= 12) {
        result = obj[num];
    }
    console.log(result);
}

monthMapper(5);
monthMapper(0);
monthMapper(13);