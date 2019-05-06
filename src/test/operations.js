const should = require('chai');
const operations = require('../operations');

should.should();

describe('operations', function () {
  describe('add', function () {
    it('should work with 2 numbers', function () {
      operations.add(4, 7).should.equal(11);
    });
  });
});
