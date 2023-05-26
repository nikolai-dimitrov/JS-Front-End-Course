function piccolo(arr) {
    let result = {
        list: [],
        IN(plate) {
            if (!(this.list.includes(plate))) {
                this.list.push(plate);
            }
        },
        OUT(plate) {
            if (this.list.includes(plate)) {
                let currentIndex = this.list.indexOf(plate);
                this.list.splice(currentIndex, 1);
            }
        }
    };
    for (const el of arr) {
        let command = el.split(', ')[0];
        let numberPlate = el.split(', ')[1];
        result[command](numberPlate);
    }
    if (result["list"].length > 0) {
        result["list"] = result["list"].sort((a, b) => {
            return a.localeCompare(b);
        });
        console.log(result["list"].join('\n'));
    } else {
        console.log('Parking Lot is Empty.')
    }

}

piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT',
    'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA',
    'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU']);
piccolo(['IN, CA2844AA',

    'IN, CA1234TA',

    'OUT, CA2844AA',

    'OUT, CA1234TA'])