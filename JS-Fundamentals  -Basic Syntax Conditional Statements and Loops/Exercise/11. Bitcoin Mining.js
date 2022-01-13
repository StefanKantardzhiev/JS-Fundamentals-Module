function lazarsbitcoins(arr) {
    let totalgramsMined = 0;
    let gramsForBTC = 11949.16 / 67.51;
    let goldPrice = 67.51;
    let bitcoinPrice = 11949.16;
    let dayFound = 0;

   let isFirstBTCfound = false; 

    for (let i = 0; i < arr.length; i++) {
        let minedAmount = Number(arr[i])

        if ((i + 1) % 3 == 0) {
            minedAmount = minedAmount * 0.7;
        }
        totalgramsMined += minedAmount

        if ((!isFirstBTCfound) && totalgramsMined >= gramsForBTC) {
            dayFound = i + 1;
            isFirstBTCfound = true;
        }

    }

    let totalBitcoinBought = Math.floor(totalgramsMined / gramsForBTC);
    let moneySpentForBTC = totalBitcoinBought * bitcoinPrice;
    let gramsGoldLeft = totalgramsMined - totalBitcoinBought * gramsForBTC;
    let moneyLeft = gramsGoldLeft * goldPrice;
    
    console.log(`Bought bitcoins: ${totalBitcoinBought}`);
    if (isFirstBTCfound) {
        
        console.log(`Day of the first purchased bitcoin: ${dayFound}`);

    }
    console.log(`Left money: ${moneyLeft.toFixed(2)} lv.`)
}