var Person = require('./model/person');

function main() {
  var result = '';
  var zhang = new Person('张三', 100000, 1000);
  var lisi = new Person('李四', 10000, 9999);

  result = zhang.fight(lisi);
  console.log(result);
}

main();
