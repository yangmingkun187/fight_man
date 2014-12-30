jest.dontMock('../src/model/person');
describe('Person', function() {
  describe('#getOtherAttackText', function() {
    it('should return correct text', function() {
      var Person = require('../src/model/person');
      var zhang = new Person('普通人', '张三', 1000, 200);

      var player = {profession: '战士',
                      name: '李四',
                      hp: 1000,
                      attack: 199,
                      weapon : {name : '优质毒剑',
                      property : 15,
                      SpecialEffects : {
                        damage : 2,
                        effect : 0,
                        odds : 100}
                      },
                      armor :  {name : '阿克斯圣光盾',
                      property: 7 }
                    };
    var proAttack2 = 193;
    var result = zhang.getOtherAttackText(player, proAttack2);

    expectText = '普通人张三攻击了战士李四,攻击了193点伤害,李四的阿克斯圣光盾抵挡了7点伤害李四还剩1000点血\n';

    expect(result).toBe(expectText);
    });
  });
});
