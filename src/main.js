var Person = require('./model/person');

function main() {
  var result = '';
  var zhang = new Person('张三', 100, 10);
  var lisi = new Person('李四', 90, 10);

  result = zhang.fight(lisi);
  console.log(result);
}

main();
