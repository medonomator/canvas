import { knopki, Right, Left, Up, Down }  from './initialSctipt/knopki';
import { USER, ROCKET } from './InitialObject/InitialObject';

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let w = canvas.width;
let h = canvas.height;
let x = 10,
    y = 10;

let img = new Image();
img.src = require('./img/1.jpg');
let sound = new Audio();
sound.src = require('./sound/Laser_Shoot.wav');

// button
knopki()

let spawner = [];
let user = new USER(100, w/3, 100, 5)

function gameLoop() {
  ctx.clearRect(0, 0,w ,h)


  ctx.fillRect(user.x, user.y, user.width, user.height)

  spawner.map(item => {
    ctx.fillRect(item.x, item.y, item.width, item.height)
    item.y -= item.v
  })

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
