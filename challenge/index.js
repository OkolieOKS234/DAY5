import { Players, tennisPlayer } from "./players.js";

let tennisplayer = new tennisPlayer("Federer", "Switzerland", 38);
let players = new Players("Ronaldo", "Portugal");

let metaInfo2 = tennisplayer.Metadata();
let metaInfo1 = players.Metadata();
console.log(metaInfo2);
console.log(metaInfo1);
