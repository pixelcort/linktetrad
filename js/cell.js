/*globals LT*/

LT.Cell = function(){};

LT.Cell.prototype = {
  piece: null,
  draw: function(context, options) {
    var centerX = options.left+options.width/2;
    var centerY = options.top+options.height/2;
    context.beginPath();
    context.arc(centerX, centerY, (Math.min(options.width,options.height)/2), 0, 2*Math.PI, false);
    context.closePath();
    context.strokeStyle = '#fff';
    context.stroke();
  }
};

for (var i=0,l=LT.board.rows;i<l;i++) {
  for (var j=0,m=LT.board.columns;j<m;j++) {
    if (!LT.board.cells[i]) LT.board.cells[i] = [];

    LT.board.cells[i][j] = new LT.Cell();
  }
}