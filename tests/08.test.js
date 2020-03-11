const chai = require('chai');
const expect = chai.expect;

const { arrayMirroring } = require('../src/08');

describe('08.js', function() {
  it('should return array mirroring', function() {
    expect(arrayMirroring([1, 2, 3])).to.eql([1, 2, 3, 3, 2, 1]);
  });
});
