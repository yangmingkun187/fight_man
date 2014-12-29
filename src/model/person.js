function Person(profession, name, hp, attack, weaponName, weaponProperty, armorName, armorProperty) {
  this.profession = profession;
  this.name = name;
  this.hp = hp;
  this.attack = attack;
  this.weaponName = weaponName;
  this.weaponProperty = weaponProperty;
  this.armorName = armorName;
  this.armorProperty = armorProperty;
}

Person.prototype.fight = function (player) {
  var result = '';
  while (1) {
    var proAttack1 = player.attack + player.weaponProperty;
    this.hp -= proAttack1;
    if (this.hp <= 0) {
      result += player.profession + player.name + '使用最后一击， 把' + this.name + '打死了';
      break;
    }
    result += player.profession + ' ' + player.name + '使用' +
    player.weaponName + '攻击了' + this.profession + ' ' + this.name +
    ',攻击了' + proAttack1 + '点伤害,' + this.name +
    '还剩' + this.hp + '点血';
    console.log(player.profession + ' ' + player.name + '使用' +
    player.weaponName + '攻击了' + this.profession + ' ' + this.name +
    ',攻击了' + proAttack1 + '点伤害,' + this.name +
    '还剩' + this.hp + '点血');

    var proAttack2 = this.attack - player.armorProperty;
    player.hp -= proAttack2;
    if (player.hp <= 0) {
      result += this.profession + this.name + '使用最后一击， 把' + player.name + '死了';
      break;
    }
    result += this.profession + ' ' + this.name + '攻击了' + player.profession + player.name +
    ',攻击了' + proAttack2 + '点伤害,' + player.name + '的' + player.armorName + '抵挡了' + player.armorProperty + '点伤害' + player.name +
    '还剩' + player.hp + '点血';
    console.log(this.profession + ' ' + this.name + '攻击了' + player.profession + player.name +
    ',攻击了' + proAttack2 + '点伤害,' + player.name + '的' + player.armorName + '抵挡了' + player.armorProperty + '点伤害' + player.name +
    '还剩' + player.hp + '点血');

  }
  return result;
};

module.exports = Person;
