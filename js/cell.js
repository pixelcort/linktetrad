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
    if (this.piece) return null;

    // If there is a cell below us and it does not have a piece, dropPiece on it instead and return the cell dropped onto
    if (this.neighbor('down') && (!this.neighbor('down').piece)) return this.neighbor('down').dropPiece(piece);

    // Drop the piece here
    this.piece = piece;

    return this; // The cell where Piece was dropped
  },
  neighbor: function(direction) { // Returns the neighbor cell, or null if it is out of bounds
    var neighborX = this.x,
        neighborY= this.y;
    switch (direction) {
      case 'down':      neighborY++; break;
      case 'left':      neighborX--; break;
      case 'up':        neighborY--; break;
      case 'right':     neighborX++; break;
      case 'upleft':    neighborX--; neighborY--; break;
      case 'upright':   neighborX++; neighborY--; break;
      case 'downleft':  neighborX--; neighborY++; break;
      case 'downright': neighborX++; neighborY++; break;
    }

    // Return the neighbor
    return LT.board.cells[neighborY] && LT.board.cells[neighborY][neighborX];

  },
  hasWon: function() {
    // First, get the player for the piece of the current cell
    var player = this.piece.player;

    // Check each direction pair
    if (this.pointCount('left',player)    +this.pointCount('right',player)    -1 >= LT.board.connections ||
        this.pointCount('upleft',player)  +this.pointCount('downright',player)-1 >= LT.board.connections ||
        this.pointCount('up',player)      +this.pointCount('down',player)     -1 >= LT.board.connections ||
        this.pointCount('upright',player) +this.pointCount('downleft',player) -1 >= LT.board.connections) {
      return true;
    }
    return false;
  },
  pointCount: function(direction,player) {
    // If we don't have a piece, return early
    if (!this.piece) return 0;

    // If we our player doesn't match the provided player, return early
    if (player !== this.piece.player) return 0;

    // If we are at the edge/corner, return just one for ourselves
    if (!this.neighbor(direction)) return 1;

    // Return the pointCount of our neigbor in the provided direction plus one for ourselves
    return (this.neighbor(direction).pointCount(direction,player) || 0) + 1;
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