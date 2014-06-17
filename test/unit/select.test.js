/*!
 * node-sqlparser: test/unit/select.test.js
 * Authors  : 剪巽 <jianxun.zxl@taobao.com> (https://github.com/fishbar)
 * Create   : 2014-05-21 18:05:12
 * CopyRight 2014 (c) Alibaba Group
 */
var parser = require('../../lib/parser');
var expect = require('./expect');
describe('SQL select', function () {

  describe('check selected fields', function () {
    it('should return ok when simple fields', function () {
      var sql = 'select custom(abc), def from a.tableName where custom(id) in (1,2,2,3)';
      var result = parser.parse(sql);
      expect(result.ast)
        .type('select')
        .columns(['sum(abc,1)', 'def'])
    });
    it('should return ok when table without db name', function () {
      var sql = 'select custom(abc), def from tableName where custom(id) in (1,2,2,3)';
      var result = parser.parse(sql);
      expect(result.ast)
        .type('select')
        .columns(['sum(abc,1)', 'def'])
    });
    it('should ok when limit 10', function () {
      var sql = 'select a from b limit 10';
      var result = parser.parse(sql);
      expect(result.ast)
        .type('select')
        .limit(0, 10)
    });
    it('should ok when limit 10, 20', function () {
      var sql = 'select a from b limit 10';
      var result = parser.parse(sql);
      expect(result.ast)
        .type('select')
        .limit(0, 10)
    });
  });
});
