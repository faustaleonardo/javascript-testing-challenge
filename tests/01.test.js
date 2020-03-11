const chai = require('chai');
const expect = chai.expect;

const { charLength } = require('../src/01');

describe('01.js', function() {
  it('should return total characters of a string', function() {
    expect(charLength('Hello')).to.be.equal(5);
  });
});
