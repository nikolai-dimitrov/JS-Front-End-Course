function hearthDelivery(arr) {
    let valentinePointsArr = arr[0].split('@').map((x) => Number(x));
    let items = arr.slice(1,);
    let cupidPosition = 0;
    for (const item of items) {
        // let splittedCommand = item.split(' ')
        if (item === 'Love!') {
            break
        }
        let command = item.split(' ')[0];
        let value = Number(item.split(' ')[1]);
        cupidPosition += value;
        if (cupidPosition >= valentinePointsArr.length) {
            cupidPosition = 0;
        }
        valentinePointsArr[cupidPosition] -= 2;
        if (valentinePointsArr[cupidPosition] === 0) {
            console.log(`Place ${cupidPosition} has Valentine's day.`);
        } else if (valentinePointsArr[cupidPosition] < 0) {
            console.log(`Place ${cupidPosition} already had Valentine's day.`);
        }

    }
    console.log(`Cupid's last position was ${cupidPosition}.`)
    let housesLeft = valentinePointsArr.filter((x) => x > 0);
    if (housesLeft.length > 0) {
        console.log(`Cupid has failed ${housesLeft.length} places.`);
    } else {
        console.log('Mission was successful.');
    }

}

// hearthDelivery(["10@10@10@2",
//     "Jump 1",
//     "Jump 2",
//     "Love!"]);

hearthDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])