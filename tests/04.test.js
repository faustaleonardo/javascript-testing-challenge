const chai = require('chai');
const expect = chai.expect;

const { isLeapYear } = require('../src/04');

describe('04.js', function() {
  it('should detect if the year is a leap year', function() {
    expect(isLeapYear(2012)).to.be.equal(true);
  });
});
