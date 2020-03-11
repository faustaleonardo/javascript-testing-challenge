const chai = require('chai');
const expect = chai.expect;

const { repeatString } = require('../src/06');

describe('06.js', function() {
  it('should repeat strings as many as times', function() {
    expect(repeatString('Makan! ', 3)).to.be.equal('Makan! Makan! Makan! ');
  });
});
