jest.dontMock('../src/model/person');

describe('person', function() {
  describe('fight', function() {
    it('it should be return string', function() {

      console.log = jest.genMockFn();

      var Person = require('../src/model/person');
      var zhang = new Person('普通人', '张三', 1000, 200);
      var result = zhang.fight({ profession: '蛮族之王',
                                name: '李四',
                                hp: 1000,
                                attack: 199,
                                weaponName: '阿姆斯特朗回旋炮',
                                weaponProperty: 15,
                                armorName: '阿克斯圣光盾',
                                armorProperty: 7 });

      var expectText = '蛮族之王 李四使用阿姆斯特朗回旋炮攻击了普通人 张三,攻击了214点伤害,张三还剩786点血\n' +
      '普通人 张三攻击了蛮族之王李四,攻击了193点伤害,李四的阿克斯圣光盾抵挡了7点伤害李四还剩807点血\n' +
      '蛮族之王 李四使用阿姆斯特朗回旋炮攻击了普通人 张三,攻击了214点伤害,张三还剩572点血\n' +
      '普通人 张三攻击了蛮族之王李四,攻击了193点伤害,李四的阿克斯圣光盾抵挡了7点伤害李四还剩614点血\n' +
      '蛮族之王 李四使用阿姆斯特朗回旋炮攻击了普通人 张三,攻击了214点伤害,张三还剩358点血\n' +
      '普通人 张三攻击了蛮族之王李四,攻击了193点伤害,李四的阿克斯圣光盾抵挡了7点伤害李四还剩421点血\n' +
      '蛮族之王 李四使用阿姆斯特朗回旋炮攻击了普通人 张三,攻击了214点伤害,张三还剩144点血\n' +
      '普通人 张三攻击了蛮族之王李四,攻击了193点伤害,李四的阿克斯圣光盾抵挡了7点伤害李四还剩228点血\n' +
      '蛮族之王李四使用最后一击， 把张三打死了';
      expect(result).toBe(expectText);
    });
  });
});
