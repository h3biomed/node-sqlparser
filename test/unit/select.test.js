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
      var sql = 'select abc, def from a.table where id in (1);';
      var result = parser.parse(sql);
      console.log(result.ast);
      expect(result.ast)
        .type('select')
        .columns(['sum(abc,1)', 'def'])
    });
  });
});
