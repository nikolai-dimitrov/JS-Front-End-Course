function theatrePromotions(day, age) {
    // let result = 'Error!';
    let result;
    age = Number(age);
    if (0 <= age && age <= 18) {
        if (day === 'Weekday') {
            result = 12;
        } else if (day === 'Weekend') {
            result = 15;
        } else {
            result = 5;
        }
    } else if (18 < age && age <= 64) {
        if (day === 'Weekday') {
            result = 18;
        } else if (day === 'Weekend') {
            result = 20;
        } else {
            result = 12;
        }
    } else if (64 < age && age <= 122) {
        if (day === 'Weekday') {
            result = 12;
        } else if (day === 'Weekend') {
            result = 15;
        } else {
            result = 10;
        }
    }
    if ('number' == typeof result) {
        console.log(`${result}$`);
    }
    else {
        console.log('Error!');
    }
}

theatrePromotions('Weekday', 42);

theatrePromotions('Holiday', -12);

theatrePromotions('Holiday', 15);