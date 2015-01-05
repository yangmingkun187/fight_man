var Soldier = require('./soldier');
var player = require('./player');
var _ = require('lodash');

function Fighting() {

}

Fighting.prototype.fight = function (player1, player2) {
  var result = '';
  while (1) {
    var damage = player1.getSoldierAttackPoint();
    player2.injure(damage);
    player2.attack(player1);
    if (player1.isDead()) {
        result += player2.profession + player2.name + '使用最后一击， 把' + player1.name + '打死了';
        break;
    }
    if (player2.isDead()) {
        result += player1.profession + player1.name + '使用最后一击， 把' + player2.name + '死了';
        break;
    }
    result += this.getSoldierAttackText(player1, player2);
  }
  return result;
};

Fighting.prototype.getSoldierAttackText = function(player1, player2) {
  var result = '';
  var text = '';
  var odd = _.random(0, 100);
  var damage = player1.getSoldierAttackPoint();

  if (odd < player1.getWeaponSpecialEffectsOdds()) {
    var state = player2.getState();
    text = player2.name + state;

    result += player1.profession + player1.name + '用' + player1.weapon.name +
    '攻击了' + player2.profession + player2.name + ',' + player2.name + '受到了' +
    damage + '点伤害,' + text + player2.name + '剩余生命：'+ player2.hp + '\n';

    result += player1.weapon.specialEffects.getDelayHurtText(player2);
    player1.weapon.specialEffects.reduceDelayRound();
    player1.weapon.specialEffects.addDelayRound();
  } else {
    result += player1.profession + player1.name + '用' + player1.weapon.name +
    '攻击了' + player2.profession + player2.name + ',' + player2.name + '受到了' +
    damage + '点伤害,' + text + player2.name + '剩余生命：'+ player2.hp + '\n';
  }


  return result;
};

module.exports = Fighting;
