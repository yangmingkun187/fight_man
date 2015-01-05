var _ = require('lodash');

function Player(profession, name, hp, attackPoint, state) {
  this.profession = profession;
  this.name = name;
  this.hp = _.isUndefined(hp) ? 1000 : hp;
  this.attackPoint = _.isUndefined(attackPoint) ? 200 : attackPoint;
  this.state = _.isUndefined(state) ? '正常' : state;
}

Player.prototype.isDead = function() {
  return this.hp <= 0;
};

Player.prototype.injure = function(damage) {
  this.hp -= damage;
};

Player.prototype.attack = function(player) {
  player.injure(this.attackPoint);
};

Player.prototype.getState = function () {
  return this.state;
};

module.exports = Player;
