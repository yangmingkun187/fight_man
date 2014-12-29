jest.dontMock('../src/model/person');

describe('fight', function() {
  it('should return correct string', function() {

    var Person = require('../src/model/person');
    var zhang = new Person('张三', 100, 10);
    var li = new Person('李四', 90, 10);
    var result = zhang.fight(li);

    expect(result).toBe('李四死了');
  });
});
