const chai = require('chai');
const expect = chai.expect;

const { mebiToKibi } = require('../src/03');

describe('03.js', function() {
  it('should return MB to KB', function() {
    expect(mebiToKibi(20)).to.be.equal(20000);
  });
});
