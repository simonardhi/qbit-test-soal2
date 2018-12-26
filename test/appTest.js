const assert = require('chai').assert;
const input = require('../server/app').lexicograph;


describe('Lexigrophic()', function () {
	var tests = [
	    {args: "hahahhah", expected: "ah"},
	    {args: "breabes",  expected: "saerb"},
	    {args: "arebaes",  expected: "saber"}
	  ];
    tests.forEach(function(test) {
    	it('correctly answer ' + test.args.length + ' args', function() {
    		assert.equal(tests.args, test.expected);
	    });
	});	
});