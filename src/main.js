var Person = require('./model/person');
var Weapon = require('./model/weapon');
var Armor = require('./model/armor');
var SpecialEffects = require('./model/specialEffects');

function main() {
  var result = '';
  var specialEffects = new SpecialEffects(2, 0, 100);
  var armor = new Armor('阿克斯圣光盾', 7);
  var weapon = new Weapon('优质毒剑', 15, specialEffects);
  var zhang = new Person('普通人', '张三', 1000, 200);
  var lisi = new Person('蛮族之王', '李四', 1000, 199, weapon, armor);
  console.log('战斗开始！！！');

  result = zhang.fight(lisi);
  console.log(result);
}

main();
