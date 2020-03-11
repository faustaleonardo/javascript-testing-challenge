const chai = require('chai');
const expect = chai.expect;

const Item = require('../src/12');

describe('12.js', function() {
  it('should check if an item is on sale', function() {
    expect(Item.findById(3).isOnSale()).to.be.equal(false);
    expect(Item.findById(5).isOnSale()).to.be.equal(true);
  });
});
