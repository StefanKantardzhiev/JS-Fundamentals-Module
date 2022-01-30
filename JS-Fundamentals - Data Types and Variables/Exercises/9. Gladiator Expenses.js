function gladiatorExpensesV1(lostFightsCount, helmetPrice, swordPrice, shieldPrice,  armorPrice){
    let trashedHelmetCount = 0;
    let trashedSwordCount = 0;
    let trashedShieldCount = 0;
    let trashedArmourCount = 0;

    for (let currLostFight = 1; currLostFight <= lostFightsCount; currLostFight++) {
        if(currLostFight % 2 == 0){
            trashedHelmetCount++;
        }

        if(currLostFight % 3 == 0){
            trashedSwordCount++;
        }

        if(currLostFight % 6 == 0){
            trashedShieldCount++;
        }

        if(currLostFight % 12 == 0){
            trashedArmourCount++;
        }
    }

    let totalPrice = trashedHelmetCount * helmetPrice + trashedSwordCount * swordPrice +
        trashedShieldCount * shieldPrice + trashedArmourCount * armorPrice;

    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}