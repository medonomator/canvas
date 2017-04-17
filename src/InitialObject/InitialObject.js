export function ROCKET(x,y) {
  this.x = x;
  this.y = y;
  this.height = 5;
  this.width = 5;
  this.v = 2
}

export function USER(x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color,
  this.gr = 1.05;
}

export function CUB(x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color
}
