var Person = require('./model/person');
var Weapon = require('./model/weapon');
var Armor = require('./model/armor');

function main() {
  var result = '';
  var armor = new Armor('阿克斯圣光盾', 7);
  var weapon = new Weapon('阿姆斯特朗回旋炮', 15);
  var zhang = new Person('普通人', '张三', 1000, 200);
  var lisi = new Person('蛮族之王', '李四', 1000, 199, weapon.name, weapon.property, armor.name, armor.property);
  console.log('战斗开始！！！');
  console.log(zhang.fight(lisi));
}

main();
