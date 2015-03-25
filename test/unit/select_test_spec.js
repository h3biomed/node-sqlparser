/*!
 * node-sqlparser: test/unit/select.test.js
 * Authors  : 剪巽 <jianxun.zxl@taobao.com> (https://github.com/fishbar)
 * Create   : 2014-05-21 18:05:12
 * CopyRight 2014 (c) Alibaba Group
 */
'use strict';

var parser = require('../../lib/parse');
var stringify = require('../../lib/stringify');

describe('SQL select', function () {

  beforeEach(function() {
    this.addMatchers(require('../../lib/jasmine-matcher'));
  })

  it("should parse basic statement", function() {
    expect("SELECT * FROM myTable").toBeValid();
  });

  it("should parse specific columns", function() {
    expect("SELECT a.col1, a.col2 from a").toBeValid();
  });

  it("should parse with where clause", function() {
    expect("SELECT a.col1 from a where a.col2 = 3").toBeValid();
  });

  it("should parse with table alias", function() {
    expect("SELECT b.col1 from a b WHERE b.col2 = 3").toBeValid();
  });

  it("should fail if missing table", function() {
    expect("SELECT col1 FROM WHERE col1 = 3").not.toBeValid();
  });

  it("should parse inner select in clause", function() {
    expect("SELECT col1 FROM a WHERE col2 IN (SELECT col1 FROM b)").toBeValid();
  });

  it("should parse inner select not in clause", function() {
    expect("SELECT col1 FROM a WHERE col2 NOT IN (SELECT col1 FROM b)").toBeValid();
  });

  it("should parse inner select arithmatic clause", function() {    
    
    var sql = "SELECT col1 FROM a WHERE col2 = (SELECT col1 FROM b)";
    expect(sql).toBeValid();

    var ast = parser.parse(sql);
    expect(ast.where.type).toEqual('binary_expr');
    expect(ast.where.operator).toEqual('=');
    expect(ast.where.right.type).toEqual('select');
  });

  it("should parse compound where clauses", function() {
    expect("SELECT col1 FROM a WHERE col2 = 3 AND col3 = 5").toBeValid();
  });

  it("should parse comparison cluases", function() {
    expect("SELECT col1 FROM a WHERE col2 > 3 AND col3 < 5").toBeValid();
  });

  it("should parse the count() function", function() {
    expect("SELECT COUNT(col1) AS count FROM a").toBeValid();
  });

  it("should parse inner join statements", function() {
    expect("SELECT a.col1, b.col1 FROM a INNER JOIN b on a.col2 = b.col2").toBeValid();
  });

  it("should parse != clauses", function() {
    expect("SELECT a.col1 FROM a WHERE a.col2 != 3").toBeValid();
  });
});
