import { knopki, Right, Left, Up, Down }  from './initialSctipt/knopki';
import { USER, ROCKET } from './InitialObject/InitialObject';

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let w = canvas.width;
let h = canvas.height;


knopki()

function gameLoop() {
  ctx.clearRect(0, 0,w ,h)

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

window.addEventListener('keydown', (e) => {
  if(e.keyCode === 32) {
    spawner.push(new ROCKET(user.x + user.width/2, user.y));
    sound.play();
  }
}, false)


// let sprite = new Image();
// sprite.src = require('./img/tom.png');
//
//
// let sound = new Audio();
// sound.src = require('./sound/Laser_Shoot.wav');
