/*globals LT*/

LT.Cell = function(){};

LT.Cell.prototype = {
  piece: null
};

for (var i=0,l=LT.board.rows;i<l;i++) {
  for (var j=0,m=LT.board.columns;j<m;j++) {
    if (!LT.board.cells[i]) LT.board.cells[i] = [];

    LT.board.cells[i][j] = new LT.Cell();
  }
}