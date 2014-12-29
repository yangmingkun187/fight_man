function Person(name, hp, attack) {
  this.name = name;
  this.hp = hp;
  this.attack = attack;
}

Person.prototype.fight = function (player) {
  while (1) {

    this.hp -= player.attack;
    if (this.hp <= 0) {
      result = this.name + '死了';
      break;
    } else {
      console.log(player.name + '攻击了' + this.name +
      ',攻击了' + player.attack + '点伤害,' + this.name +
      '还剩' + this.hp + '点血');
    }

    player.hp -= this.attack;

    if (player.hp <= 0) {
      result = player.name + '死了';
      break;
    } else {
      console.log(this.name + '攻击了' + player.name +
      ',攻击了' + this.attack + '点伤害,' + player.name +
      '还剩' + player.hp + '点血');
    }
  }
  return result;
};

module.exports = Person;
