import { knopki, Right, Left, Up, Down }  from './initialSctipt/knopki';
import { USER, CUB } from './InitialObject/InitialObject';

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let w = canvas.width;
let h = canvas.height;


// button
knopki()

let user = new USER(30, 30, 30, 30);

function gameLoop() {
  ctx.clearRect(0, 0,w ,h);

  move()
  requestAnimationFrame(gameLoop)
}
gameLoop()

function move() {
  if(Right) user.x += 5;
  if(Left)  user.x -= 5;
  if(Up)    user.y -= 5;
  if(Down)  user.y += 5;
}

// let sprite = new Image();
// sprite.src = require('./img/tom.png');
//
//
// let sound = new Audio();
// sound.src = require('./sound/Laser_Shoot.wav');


// matrix
