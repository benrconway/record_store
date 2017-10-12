var assert = require('assert');
var Record = require('../record')

describe( 'Record', function() {

  var record;


  beforeEach( function() {
    record = new Record('Pink Floyd', 'Dark side of the moon', 'Prog Rock', 10);
  })

  it('should have an artist', function() {
    assert.strictEqual(record.artist, 'Pink Floyd');
  })

  it('should have a title', function() {
    assert.strictEqual(record.title, 'Dark side of the moon');
  })

  it('should have a genre', function() {
    assert.strictEqual(record.genre, 'Prog Rock');
  })

  it('should have a price', function() {
    assert.strictEqual(record.price, 10);
  })
})
