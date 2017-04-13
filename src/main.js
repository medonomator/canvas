import { knopki, Right, Left, Up, Down }  from './initialSctipt/knopki';
import { USER, CUB } from './InitialObject/InitialObject';

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let w = canvas.width;
let h = canvas.height;

// partical system

// button
knopki()


function gameLoop() {
  ctx.clearRect(0, 0,w ,h);


  requestAnimationFrame(gameLoop)
}
gameLoop()
