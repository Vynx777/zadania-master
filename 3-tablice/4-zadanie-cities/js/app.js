//zadanie 1
console.log(cities.length);

//zadanie 2
const totalPeople = cities.reduce((sum, city) => sum + city.people, 0);
console.log(totalPeople);

//zadanie 3
const firstBigCity = cities.find(city => city.people > 10000);
console.log(firstBigCity.name);

//zadanie 4
const averagePeople = totalPeople / cities.length;
const aboveAverageCities = cities.filter(city => city.people > averagePeople);
console.log(aboveAverageCities);

//zadanie 5
const bigCitiesNames = cities
  .filter(city => city.people > 10000)
  .map(city => city.name);
console.log(bigCitiesNames);

//zadanie 6
const biggerCitiesCount = cities.filter(city => city.people > 10000).length;
const smallerCitiesCount = cities.filter(city => city.people <= 10000).length;
console.log(biggerCitiesCount > smallerCitiesCount ? "więcej większych" : "więcej mniejszych");
