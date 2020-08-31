var Trianglify = require('trianglify');

var colorFunct = function() {

  let cur = onmousemove();

  return 'hsl('+Math.floor(Math.abs(cur[0]*cur[1])*360)+',80%,60%)';
}

let onmousemove = function(e) {
  return [Math.random(), Math.random()];
};

var defaults = {
  cell_size: 75,
  variance: 0.75,
  x_colors: 'random',
  y_colors: 'match_x',
  palette: Trianglify.colorbrewer,
  color_space: 'lab',
  color_function: false,
  stroke_width: 1.51,
  width: 600,
  height: 400,
  seed: null
};

function returnPattern() {
  var pattern = Trianglify(defaults);
  let canvas = document.getElementById('background-canvas');
  pattern.canvas(canvas);
}

export default returnPattern;