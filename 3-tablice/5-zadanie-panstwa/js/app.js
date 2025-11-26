//zadanie 1
const countryNames = countries.map(c => c.name);
console.log(countryNames);
const totalPopulation = countries.reduce((sum, c) => sum + c.population, 0);
console.log(totalPopulation);

//zadanie 2
const averagePopulation = totalPopulation / countries.length;
console.log(averagePopulation);

//zadanie 3
const positiveGrowthCount = countries.filter(c => c.grow > 0).length;
console.log(positiveGrowthCount);

//zadanie 4
const negativeGrowthCount = countries.filter(c => c.grow < 0).length;
console.log(negativeGrowthCount);

//zadanie 5
const totalWorldAreaPercent = countries.reduce((sum, c) => sum + c.world_area_in_percent, 0);
console.log(totalWorldAreaPercent);

//zadanie 6
const fertilityData = countries.filter(c => c.fertility_rate !== null).map(c => c.fertility_rate);
const averageFertility = fertilityData.reduce((sum, f) => sum + f, 0) / fertilityData.length;
console.log(averageFertility);

//zadanie 7
const averageAge = countries.reduce((sum, c) => sum + c.medium_age, 0) / countries.length;
console.log(averageAge);

//zadanie 8
const polandData = countries.find(c => c.name === "Poland");
console.log(polandData);

//zadanie 9
console.log(polandData.medium_age > averageAge);
