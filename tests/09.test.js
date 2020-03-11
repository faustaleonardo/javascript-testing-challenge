const chai = require('chai');
const expect = chai.expect;

const { symmetrical } = require('../src/09');

describe('09.js', function() {
  it('should detect if a value is symmetrical', function() {
    expect(symmetrical('malam')).to.equal(true);
    expect(symmetrical('taat')).to.equal(true);
    expect(symmetrical('tidur')).to.equal(false);
    expect(symmetrical(1234)).to.equal(false);
    expect(symmetrical(108801)).to.equal(true);
    expect(symmetrical(8001008)).to.equal(true);
  });
});
