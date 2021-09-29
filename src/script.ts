import { Player } from "./classes/Player.js";
import { IsPlayer } from "./interfaces/IsPlayer";

const sakib = new Player("Sakib", 34, "Bangladesh");

let mashrafi: IsPlayer;
mashrafi = new Player("Mashrafi", 37, "Bangladesh");

console.log(sakib.name);
console.log(sakib.country);

const players: IsPlayer[] = [];

players.push(sakib);
players.push(mashrafi);

console.log(players);
