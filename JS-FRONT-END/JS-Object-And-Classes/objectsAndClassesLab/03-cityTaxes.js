function cityTaxes(name, population, treasury) {
    // function collectTaxes() {
    //     return this.treasury += this.population * this.taxRate;
    // }
    return {
        name,
        population,
        treasury,
        taxRate: 10,
        // collectTaxes,
        collectTaxes() {
            return this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            return this.population += this.population * percentage / 100;
        },
        applyRecession(percentage) {
            return this.treasury -= this.treasury * percentage / 100;
        }
    }
}

const city = cityTaxes('Tortuga', 7000, 15000);
console.log(city.applyGrowth(10));
console.log(city.collectTaxes());


// let aray = [1, 2, 3]
//
// function arrayCop(arr) {
//     let x = arr
//     x.push(3)
//     console.log(x)
//     console.log(arr)
// }
// arrayCop(aray)
// console.log(aray)