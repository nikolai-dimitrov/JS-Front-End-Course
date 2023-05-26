function town(arr) {
    function compose(town, latitude, longitude) {
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        let result = {
            town,
            latitude,
            longitude,
        }
        return console.log(result);
    }

    for (const el of arr) {
        let town = el.split(' | ')[0];
        let latitude = Number(el.split(' | ')[1]);
        let longitude = Number(el.split(' | ')[2]);
        compose(town, latitude, longitude);
    }
}

town(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);