const calculateNumber = require('./2-calcul_chai.js');
const chai = require('chai');
const expect = chai.expect;

describe('calculateNumber', function () {
    // test SUM function
    it('should return 4 when adding 1+3', ()=>{
        const result = calculateNumber('SUM', 1, 3);
        expect(result).to.equal(4);
    });
    it('1 + 3.7 = 5', ()=>{
        const result = calculateNumber('SUM', 1, 3.7);
        expect(result).to.equal(5);
    });
    it('1.2 + 3.7 = 5', ()=>{
        const result = calculateNumber('SUM', 1.2, 3.7);
        expect(result).to.equal(5);
    });
    it('1.5 + 3.7 = 6', ()=>{
        const result = calculateNumber('SUM', 1.5, 3.7);
        expect(result).to.equal(6);
    });
    // test SUBTRACT function
    it('1 - 3 = -2', ()=>{
        const result = calculateNumber('SUBTRACT', 1, 3);
        expect(result).to.equal(-2);
    });
    it('1 - 3.7 = -3', ()=>{
        const result = calculateNumber('SUBTRACT', 1, 3.7);
        expect(result).to.equal(-3);
    });
    it('1.2 - 3.7 = -3', ()=>{
        const result = calculateNumber('SUBTRACT', 1.2, 3.7);
        expect(result).to.equal(-3);
    });
    it('1.5 - 3.7 = -2', ()=>{
        const result = calculateNumber('SUBTRACT', 1.5, 3.7);
        expect(result).to.equal(-2);
    });
    // test DIVIDE function
    it('1 / 3 = 0.3333333333333333', ()=>{
        const result = calculateNumber('DIVIDE', 1, 3);
        expect(result).to.equal(0.3333333333333333);
    });
    it('1 / 3.7 = 0.25', ()=>{
        const result = calculateNumber('DIVIDE', 1, 3.7);
        expect(result).to.equal(0.25);
    });
    it('1.2 / 3.7 = 0.25', ()=>{
        const result = calculateNumber('DIVIDE', 1.2, 3.7);
        expect(result).to.equal(0.25);
    });
    it('1.5 / .1 = Error', ()=>{
        const result = calculateNumber('DIVIDE', 1.5, 3.7);
        expect(result).to.equal('Error');
    });
    it('100 / .4 = Error', ()=>{
        const result = calculateNumber('DIVIDE', 1.5, 3.7);
        expect(result).to.equal('Error');
    });
})
