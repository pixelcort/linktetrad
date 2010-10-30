/*globals LT*/

LT.main = function() {
  console.log('Hello from jQuery!');

  var canvas = $('canvas')[0];
  var context = canvas.getContext('2d');

  LT.board.draw(context);
};

$(LT.main);