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
  },
  width: 600,
  height: 300
};
