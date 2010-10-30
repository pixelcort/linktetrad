/*globals LT*/

LT.Player = function(){};

LT.Player.prototype = {
  team: null
};

LT.Player.red = new LT.Player();
LT.Player.red.team = 'red';

LT.Player.black = new LT.Player();
LT.Player.black.team = 'black';