"use strict";
class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
// class shorthand when using access modifiers
class Player1 {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
const sakib = new Player("Sakib", 34, "Bangladesh");
const mashrafi = new Player("Mashrafi", 37, "Bangladesh");
// name is public, so it can be modified and accessed outside of class
sakib.name = "Sakib Al Hasan";
console.log(sakib.name);
// age is private, so it can not be modified or accessed outside of class
sakib.age = 33;
console.log(sakib.age);
// country is readonly, so it can not be modified but accessed outside of class
sakib.country = "Baharain";
console.log(sakib.country);
const players = [];
players.push(sakib);
players.push(mashrafi);
console.log(players);
