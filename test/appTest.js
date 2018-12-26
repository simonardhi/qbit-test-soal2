const assert = require('chai').assert;
const input = require('../server/app').lexicograph;


describe('Lexigrophic()', function () {
    it('soal2 should be return string', function(){
        assert.typeOf(input('hahahhah'), 'string')
    })
    it('soal2 should be return string', function(){
        assert.typeOf(input('breabes'), 'string')
    })
    it('soal2 should be return string', function(){
        assert.typeOf(input('arebaes'), 'string')
    })
});