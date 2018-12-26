const assert = require('chai').assert;
const input = require('../server/app').lexicograph;


describe('Lexigrophic()', function () {
    it('soal2 should be return string', function(){
        assert.equal(input('hahahhah'), 'ah')
    })
    it('soal2 should be return string', function(){
        assert.equal(input('breabes'), 'saerb')
    })
    it('soal2 should be return string', function(){
        assert.equal(input('arebaes'), 'saber')
    })
});