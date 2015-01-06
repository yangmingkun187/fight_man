var Player = require('./model/player');
var Weapon = require('./model/weapon');
var Armor = require('./model/armor');
var Soldier = require('./model/soldier');
var Fighting = require('./model/fighting');
var SpecialEffects = require('./model/specialEffects');

function main() {
  var result = '';
  var specialEffects = new SpecialEffects(0, 3, 100, '冰冻');
  var armor = new Armor('阿克斯圣光盾', 7);
  var weapon = new Weapon('寒冰剑', 15, specialEffects);
  var zhang = new Player('普通人', '张三', 1000, 200, '冰冻了');
  var lisi = new Soldier('战士', '李四', 1000, 199, '',weapon, armor);
  var fighting = new Fighting();

  console.log('战斗开始！！！');

  result = fighting.fight(lisi, zhang);
  console.log(result);
}

main();
