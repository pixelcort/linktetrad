/*globals LT*/

LT.Player = function(){};

LT.Player.prototype = {
  team: null
};

LT.Player.red = new LT.Player();
LT.Player.red.team = 'red';
LT.Player.red.name = "Player 1";

LT.Player.black = new LT.Player();
LT.Player.black.team = 'black';
LT.Player.black.name = "Player 2";

LT.board.currentPlayer = LT.Player.red; // According to http://en.wikipedia.org/wiki/Connect_Four#Attack_or_defend.3F