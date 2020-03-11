const chai = require('chai');
const expect = chai.expect;

const { roman } = require('../src/15');

describe('15.js', function() {
  it('should convert roman to decimal number', function() {
    expect(roman('I')).to.be.equal(1);
    expect(roman('II')).to.be.equal(2);
    expect(roman('III')).to.be.equal(3);
    expect(roman('V')).to.be.equal(5);
    expect(roman('VI')).to.be.equal(6);
    expect(roman('X')).to.be.equal(10);
    expect(roman('L')).to.be.equal(50);
    expect(roman('C')).to.be.equal(100);
    expect(roman('D')).to.be.equal(500);
    expect(roman('M')).to.be.equal(1000);
    expect(roman('MMXVIII')).to.be.equal(2018);
  });
});
