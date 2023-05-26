function solve(arr) {
    class Songs {
        constructor(typeList, name, age) {
            this.typeList = typeList;
            this.name = name;
            this.age = age;
        }
    }

    let songs = [];
    let numberOfSongs = arr.shift();
    let typeSong = arr.pop();
    for (const song of arr) {
        let [type, name, time] = song.split('_');
        let currentSong = new Songs(type, name, time);
        songs.push(currentSong);
    }
    if (typeSong === 'all') {
        for (const currentSong of songs) {
            console.log(currentSong.name);
        }
    } else {
        songs.map((x) => {
            if (x.typeList === typeSong) {
                console.log(x.name);
            }
        });
    }
}

solve([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);
solve([4,

    'favourite_DownTown_3:14',

    'listenLater_Andalouse_3:24',

    'favourite_In To The Night_3:58',

    'favourite_Live It Up_3:48',

    'listenLater']);