export class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
    getProperty() {
        return this.age;
    }
}
export class CricketPlayer extends Player {
    constructor(name, age, country, run, wicket) {
        super(name, age, country);
        this.run = run;
        this.wicket = wicket;
    }
}
export class FootballPlayer extends Player {
    constructor(name, age, country, goal) {
        super(name, age, country);
        this.goal = goal;
    }
}
