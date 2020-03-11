const chai = require('chai');
const expect = chai.expect;

const { isPrime } = require('../src/05');

describe('05.js', function() {
  it('should detect if a number is a prime number', function() {
    expect(isPrime(7)).to.be.equal(true);
  });
});
