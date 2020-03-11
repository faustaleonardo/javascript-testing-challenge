const chai = require('chai');
const expect = chai.expect;

const { censor } = require('../src/10');

describe('10.js', function() {
  it('should censor given censored words', function() {
    expect(
      censor('Saya ingin makan nasi goreng.', ['saya', 'nasi'])
    ).to.be.equal('#### ingin makan #### goreng.');

    expect(
      censor('Pada hari Minggu saya tidur siang.', ['minggu', 'tidur'], '*')
    ).to.be.equal('Pada hari ****** saya ***** siang.');
  });
});
