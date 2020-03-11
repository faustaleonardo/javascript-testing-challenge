const chai = require('chai');
const expect = chai.expect;

const User = require('../src/11');

describe('11.js', function() {
  it('should return user Object based on username', function() {
    expect(User.findByUsername('johndoe')).to.be.eql({
      id: 3,
      username: 'johndoe',
      name: 'John Doe'
    });
  });
});
