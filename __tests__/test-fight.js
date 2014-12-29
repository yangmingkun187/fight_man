jest.dontMock('../src/model/person');

describe('person', function() {
  describe('fight', function() {
    it('should return correct string', function() {

      var Person = require('../src/model/person');
      var zhang = new Person('张三', 100, 10);
      var li = new Person('李四', 90, 9);
      var result = zhang.fight(li);

      expect(result).toBe('李四死了');
    });

    it('it should be return string', function() {

      console.log = jest.genMockFn();

      var Person = require('../src/model/person');
      var zhang = new Person('张三', 100000, 1000);
      var result = zhang.fight({name: '李四', hp : 10000, attack : 9999});

      var expectText = '李四攻击了张三,攻击了9999点伤害,张三还剩90001点血';

      expect(console.log).toBeCalledWith(expectText);
    });
  });
});
