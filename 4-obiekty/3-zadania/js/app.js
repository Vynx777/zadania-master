//zadanie 1
class User {
    constructor(nick, name, surname, email, role) {
        this.nick = nick;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.loginDates = [];
        this.active = true;
    }
    logIn() {
        const date = new Intl.DateTimeFormat('pl-PL', { dateStyle: 'full', timeStyle: 'long' }).format(new Date());
        this.loginDates.push(date);
    }
    showLoginDates() {
        this.loginDates.forEach(d => console.log(d));
    }
    showDetails() {
        for (let key in this) {
            console.log(key, this[key]);
        }
    }
    toggleActive() {
        this.active = !this.active;
    }
}

const users = [
    new User("nick1","Jan","Kowalski","jan@example.com","editor"),
    new User("nick2","Anna","Nowak","anna@example.com","reader"),
    new User("nick3","Piotr","Zielinski","piotr@example.com","admin")
];

//zadanie 2
class Fighter {
    constructor(name, live = 20, power = 3) {
        this.name = name;
        this.live = live;
        this.power = power;
    }
    attack(who, log) {
        if (Math.random() < 0.5) {
            who.live -= this.power;
            if (who.live < 0) who.live = 0;
            log.push(`${this.name} zaatakował ${who.name}, ${this.name} live: ${this.live}, ${who.name} live: ${who.live}`);
        }
    }
}

const names = [ "Baraka", "Jax", "Johnny Cage", "Kitana", "Kung Lao", "Liu Kang", "Mileena", "Raiden", "Reptile", "Scorpion", "Shang Tsung", "Sub-Zero"];
const log = [];
const fighters = names.map(n => new Fighter(n));
function getFighter() {
    return fighters.length ? fighters.shift() : null;
}
let leftFighter = null;
let rightFighter = null;

function loop() {
    console.clear();
    if(!leftFighter) leftFighter = getFighter();
    if(!rightFighter) rightFighter = getFighter();
    if(!leftFighter || !rightFighter) {
        return false;
    }
    leftFighter.attack(rightFighter, log);
    rightFighter.attack(leftFighter, log);
    log.forEach(l => console.log(l));
    log.length = 0;
    if(leftFighter.live === 0) {
        leftFighter = null;
        rightFighter.live = 20;
    }
    if(rightFighter.live === 0) {
        rightFighter = null;
        leftFighter.live = 20;
    }
    setTimeout(loop, 1000);
}

loop();

//zadanie 3
String.prototype.sortText = function(char) {
    return this.split(char).sort().join(char);
};

//zadanie 4
String.prototype.reverse = function() {
    return this.split("").reverse().join("");
};

//zadanie 5
Array.prototype.sum = function() {
    return this.reduce((a,b) => a+b,0);
};
Array.prototype.sortNr = function() {
    return this.sort((a,b) => a-b);
};
