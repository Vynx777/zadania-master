//zadanie 1
const rectangle = {
    height: 10,
    width: 5,
    showArea() {
        return this.height * this.width;
    }
};
const circle = {
    radius: 7,
    showArea() {
        return Math.PI * this.radius * this.radius;
    }
};
console.log(rectangle);
console.log(circle);
console.log(`Kwadrat ma szerokość ${rectangle.width} i wysokość ${rectangle.height}`);
console.log(`Jego pole to ${rectangle.showArea()}`);
console.log(`Koło ma promień ${circle.radius}`);
console.log(`Jego pole to ${circle.showArea()}`);

//zadanie 2
const currentUser = {
    name: "Jan",
    surname: "Kowalski",
    email: "jan.kowalski@example.com",
    www: "www.jankowalski.pl",
    userType: "admin",
    isActive: true,
    show() {
        console.log(this.name, this.surname, this.email, this.www, this.userType, this.isActive);
    },
    setActive(active) {
        this.isActive = active;
    }
};

//zadanie 3
const book = {
    title: "JavaScript dla każdego",
    author: "Jan Nowak",
    pageCount: 300,
    publisher: "Helion",
    showDetails() {
        for (let key in this) {
            if (typeof this[key] !== "function") console.log(key, this[key]);
        }
        Object.keys(this).forEach(key => { if (typeof this[key] !== "function") console.log(key, this[key]) });
        Object.values(this).forEach(value => { if (typeof value !== "function") console.log(value) });
        Object.entries(this).forEach(([key, value]) => { if (typeof value !== "function") console.log(key, value) });
    }
};

//zadanie 4
const spaceShip = {
    name: "Enterprise",
    currentLocation: "Earth",
    flyDistance: 0,
    flyTo(place, distance) {
        this.currentLocation = place;
        this.flyDistance += distance;
    },
    showInfo() {
        console.log(`Informacje o statku:\n----\nStatek ${this.name}\ndoleciał do miejsca ${this.currentLocation}\nStatek przeleciał już całkowity dystans ${this.flyDistance}`);
    },
    meetClingon() {
        const results = Array.from({ length: 100 }, () => Math.random());
        const positive = results.filter(r => r > 0.5).length;
        if (positive >= 50) {
            console.log(`Statek ${this.name} będący w okolicy ${this.currentLocation} zwycięsko wyszedł ze spotkania z Klingonami`);
        } else {
            console.warn(`Statek ${this.name} będący w okolicy ${this.currentLocation} został pokonany przez Klingonów`);
        }
    }
};

//zadanie 5
const bookUsers = {
    users: [],
    addUser(name, age, phone) {
        this.users.push({ name, age, phone });
    },
    showUsers() {
        console.log("Wszyscy użytkownicy w książce");
        this.users.forEach(u => console.log(u));
    },
    findByName(name) {
        const user = this.users.find(u => u.name === name);
        console.log(user || false);
    },
    findByPhone(phone) {
        const user = this.users.find(u => u.phone === phone);
        console.log(user || false);
    },
    getCount() {
        console.log(this.users.length);
    }
};

//zadanie 6
const tableGenerator = {
    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    generateIncTable(nr) {
        return Array.from({ length: nr + 1 }, (_, i) => i);
    },
    generateRandomTable(lng, min, max) {
        return Array.from({ length: lng }, () => this.randomNumber(min, max));
    },
    generateTableFromText(str) {
        if (typeof str !== "string") return [];
        return str.split(" ");
    },
    getMaxFromTable(arr) {
        return Math.max(...arr);
    },
    getMinFromTable(arr) {
        return Math.min(...arr);
    },
    delete(arr, index) {
        arr.splice(index, 1);
    }
};

//zadanie 7
const text = {
    check(txt, word) {
        return txt.includes(word);
    },
    getCount(txt) {
        return txt.length;
    },
    getWordsCount(txt) {
        return txt.split(" ").length;
    },
    setCapitalize(txt) {
        return txt.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    },
    setMix(txt) {
        return txt.split("").map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join("");
    },
    generateRandom(lng) {
        const letters = "abcdefghijklmnopqrstuvwxyz";
        return Array.from({ length: lng }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    }
};
