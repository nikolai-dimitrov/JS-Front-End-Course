function trackBattle(arr) {
    let pirateShip = arr.shift().split('>').map(x => Number(x));
    let battleShip = arr.shift().split('>').map(x => Number(x));
    let sectionMaxHealth = Number(arr.shift());
    let booleanFlag = false
    let commandsMapper = {
        'Fire': function (index, damage) {
            if (index < 0 || index >= battleShip.length) {
                return
            }
            battleShip[index] -= Number(damage);
            if (Number(battleShip[index]) <= 0) {
                console.log(`You won! The enemy ship has sunken.`)
                return true
            }
        },
        'Defend': function (startIndex, endIndex, damage) {
            if ((startIndex < 0 || endIndex < 0) || (startIndex >= pirateShip.length || endIndex >= pirateShip.length)) {
                return
            }
            for (let i = startIndex; i <= endIndex; i++) {
                pirateShip[i] -= Number(damage);
                if (pirateShip[i] <= 0) {
                    console.log(`You lost! The pirate ship has sunken.`);
                    return true;
                }
            }
        },
        'Repair': function (index, health) {
            if (0 < index && index < pirateShip.length) {
                pirateShip[index] += Number(health);
                if (pirateShip[index] > sectionMaxHealth) {
                    pirateShip[index] = sectionMaxHealth;
                }
            }
        },
        'Status': function () {
            let counter = 0;
            pirateShip.forEach((element) => {
                if (element < (sectionMaxHealth * 0.2)) {
                    counter += 1;
                }
            });
            console.log(`${counter} sections need repair.`);
        }

    }

    for (const command of arr) {
        if (command === 'Retire') {
            break;
        }
        let type = command.split(' ')[0];
        let commands = command.split(' ').slice(1);
        let booleanFlag = commandsMapper[type](...commands);
        if (booleanFlag === true) {
            return
        }
    }
    let pirateShipStatus = 0;
    let battleShipStatus = 0;
    pirateShip.forEach(x => pirateShipStatus += x);
    battleShip.forEach(x => battleShipStatus += x);
    console.log(`Pirate ship status: ${pirateShipStatus}`);
    console.log(`Warship status: ${battleShipStatus}`);
}

trackBattle([
    "12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"]);

// trackBattle(["2>3>4>5>2",
//     "6>7>8>9>10>11",
//     "20",
//     "Status",
//     "Fire 2 3",
//     "Defend 0 4 11",
//     "Repair 3 18",
//     "Retire"]);