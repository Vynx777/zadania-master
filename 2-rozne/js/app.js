// zadanie 1

function countWord(txt) {
    if(!txt) return 0;
    return txt.trim().split(/\s+/).length;
}

const input = prompt("Podaj tekst:");
if(!input) {
    console.log("nie mam co liczyć");
} else {
    console.log(`Tekst "${input}" składa się z ${countWord(input)} wyrazów`);
}

// zadanie 2

function fixName(name) {
    if(!name) return false;
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

const name = prompt("Podaj imię:");
if(!name) {
    console.log("nic nie wpisano");
} else {
    const fixed = fixName(name);
    console.log(`Imię ${fixed} rozpoczyna się od litery ${fixed[0]}`);
}

//zadanie 3

function fileInfo(file) {
    if(!file || !file.includes(".")) return false;

    const parts = file.split(".");
    if(parts.length < 2) return false;

    return {
        name: parts.slice(0, -1).join("."),
        extension: parts[parts.length - 1]
    };
}

//zadanie 4

function generateID() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let id = "";
    for(let i=0; i<20; i++) {
        id += chars[Math.floor(Math.random() * chars.length)];
    }
    return id;
}

//zadanie 5

function printNumbers(nr) {
    let out = "";
    for(let i = 1; i <= nr; i++) out += i;
    return out;
}

//zadanie 6

function alaAction(name, month) {
    if(!name || !month) return;

    const m = month.toLowerCase();

    if(["grudzień","styczeń","luty"].includes(m)) return `${name} jeździ na sankach`;
    if(["marzec","kwiecień","maj"].includes(m)) return `${name} chodzi po kałużach`;
    if(["czerwiec","lipiec","sierpień"].includes(m)) return `${name} się opala`;
    if(["wrzesień","październik","listopad"].includes(m)) return `${name} zbiera liście`;

    return `${name} uczy się JS`;
}

console.log(alaAction("Bartosz", "Wrzesień"));

//zadani 7

function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let arr = [];
for(let i=0; i<10; i++) {
    arr.push(generateRandom(1,20));
}

let above10 = arr.filter(n => n > 10).length;

console.log(above10 >= 5 ? "udało się" : "niestety nie");

//zadanie 8

function generateRandomTable(min, max, count) {
    const t = [];
    for(let i=0; i<count; i++) {
        t.push(generateRandom(min, max));
    }
    return t;
}

const table = generateRandomTable(10, 100000, 10);

for(const n of table) {
    console.log(String(n).padStart(10, "_"));
}

//zadanie 9

function sortNames(txt, separator) {
    return txt.split(separator)
              .sort()
              .join(separator);
}

console.log(sortNames("Ania|Marcin|Bartek", "|"));

//zadanie 10

function printBorderText(txt, max) {
    if(max && txt.length > max) {
        txt = txt.slice(0, max) + "...";
    }

    const line = "═".repeat(txt.length + 2);

    console.log("╔" + line + "╗");
    console.log("║ " + txt + " ║");
    console.log("╚" + line + "╝");
}

printBorderText("To jest jakiś tekst", 20);

//zadanie 11

const min = 1;
const max = 1000;

let user = Number(prompt(`Podaj liczbę ${min}-${max}`));

if(isNaN(user) || user < min || user > max) {
    console.log("podana wartość jest błędna");
} else {
    let count = 0;
    while(true) {
        count++;
        const rand = generateRandom(min,max);
        if(rand === user) break;
    }
    console.log("Ilość iteracji:", count);
}

//zadanie 12

function checkFemale(name) {
    return name.toLowerCase().endsWith("a");
}

function countWomanInTable(arr) {
    let count = 0;
    for(const user of arr) {
        const first = user.split(" ")[0];
        if(checkFemale(first)) count++;
    }
    return count;
}

const users = [
    "Ania Nowak","Piotr Kowalski","Bartek Kosecki","Natalia Nowak",
    "Weronika Piotrowska","Agata Karolak","Tomasz Nowak","Mateusz Kowalski",
    "Marcin Kotecki","Beata Lecka","Katarzyna Małecka"
];

console.log(countWomanInTable(users));

//zadanie 13

function monthName(nr) {
    const months = [
        "styczeń","luty","marzec","kwiecień","maj","czerwiec",
        "lipiec","sierpień","wrzesień","październik","listopad","grudzień"
    ];

    if(typeof nr !== "number" || nr < 1 || nr > 12) return false;

    return months[nr - 1];
}

//zadanie 14

function checkPalindrom(txt) {
    const low = txt.toLowerCase();
    return low === low.split("").reverse().join("");
}


//zadanie 15

function mix(txt) {
    let out = "";
    for(let i=0; i<txt.length; i++) {
        out += i % 2 === 0 ? txt[i].toUpperCase() : txt[i].toLowerCase();
    }
    return out;
}

function smallNames(arr) {
    return arr.map(n => n.toLowerCase());
}

function bigNames(arr) {
    return arr.map(n => n.toUpperCase());
}

function mixNames(arr) {
    return arr.map(n => mix(n));
}


//zadanie 16

function arraySummary(arr) {
    const ob = { sum: 0 };

    for(const n of arr) {
        ob.sum += n;
        if(!ob[n]) ob[n] = 1;
        else ob[n]++;
    }

    return ob;
}

const tab = [1,3,5,7,3,5,5,1,7,8,4,3,4,2,2,1];
console.log(arraySummary(tab));

//zadanie 17

function log() {
    let counter = 0;

    return function(txt) {
        counter++;
        console.log(`${counter}. ${txt}`);
    };
}

const logger = log();
logger("To jest pierwszy tekst");
logger("To jest drugi tekst");
