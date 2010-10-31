/*globals LT*/

LT.Piece = function(){};

LT.Piece.prototype = {
  player: null,
  draw: function(context, options) {
    // console.log('drawing piece');
    var centerX = options.left+options.width/2;
    var centerY = options.top+options.height/2;
    context.beginPath();
    context.arc(centerX, centerY, (Math.min(options.width,options.height)/2)*(1-LT.board.padding)*(1-LT.Piece.PADDING), 0, 2*Math.PI, false);
    context.closePath();
    context.fillStyle = this.player.team; // Use the color of the player
    context.fill();
  }
};

LT.Piece.PADDING = 0.1;