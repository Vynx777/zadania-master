//zadanie 1

const animals = ["kot", "pies", "lama", "żółw", "mysz", "koń"];

function showArray(arr) {

    console.log("for");
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i], arr[i].length);
        sum += arr[i].length;
    }

    console.log("for of");
    for(const el of arr){
        console.log(el, el.length);
    }

    console.log("for each");
    arr.forEach(el => console.log(el, el.length));

    console.log("Suma liter:", sum);
}

showArray(animals);

//zadanie 2

function checkPalindrom(txt){
    txt = txt.toLowerCase();
    return txt === txt.split("").reverse().join("");
}

console.log(checkPalindrom("kajak"));
console.log(checkPalindrom("pies"));

//zadanie 3

const names = [
    "Marcin","Ania","Monika","Piotr","Beata",
    "ania","marcin","piotr","PIOTR","ANIA","MONIKA"
];

function unifyNames(arr){
    return arr.map(name => {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    });
}

function countDifferentNames(arr){
    const obj = {};
    arr.forEach(name => {
        if(!obj[name]) obj[name] = 0;
        obj[name]++;
    });
    return obj;
}

const unified = unifyNames(names);
console.log(unified);

console.log(countDifferentNames(unified));

//zadanie 4

function random(max){
    return Math.floor(Math.random() * (max + 1));
}

const tab1 = [];
for(let i = 0; i < 20; i++){
    tab1.push(random(100));
}

tab1.sort((a,b) => a - b);

const sum = tab1.reduce((a,b) => a + b, 0);
const avg = sum / tab1.length;

console.log(tab1);
console.log("Suma:", sum);
console.log("Średnia:", avg);

//zadanie 5

const tab2 = [
    "xloremipsumdolor",
    "kloremipsum",
    "aloremipsumdol",
    "blor",
    "cloremipsu",
    "gloremip",
];

tab2.sort((a,b) => a.length - b.length);

console.log(tab2);

const totalLetters = tab2.reduce((sum, txt) => sum + txt.length, 0);
console.log("Razem liter:", totalLetters);

//zadanie 6

const tabUsers = [
    {name : "Marcin", age: 14},
    {name : "Piotr", age: 18},
    {name : "Weronika", age: 20},
    {name : "Ania", age: 19},
    {name : "Agnieszka", age: 13},
    {name : "Magda", age: 30},
];

const adults = tabUsers.filter(u => u.age >= 18);

if(adults.length === 0){
    console.log("same małolaty");
} else {
    adults.sort((a,b) => a.age - b.age);
    console.log(adults);
}

//zadanie 7

function generateArray(){
    const arr = [];
    for(let i = 65; i <= 90; i++){
        arr.push(String.fromCharCode(i));
    }
    return arr;
}

function splitArray(tab, nr){
    const out = [];
    for(let i = 0; i < tab.length; i += nr){
        out.push(tab.slice(i, i + nr));
    }
    return out;
}

const alphabet = generateArray();
console.log(splitArray(alphabet, 6));

//zadanie 8

const arr = [
	[66,97,114,100,4,2,110,11,1,6,20],
	[99,3,10,122,76,101,111,3,32,100,0],
	[6,22,1,111,32,10,110,7,97,97,67],
	[60,97,116,32,100,23,97,114,100,32,34],
	[2,106,15,6,111,56,80,20,10,86,10],
	[20,110,121,32,107,55,50,99,110,105,8],
	[12,9,22,102,66,100,12,105,50,76,110],
	[42,81,123,92,26,98,20,1,20,11,10],
];

const str = "rrrdddllddrrruuuurrddrruurddddlld";

let x = 0, y = 0;
let msg = String.fromCharCode(arr[y][x]);

for(const move of str){
    if(move === "r") x++;
    if(move === "l") x--;
    if(move === "d") y++;
    if(move === "u") y--;
    msg += String.fromCharCode(arr[y][x]);
}

console.log(msg);
