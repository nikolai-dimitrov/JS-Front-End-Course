function calculateSpeed(speed, area) {
    let areaLimits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
    }
    let status;
    if (speed <= areaLimits[area]) {
        console.log(`Driving ${speed} km/h in a ${areaLimits[area]} zone`);
    } else {
        let overSpeed = speed - areaLimits[area];
        if (overSpeed <= 20 ) {
            status = 'speeding';
        } else if (overSpeed <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${areaLimits[area]} - ${status}`);
    }
}

calculateSpeed(40, 'city');
calculateSpeed(21, 'residential');
calculateSpeed(120, 'interstate');