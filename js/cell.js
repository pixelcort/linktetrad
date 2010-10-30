/*globals LT*/

LT.Cell = function(){};

LT.Cell.prototype = {
  piece: null,
  draw: function(context, options) {
    var centerX = options.left+options.width/2;
    var centerY = options.top+options.height/2;
    context.beginPath();
    context.arc(centerX, centerY, (Math.min(options.width,options.height)/2)*(1-LT.board.padding), 0, 2*Math.PI, false);
    context.closePath();
    context.fillStyle = '#fff';
    context.fill();
  },
  dropPiece: function(piece) {
    // If this cell already has a piece, return the piece was not dropped
    if (this.piece) return false;

    // If there is a cell below us and it does not have a piece, dropPiece on it instead
    if (this.neighbor('down') && (!this.neighbor('down').piece)) return this.lowerCell().dropPiece(piece);

    // Drop the piece here
    this.piece = piece;

    return true; // Piece was dropped
  },
  neighbor: function(direction) { // Returns the neighbor cell, or null if it is out of bounds
    // Check if the direction is out of bounds
  },
  x:null,
  y:null
};

for (var i=0,l=LT.board.rows;i<l;i++) {
  for (var j=0,m=LT.board.columns;j<m;j++) {
    if (!LT.board.cells[i]) LT.board.cells[i] = [];

    var newCell = new LT.Cell();
    newCell.x = j;
    newCell.y = i;
    LT.board.cells[i][j] = newCell;
  }
}