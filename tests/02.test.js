const chai = require('chai');
const expect = chai.expect;

const { sum } = require('../src/02');

describe('02.js', function() {
  it('should return sum of two numbers', function() {
    expect(sum(3, 4)).to.be.equal(7);
  });
});
