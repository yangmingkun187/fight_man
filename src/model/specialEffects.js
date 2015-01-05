function SpecialEffects(damage, effectRound, odds, effect) {
  this.damage = damage;
  this.effectRound = effectRound;
  this.odds = odds;
  this.effect = effect;
}

SpecialEffects.prototype.addDelayRound = function () {
  return this.effectRound >= 1 ? this.effectRound + 1 : this.effectRound;
};

SpecialEffects.prototype.reduceDelayRound = function () {
  return this.effectRound--;
};

SpecialEffects.prototype.getDelayHurtText = function (player) {
  var result = '';
  result = player.name + '受到' + this.damage + '点' + this.effect + '伤害,' +
  player.name + '剩余生命：' + (player.hp - this.damage) + '\n';
  return result;
};

module.exports = SpecialEffects;
