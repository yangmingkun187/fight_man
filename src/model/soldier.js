var player = require('./player');

function Soldier(profession, name, hp, attackPoint, state, weapon, armor) {
    player.call(this, profession, name, hp, attackPoint, state);
    this.weapon = weapon;
    this.armor = armor;
}

Soldier.prototype = Object.create(player.prototype);
Soldier.prototype.constructor = Soldier;

Soldier.prototype.getSoldierAttackPoint = function() {
    return this.attackPoint + this.weapon.attackPoint;
};

Soldier.prototype.getWeaponSpecialEffectsOdds = function () {
  return this.weapon.specialEffects.odds;
};

module.exports = Soldier;
