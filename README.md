node-sqlparser

======

node-sqlparser, write in javascript

## Install

NodeJS Version 0.8.0+

```
npm install node-sqlparser
```

## Introduction


for the test , type the command:

```
make test
```

## Usage

please read the demo files `demo/demo.js`


for a SQL storage engine, you should realize a function like :

```js
var parser = require('node-sqlparser');
var sqlast = parser.parse(sql);
```

## nSQL Definition

The 'a little strange' sql as you see above, nSQL realize a subset of SQL92, and it
also has some procedure features, it supports variables,  it addes types of `var`
/ `array` / `table`, and also keyword `return`,  for the details,  see the
specification in `peg/sqlparser.pgejs`.


###Just Enjoy It!


### Acknowledgements

* PegJS     : http://pegjs.majda.cz/
* NodeJS    : http://nodejs.org/
* BigQuery  : https://developers.google.com/bigquery/docs/query-reference
* PL/SQL    : http://docs.oracle.com/cd/B28359_01/appdev.111/b28370/fundamentals.htm#autoId0
* MySQL     : http://dev.mysql.com/doc/refman/5.1/en/sql-syntax.html
* Impala    : https://github.com/cloudera/impala/blob/master/fe/src/main/cup/sql-parser.y
* PgSQL     : http://www.postgresql.org/docs/9.2/interactive/sql-syntax.html
* ql.io     : http://ql.io

