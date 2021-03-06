/*globals LT*/

LT.main = function() {
  window.console && window.console.log('Hello from jQuery!');

  var canvas = $('canvas')[0];
  var context = canvas.getContext('2d');

  LT.board.draw(context);

  // Add an event listener to the canvas
  $('canvas').click(function(e){
    var clickX = e.offsetX || e.clientX - e.currentTarget.getBoundingClientRect().left,
        clickY = e.offsetY || e.clientY - e.currentTarget.getBoundingClientRect().top;

    // Determine which cell this should go to
    var cellX = Math.min(Math.floor(clickX/(LT.board.width/LT.board.columns)),LT.board.columns-1);
    var cellY = Math.min(Math.floor(clickY/(LT.board.height/LT.board.rows)),LT.board.rows-1);
    // window.console && window.console.log(cellX+':'+cellY);

    var cell = LT.board.cells[cellY][cellX];

    // Create a new piece for the currentPlayer
    var piece = new LT.Piece();
    piece.player = LT.board.currentPlayer;

    // Attempt to a piece into the cell;
    var cellDroppedTo = cell.dropPiece(piece);

    if (cellDroppedTo) {
      // Draw the piece
      var cellWidth = LT.board.width/LT.board.columns;
      var cellHeight = LT.board.height/LT.board.rows;
      piece.draw(context, {
        top: cellHeight*cellDroppedTo.y,
        left: cellWidth*cellDroppedTo.x,
        width: cellWidth,
        height: cellHeight
      });

      // Toggle the currentPlayer
      LT.board.currentPlayer = (LT.board.currentPlayer === LT.Player.red) ? LT.Player.black : LT.Player.red;

      $('#turn').html(LT.board.currentPlayer.name + "'s turn!");

      // TODO: Check the board to see if the currentPlayer won. We'll only need to check the pieces nearby the newly dropped piece
      if (cellDroppedTo.hasWon()) {
        $('#turn').html(cellDroppedTo.piece.player.name+' has won!');
        $('button').addClass('someoneWon');
      }
    }
  });

  // Add an event listener to the reload button
  $('button').click(function() {
    window.location.reload();
  })
};

$(LT.main);