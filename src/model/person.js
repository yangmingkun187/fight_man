function Person(name, hp, attack) {
  this.name = name;
  this.hp = hp;
  this.attack = attack;
}

Person.prototype.fight = function (player) {
  while (1) {

    this.hp -= player.attack;
    if (this.hp < 0) {
      result = this.name + '死了';
      break;
    }

    player.hp -= this.attack;
    if (player.hp < 0) {
      result = player.name + '死了';
      break;
    }
  }
  return result;
};

module.exports = Person;
