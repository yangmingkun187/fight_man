function SpecialEffects( damage, effectRound, odds, effect) {
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

SpecialEffects.prototype.getEffectDamage = function (player) {
  return player.hp - this.damage;
};

SpecialEffects.prototype.getDelayHurtText = function (player) {
  return player.name + '受到' + this.damage + '点' + this.effect + '伤害,' +
  player.name + '剩余生命：' + this.getEffectDamage(player) + '\n';
};

SpecialEffects.prototype.getFreezeText = function (player1, player2) {
  return player2.name + '冻得直哆嗦,没有击中' + player1.name + '\n';
};

module.exports = SpecialEffects;
