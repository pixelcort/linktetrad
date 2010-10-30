/*globals LT*/

LT.board = {
  columns: 7,
  rows: 6,
  connections: 4,
  cells: [], // row-major matrix
  draw: function(context) {
    var gradient = context.createLinearGradient(0,0,0,this.height);
    gradient.addColorStop(0.0, '#000');
    gradient.addColorStop(1.0, '#999');

    context.fillStyle = gradient;
    context.fillRect(0,0,this.width,this.height);

    // Draw the cells
    var cellWidth = this.width/this.columns;
    var cellHeight = this.height/this.rows;
    for (var i=0,l=this.rows;i<l;i++) {
      for (var j=0,m=this.columns;j<m;j++) {
        var cell = this.cells[i][j];

        cell.draw(context,{
          top: cellHeight*i,
          left: cellWidth*j,
          width: cellWidth,
          height: cellHeight
        });
      }
    }
  },
  width: 600,
  height: 300
};
