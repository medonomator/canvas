import { knopki, Right, Left, Up, Down }  from './initialSctipt/knopki';
import { USER, CUB } from './InitialObject/InitialObject';

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let w = canvas.width;
let h = canvas.height;

// partical system

// button
knopki()

let us = new USER(30, 30, 30, 30);

function gameLoop() {
  ctx.clearRect(0, 0,w ,h);

  ctx.strokeRect(us.x, us.y, us.width, us.height)
  us.y *= us.gr;

  if(us.y > h) {
    us.y = h-us.height
  }

  requestAnimationFrame(gameLoop)
}
gameLoop()
