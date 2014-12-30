var _ = require('lodash');
function Person(profession, name, hp, attack, weapon, armor) {
  this.profession = profession;
  this.name = name;
  this.hp = hp;
  this.attack = attack;
  this.weapon = weapon;
  this.armor = armor;
}

Person.prototype.sufferDamage1 = function (player) {
  return player.attack + player.weapon.property;
};

Person.prototype.sufferDamage2 = function (player) {
  return this.attack - player.armor.property;
};

Person.prototype.fight = function (player) {
  var result = '';
  var proAttack1 = this.sufferDamage1(player);
  var proAttack2 = this.sufferDamage2(player);
  while (1) {

    player.hp -= proAttack2;
    this.hp -= proAttack1;

    if (this.hp <= 0) {
      result += player.profession + player.name + '使用最后一击， 把' + this.name + '打死了';
      break;
    }

    if (player.hp <= 0) {
      result += this.profession + this.name + '使用最后一击， 把' + player.name + '死了';
      break;
    }

    result += this.getAttackText(player, proAttack1);
    result += this.getOtherAttackText(player, proAttack2);
  }
  return result;
};

Person.prototype.getAttackText = function(player, proAttack1) {
  var result = player.profession + player.name + '用' + player.weapon.name +
  '攻击了' + this.profession + this.name + ',' + this.name + '受到了' +
  proAttack1 + '点伤害,' + this.name;
  var odd = _.random(0, 100);

  if (odd < player.weapon.SpecialEffects.odds) {
    var hurtProperty = '';
    var state = '';
    if (player.weapon.name === '优质毒剑') {
      hurtProperty = '毒性';
      state = '中毒了,';
    }
    if (player.weapon.name === '烈焰剑') {
      hurtProperty = '火焰';
      state = '着火了,';
    }

    result += state + this.name + '剩余生命：' + this.hp + '\n' +
    this.name + '受到' + player.weapon.SpecialEffects.damage +
    '点' + hurtProperty + '伤害,' + this.name + '剩余生命：' +
    (this.hp - player.weapon.SpecialEffects.damage) +'\n';
  } else {
    result += '受到' + proAttack1 + '点伤害,' + this.name + '剩余生命：' + this.hp + '\n';
  }
  return result;
};

Person.prototype.getOtherAttackText = function (player, proAttack2) {
  var result = '';

  result = this.profession + this.name + '攻击了' + player.profession + player.name +
  ',攻击了' + proAttack2 + '点伤害,' + player.name + '的' + player.armor.name +
   '抵挡了' + player.armor.property + '点伤害' + player.name + '还剩' + player.hp + '点血' + '\n';
  return result;
};

module.exports = Person;
