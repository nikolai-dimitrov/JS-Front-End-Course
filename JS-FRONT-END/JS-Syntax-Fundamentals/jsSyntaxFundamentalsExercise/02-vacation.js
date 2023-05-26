function calcPrice(...data) {
    let [numberOfPeople, vacationType, day] = data;
    let priceForEach;
    if (day === 'Friday') {
        if (vacationType === 'Students') {
            priceForEach = 8.45;
        } else if (vacationType === 'Business') {
            priceForEach = 10.90;
        } else if (vacationType === 'Regular') {
            priceForEach = 15;
        }
    } else if (day === 'Saturday') {
        if (vacationType === 'Students') {
            priceForEach = 9.80;
        } else if (vacationType === 'Business') {
            priceForEach = 15.60;
        } else if (vacationType === 'Regular') {
            priceForEach = 20;
        }
    } else if (day === 'Sunday') {
        if (vacationType === 'Students') {
            priceForEach = 10.46;
        } else if (vacationType === 'Business') {
            priceForEach = 16;
        } else if (vacationType === 'Regular') {
            priceForEach = 22.50;
        }
    }
    let totalPrice = numberOfPeople * priceForEach;
    if (vacationType === 'Students' && numberOfPeople >= 30) {
        totalPrice -= totalPrice * 0.15;
    } else if (vacationType === 'Business' && numberOfPeople >= 100) {
        totalPrice -= 10 * priceForEach;
    } else if (vacationType === 'Regular' && (10 <= numberOfPeople && numberOfPeople <= 20)) {
        totalPrice -= totalPrice * 0.05;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

calcPrice(30, 'Students', 'Sunday')
calcPrice(40, 'Regular', 'Saturday')