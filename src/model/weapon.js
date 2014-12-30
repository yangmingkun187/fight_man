var SpecialEffects = require('./specialEffects');

function Weapon(name, property, SpecialEffects) {
  this.name = name;
  this.property = property;
  this.SpecialEffects = SpecialEffects;
}

module.exports = Weapon;
