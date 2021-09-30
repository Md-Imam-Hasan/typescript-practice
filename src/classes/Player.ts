import { IsPlayer } from "../interfaces/IsPlayer.js";

export abstract class Player implements IsPlayer {
  static fiscalYear = 2020;
  constructor(
    public name: string,
    protected age: number, // added protected modifier so that it can be accessed in its child classes;
    readonly country: string
  ) {}

  static createPlayerName(name: string) {
    return { name: name };
  }

  // abstract keyword force to the child class to implement the method by there own
  abstract play(this: Player): void;

  getProperty() {
    return this.age;
  }
}

export class CricketPlayer extends Player {
  run: number;
  wicket: number;
  constructor(
    name: string,
    age: number,
    country: string,
    run: number,
    wicket: number
  ) {
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
  goal: number;
  constructor(name: string, age: number, country: string, goal: number) {
    super(name, age, country);
    this.goal = goal;
  }

  play() {
    console.log(`${this.name} from ${this.country} has scored ${this.goal}`);
  }
}
