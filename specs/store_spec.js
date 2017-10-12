var assert = require('assert');
var Store = require('../store')
var Record = require('../record')

describe( 'Store', function() {
  var store;
  var record1;
  var record2;

  beforeEach( function() {
      record1 = new Record('Pink Floyd', 'Dark side of the moon', 'Prog Rock', 10);
      record2 = new Record('Guns \'N\' Roses', 'The Spaghetti Incident?', 'Heavy Metal', 15);
      store = new Store('Wagga Wagga Records', 'Wagga Wagga');
  })

  it('should have a name', function() {
    assert.strictEqual(store.name, 'Wagga Wagga Records');
  })

  it('should have a city', function() {
    assert.strictEqual(store.city, 'Wagga Wagga');
  })

  it('should have an empty inventory to start', function() {
    assert.strictEqual(store.inventory.length, 0);
  })

  it('should have a starting balance of 0', function() {
    assert.strictEqual(store.balance, 0);
  })

  it('should be able to add record to inventory', function(){
    store.addRecord(record1);
    assert.strictEqual(store.inventory.length, 1);
  })

  it('should print out the stores properties as a string', function(){
    store.addRecord(record1);
    var stringResult = store.details();
    var expected = "Name: Wagga Wagga Records, City: Wagga Wagga, records in inventory: 1, Sales: 0.";
    assert.strictEqual(stringResult, expected);
  })

  it('should list the items in the inventory', function() {
    store.addRecord(record1);
    store.addRecord(record2);
    var expectedResult = '1: Dark side of the moon, Pink Floyd. 2: The Spaghetti Incident?, Guns \'N\' Roses. ';
    var stringResult = store.listInventory();
    assert.strictEqual(stringResult, expectedResult);
  })

  it('should sell record and adjust balance', function() {
    store.sellRecord(record1);
    assert.strictEqual(store.balance, 10);
  })

  it('should report the value of balance and inventory', function() {
    store.addRecord(record1);
    store.addRecord(record2);
    assert.strictEqual(store.totalValue(), 25);
  })

  it('should be able to list all records of a given genre', function() {
    var record3 = new Record('Rush', '2112', 'Prog Rock', 5);
    store.addRecord(record1);
    store.addRecord(record2);
    store.addRecord(record3);
    var expected = [record1, record3];
    assert.deepStrictEqual(store.searchGenre('Prog Rock'), expected )
  })

})
