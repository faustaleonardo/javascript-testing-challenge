const chai = require('chai');
const expect = chai.expect;

const { isIsogram } = require('../src/14');

describe('14.js', function() {
  it('should detect if a word is an isogram', function() {
    expect(isIsogram('gelas')).to.be.equal(true);
    expect(isIsogram('makan')).to.be.equal(false);
  });
});
