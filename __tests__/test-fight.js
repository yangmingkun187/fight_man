jest.dontMock('../src/model/person');

describe('person', function() {
  describe('fight', function() {
    it('it should be return string', function() {

      console.log = jest.genMockFn();

      var Person = require('../src/model/person');
      var zhang = new Person('普通人', '张三', 100000, 1000);
      var result = zhang.fight({ profession: '小学生',
                                name: '李四',
                                hp: 10000,
                                attack: 9999,
                                weaponName: '阿姆斯特朗回旋炮',
                                weaponProperty: 15,
                                armorName: '阿克斯圣光盾',
                                armorProperty: 7 });

      var expectText = '小学生 李四使用阿姆斯特朗回旋炮攻击了普通人 张三,攻击了10014点伤害,张三还剩89986点血';

      expect(console.log).toBeCalledWith(expectText);
    });
  });
});
