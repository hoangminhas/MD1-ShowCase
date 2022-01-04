import Map from './map.js';
import Dice from "./dice.js";


const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const tileSize = 32;
const velocity = 1;
const map1 = new Map(tileSize);

const player = map1.getPlayer(velocity);
const dice1 = new Dice();


// export function showDice() {
//     console.log('ád');
//     let kq = document.getElementById('result');
//     let random = dice1.roll();
//     kq.innerHTML = "Ket qua: " + random;
// }

function gameLoop() {
    map1.draw(canvas, ctx);
    player.draw(ctx);

}

setInterval(gameLoop, 1000/60);
