var SpecialEffects = require('./specialEffects');

function Weapon(name, attackPoint, specialEffects) {
  this.name = name;
  this.attackPoint = attackPoint;
  this.specialEffects = specialEffects;
}

module.exports = Weapon;
