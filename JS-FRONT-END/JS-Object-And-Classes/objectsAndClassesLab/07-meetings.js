function meetings(arr) {
    let calendar = {}
    for (const el of arr) {
        let day = el.split(' ')[0];
        let name = el.split(' ')[1];
        if (day in calendar) {
            console.log(`Conflict on ${day}!`)
        }else {
            calendar[day] = name
            console.log(`Scheduled for ${day}`)
        }
    }
    for (const key in calendar) {
        console.log(`${key} -> ${calendar[key]}`);
    }
}

meetings(['Friday Bob',

    'Saturday Ted',

    'Monday Bill',

    'Monday John',

    'Wednesday George']);