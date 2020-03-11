const chai = require('chai');
const expect = chai.expect;

const { repeatLetter } = require('../src/07');

describe('07.js', function() {
  it('should repeat letter as many as times', function() {
    expect(repeatLetter('Hello World! ', 2)).to.be.equal(
      'HHeelllloo WWoorrlldd!! '
    );
  });
});
