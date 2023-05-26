function inventory(arr) {
    function construct(hero, level, ...items) {
        let heroObject = {
            hero,
            level,
            items,
        }
        return heroObject;
    }

    let heroes = []
    for (const el of arr) {
        let heroName = el.split(' / ')[0];
        let heroLevel = Number(el.split(' / ')[1]);
        let heroItems = el.split(' / ')[2];
        let currentHero = construct(heroName, heroLevel, heroItems);
        heroes.push(currentHero);
    }
    let sortedHeroesByLevel = heroes.sort((h1, h2) => (h1.level < h2.level) ? -1 : (h1.level < h2.level) ? 1 : 0);
    for (const cHero of sortedHeroesByLevel) {
        console.log(`Hero: ${cHero.hero}\nlevel => ${cHero.level}\nitems => ${cHero.items.join(', ')}`);
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);