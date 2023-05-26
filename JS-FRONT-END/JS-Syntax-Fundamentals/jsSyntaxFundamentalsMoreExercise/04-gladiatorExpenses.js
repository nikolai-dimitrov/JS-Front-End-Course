function gladiatorExpenses(fightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalPrice = 0;
    let [brokenHelmets, brokenSwords, brokenShields, brokenArmors] = [0, 0, 0, 0];
    for (let i = 1; i <= fightsCount; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            brokenHelmets += 1;
            brokenSwords += 1;
            brokenShields += 1;
            if (brokenShields >= 2 && brokenShields % 2 === 0) {
                brokenArmors += 1;
            }
        } else if (i % 2 === 0) {
            brokenHelmets += 1;
        } else if (i % 3 === 0) {
            brokenSwords += 1;
        }
    }
    totalPrice = (brokenHelmets * helmetPrice) + (brokenSwords * swordPrice) + (brokenArmors * armorPrice) + (brokenShields * shieldPrice);
    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200)