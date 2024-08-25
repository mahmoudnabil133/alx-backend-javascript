const calculateNumber = require('./1-calcul.js');
const assert = require('assert');

describe('calculateNumber', function () {
    // test SUM function
    it('should return 4 when adding 1+3', ()=>{
        assert.equal(calculateNumber('SUM', 1, 3), 4);
    });
    it('1 + 3.7 = 5', ()=>{
        assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    });
    it('1.2 + 3.7 = 5', ()=>{
        assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
    });
    it('1.5 + 3.7 = 6', ()=>{
        assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
    });
    it('1.5 + 3.2 = 5', ()=>{
        assert.equal(calculateNumber('SUM', 1.5, 3.2), 5);
    });
    it('1.5 + 3.5 = 6', ()=>{
        assert.equal(calculateNumber('SUM', 1.5, 3.5), 6);
    });
    it('1.5 + 3.6 = 6', ()=>{
        assert.equal(calculateNumber('SUM', 1.5, 3.6), 6);
    });
    it('1.5 + 3.4 = 5', ()=>{
        assert.equal(calculateNumber('SUM', 1.5, 3.4), 5);
    });
    // test SUBTRACT function
    it('1 - 3 = -2', ()=>{
        assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
    });
    it('1 - 3.7 = -3', ()=>{
        assert.equal(calculateNumber('SUBTRACT', 1, 3.7), -3);
    });
    it('1.2 - 3.7 = -3', ()=>{
        assert.equal(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    });
    it('1.5 - 3.7 = -2', ()=>{
        assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    });
    // function calc round numbers before operations
    it('1.5 - 3.2 = -1', ()=>{
        assert.equal(calculateNumber('SUBTRACT', 1.5, 3.2), -1);
    });
    it('1.5 - 3.5 = -2', ()=>{
        assert.equal(calculateNumber('SUBTRACT', 1.5, 3.5), -2);
    });
    it('1.5 - 3.6 = -2', ()=>{
        assert.equal(calculateNumber('SUBTRACT', 1.5, 3.6), -2);
    });
    it('1.5 - 3.4 = -1', ()=>{
        assert.equal(calculateNumber('SUBTRACT', 1.5, 3.4), -1);
    });
    // test DIVIDE function
    it('1 / 3 = 0.3333333333333333', ()=>{
        assert.equal(calculateNumber('DIVIDE', 1, 3), 0.3333333333333333);
    });
    it('1 / 3.7 = 0.25', ()=>{
        assert.equal(calculateNumber('DIVIDE', 1, 3.7), 0.25);
    });
    it('1.2 / 3.7 = 0.25', ()=>{
        assert.equal(calculateNumber('DIVIDE', 1.2, 3.7), 0.25);
    });
    it('1.2 / .3 = 0.25', ()=>{
        assert.equal(calculateNumber('DIVIDE', 1.2, .3), 'Error');
    });
    it('100 / .2 = 0.25', ()=>{
        assert.equal(calculateNumber('DIVIDE', 100, .2), 'Error');
    });

})
