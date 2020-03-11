const chai = require('chai');
const expect = chai.expect;

const { stats } = require('../src/13');

describe('13.js', function() {
  it('should return statistics from a given dataset', function() {
    expect(stats([10, 2, 38, 23, 38, 23, 21])).to.be.eql({
      mean: 22.142857142857,
      median: 23,
      range: 36,
      mode: '23, 38, each appeared 2 times',
      largest: 38,
      smallest: 2,
      sum: 155,
      count: 7
    });
  });
});
