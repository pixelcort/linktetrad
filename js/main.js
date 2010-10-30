/*globals LT*/

LT.main = function() {
  console.log('Hello from jQuery!');

  var canvas = $('canvas')[0];
  var context = canvas.getContext('2d');

  LT.board.draw(context);

  // Add an event listener to the canvas
  $('canvas').click(function(e){
    var clickX = e.offsetX,
        clickY = e.offsetY;

    // Determine which cell this should go to
    var cellX = Math.min(Math.floor(clickX/(LT.board.width/LT.board.columns)),LT.board.columns-1);
    var cellY = Math.min(Math.floor(clickY/(LT.board.height/LT.board.rows)),LT.board.rows-1);
    console.log(cellX+':'+cellY);

    var cell = LT.board.cells[cellY][cellX];

    // Create a new piece for the currentPlayer
    var piece = new LT.Piece();
    piece.player = LT.board.currentPlayer;

    // Attempt to a piece into the cell;
    var pieceDropped = cell.dropPiece(piece);

    // If the pieceDropped, Toggle the currentPlayer
    if (pieceDropped) {
      LT.board.currentPlayer = (LT.board.currentPlayer === LT.Player.red) ? LT.Player.black : LT.Player.red;
    }
  });
};

$(LT.main);