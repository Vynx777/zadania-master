//zadanie 1
const monthlySavings = Object.values(payments).map(p => p / 3);
const totalSaved = monthlySavings.reduce((sum, val) => sum + val, 0);
console.log(totalSaved);

//zadanie 2
const goldPrices = gold.map(g => g.close);
const totalCoins = monthlySavings.reduce((coins, saving, index) => {
    const price = goldPrices[index] || goldPrices[goldPrices.length - 1];
    return coins + saving / price;
}, 0);

const currentGoldPrice = gold[gold.length - 1].close;
const currentValue = totalCoins * currentGoldPrice;
console.log(totalCoins);
console.log(currentValue);
