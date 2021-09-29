class Player {
  name: string;
  age: number;
  country: string;

  constructor(name: string, age: number, country: string) {
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

sakib.play();
mashrafi.play();

const players: Player[] = [];

players.push(sakib);
players.push(mashrafi);

console.log(players);
