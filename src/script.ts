import { Player } from "./classes/Player.js";

const sakib = new Player("Sakib", 34, "Bangladesh");
const mashrafi = new Player("Mashrafi", 37, "Bangladesh");

console.log(sakib.name);
console.log(sakib.country);

const players: Player[] = [];

players.push(sakib);
players.push(mashrafi);

console.log(players);
