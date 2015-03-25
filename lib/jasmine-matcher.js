var parse = require('./parse').parse;

module.exports = {

	toBeValid: function() {

		var sqlText = this.actual;
		var ast;
		try {
			ast = parse(sqlText);
		} catch(err) {
			this.message = function() { return 'Invalid sql "' + sqlText + '"\n\t' + err; };
			return false;
		}

		this.message = function() { return 'Valid SQL'; };
		return true;
	}
};