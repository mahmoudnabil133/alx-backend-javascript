const calculateNumber = require('./0-calcul.js');
const assert = require('assert');
describe('calculateNumber', function () {
    it('should return 4 when 2.2+2.2', function () {
      assert.equal(calculateNumber(2.2, 2.2), 4);
    });
    it('should return 5 when adding 2 and 3', function () {
      assert.equal(calculateNumber(2, 3), 5);
    });
    it('should return 6 when adding 2.6+2.6', ()=>{
      assert.equal(calculateNumber(2.6, 2.6), 6);
    });
    it('should return 5 when adding 2.4+2.5', ()=>{
      assert.equal(calculateNumber(2.4, 2.5), 5);
    });
    it('should return 6 when adding 2.9+2.9', ()=>{
      assert.equal(calculateNumber(2.9, 2.9), 6);
    });
    it('should return 6 when adding 2.9+3.2', ()=>{
      assert.equal(calculateNumber(2.9, 3.2), 6);
    });
    it('should return 7 when adding 2.9+3.7', ()=>{
      assert.equal(calculateNumber(2.9, 3.7), 7);
    });
    it('should return 6 when adding 2.4+3.5', ()=>{
      assert.equal(calculateNumber(2.4, 3.5), 6);
    });
    it('should return 7 when adding 2.5+3.5', ()=>{
      assert.equal(calculateNumber(2.5, 3.5), 7);
    });
    it('should return 5 when adding 2.4+3.4', ()=>{
      assert.equal(calculateNumber(2.4, 3.4), 5);
    });
    it('should return 5 when adding 2.4+3.2', ()=>{
      assert.equal(calculateNumber(2.4, 3.2), 5);
    });
    it('should return 6 when adding 2.5+3.4', ()=>{
      assert.equal(calculateNumber(2.5, 3.4), 6);
    });
    it('should return 6 when adding 2.4+3.6', ()=>{
      assert.equal(calculateNumber(2.4, 3.6), 6);
    });
    it('should return 7 when adding 2.5+3.6', ()=>{
      assert.equal(calculateNumber(2.5, 3.6), 7);
    });
    it('should return 5 when adding 2.4+3.4', ()=>{
      assert.equal(calculateNumber(2.4, 3.4), 5);
    });
    it('should return 6 when adding 2.4+3.5', ()=>{
      assert.equal(calculateNumber(2.4, 3.5), 6);
    });
    it('should return 6 when adding 2.4+3.6', ()=>{
      assert.equal(calculateNumber(2.4, 3.6), 6);
    });
    it('should return 6 when adding 2.5+3.4', ()=>{
      assert.equal(calculateNumber(2.5, 3.4), 6);
    });
    it('should return 7 when adding 2.5+3.5', ()=>{
      assert.equal(calculateNumber(2.5, 3.5), 7);
    });
});
  