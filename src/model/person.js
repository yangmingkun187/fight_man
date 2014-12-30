var _ = require('lodash');
function Person(profession, name, hp, attack, weapon, armor) {
  this.profession = profession;
  this.name = name;
  this.hp = hp;
  this.attack = attack;
  this.weapon = weapon;
  this.armor = armor;
}

Person.prototype.fight = function (player) {
  var result = '';
  while (1) {
    if (this.hp <= 0) {
      result += player.profession + player.name + '使用最后一击， 把' + this.name + '打死了';
      break;
    }
    if (player.hp <= 0) {
      result += this.profession + this.name + '使用最后一击， 把' + player.name + '死了';
      break;
    }

    result += this.getAttackText(player);
    result += this.getOtherAttackText(player);
  }
  return result;
};

Person.prototype.getAttackText = function(player) {
  var result = '';
  var odd = _.random(0, 100);

  var proAttack1 = player.attack + player.weapon.property;
  this.hp -= proAttack1;

  if (odd < player.weapon.SpecialEffects.odds) {
    result += player.profession + player.name + '用' + player.weapon.name +
    '攻击了' + this.profession + this.name + ',' + this.name + '受到了' +
    proAttack1 + '点伤害,' + this.name + '中毒了,' + this.name + '剩余生命：'+
    this.hp + '\n' +
    this.name + '受到' + player.weapon.SpecialEffects.damage +
    '点毒性伤害,' + this.name + '剩余生命：' + (this.hp - player.weapon.SpecialEffects.damage) +'\n';
  }
  return result;
};

Person.prototype.getOtherAttackText = function (player) {
  var result = '';

  var proAttack2 = this.attack - player.armor.property;
  player.hp -= proAttack2;

  result += this.profession + this.name + '攻击了' + player.profession + player.name +
  ',攻击了' + proAttack2 + '点伤害,' + player.name + '的' + player.armor.name +
   '抵挡了' + player.armor.property + '点伤害' + player.name + '还剩' + player.hp + '点血' + '\n';
  return result;
};
module.exports = Person;
