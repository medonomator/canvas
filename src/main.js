Crafty.init(1000,400, document.getElementById('game'));
Crafty.e('2D, Canvas, Color, Twoway, Gravity')
  .attr({x: 0, y: 0, w: 50, h: 50})
  .color('#F00')
  .twoway(200)
  .gravity('Floor');
  Crafty.e('Floor, 2D, Canvas, Color')
    .attr({x: 0, y: 250, w: 250, h: 10})
    .color('green');
