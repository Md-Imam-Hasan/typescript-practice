import { CricketPlayer, FootballPlayer, Player } from "./classes/Player.js";
import { IsPlayer } from "./interfaces/IsPlayer";

const sakib = new CricketPlayer("Sakib", 34, "Bangladesh", 6600, 277);

let mashrafi: IsPlayer;
mashrafi = new CricketPlayer("Mashrafi", 37, "Bangladesh", 1787, 270);

const kaka = new FootballPlayer("Kaka", 39, "Brazil", 58);

// form static methods
const usainBolt = Player.createPlayerName("Usain Bolt");

console.log(usainBolt.name);
console.log(Player.fiscalYear);

console.log(sakib.name);
console.log(sakib.country);
console.log(kaka);

const players: IsPlayer[] = [];

players.push(sakib);
players.push(mashrafi);
players.push(kaka);

console.log(players);
