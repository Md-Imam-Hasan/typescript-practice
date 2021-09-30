export class Player {
    constructor(name, age, // added protected modifier so that it can be accessed in its child classes;
    country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    static createPlayerName(name) {
        return { name: name };
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
    getProperty() {
        return this.age;
    }
}
Player.fiscalYear = 2020;
export class CricketPlayer extends Player {
    constructor(name, age, country, run, wicket) {
        super(name, age, country);
        this.run = run;
        this.wicket = wicket;
    }
    // modified the play() method
    play() {
        console.log(`${this.name} from ${this.country} is ${this.age} years old`);
    }
}
export class FootballPlayer extends Player {
    constructor(name, age, country, goal) {
        super(name, age, country);
        this.goal = goal;
    }
}
