//zadanie 1
users.forEach(user => {
    console.log(`${user.name} -> ${user.email}`);
});

//zadanie 2
const pelnoletni = users.filter(u => u.age >= 18);
console.log(pelnoletni);

//zadanie 3
const kobiety = users.filter(u => u.gender === "female");
console.log(kobiety);

//zadanie 4
const zTagiemDolor = users.filter(u => u.tags.includes("dolor"));
console.log(zTagiemDolor);

//zadanie 5
const wszyscyPelnoletni = users.every(u => u.age >= 18);
console.log(wszyscyPelnoletni);

//zadanie 6
const jedenPelnoletni = users.some(u => u.age >= 18);
console.log(jedenPelnoletni);

//zadanie 7
const imionaDuze = users.map(u => u.name.toUpperCase());
console.log(imionaDuze);

//zadanie 8
const liczbaKobiet = users.filter(u => u.gender === "female").length;
const liczbaMezczyzn = users.filter(u => u.gender === "male").length;
console.log(liczbaKobiet, liczbaMezczyzn);
