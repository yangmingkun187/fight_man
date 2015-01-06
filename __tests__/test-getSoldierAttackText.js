jest.dontMock('../src/model/player');
jest.dontMock('../src/model/soldier');
jest.dontMock('../src/model/fighting');
jest.dontMock('../src/model/specialEffects');
jest.dontMock('lodash');
describe('fighting', function() {
  describe('#getSoldierAttackText', function() {
    it('it should be return string', function() {
      var Fighting = require('../src/model/fighting');
      var Player = require('../src/model/player');
      var fighting = new Fighting();
      var zhang = new Player('普通人', '张三', 1000, 200, '着火了');
      var lisi = {
            profession: '战士',
            name: '李四',
            hp: 1000,
            attack: 199,
            weapon : {name : '优质毒剑',
                      property : 15,
                      SpecialEffects : {
                                    damage : 2,
                                    effect : 2,
                                    odds : 100,
                                  }
                      },
            armor :  {name : '阿克斯圣光盾',
                      property: 7 },
        };
      var result = fighting.getSoldierAttackText(lisi, zhang);
      var expectText = '蛮族之王李四用烈焰剑攻击了普通人张三,张三受到了214点伤害,张三着火了张三剩余生命：786\n' +
      '张三受到2点火焰伤害,张三剩余生命：784\n';

      expect(result).toBe(expectText);
    });

    // it('it should be return string', function() {
    //
    //   var Person = require('../src/model/person');
    //   var zhang = new Person('普通人', '张三', 1000, 200);
    //
    //   var player = {profession: '战士',
    //   name: '李四',
    //   hp: 1000,
    //   attack: 199,
    //   weapon : {name : '烈焰剑',
    //   property : 15,
    //   SpecialEffects : {
    //     damage : 2,
    //     effect : 0,
    //     odds : 100}
    //   },
    //   armor :  {name : '阿克斯圣光盾',
    //   property: 7 }
    // };
    //   var proAttack1 = 214;
    //
    //   var result = zhang.getAttackText(player, proAttack1);
    //   var expectText = '战士李四用烈焰剑攻击了普通人张三,张三受到了214点伤害,张三着火了,张三剩余生命：1000\n' +
    //   '张三受到2点火焰伤害,张三剩余生命：998\n';
    //
    //   expect(result).toBe(expectText);
    // });
  });
});
