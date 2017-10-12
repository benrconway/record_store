var assert = require('assert');
var Customer = require('../customer');
var Store = require('../store');
var Record = require('../record');

describe( 'Customer', function() {
  var customer;
  var store;
  var record1;
  var record2;
  var record3;

  beforeEach( function() {
    customer = new Customer();
    record1 = new Record('Pink Floyd', 'Dark side of the moon', 'Prog Rock', 10);
    record2 = new Record('Guns \'N\' Roses', 'The Spaghetti Incident?', 'Heavy Metal', 15);
    record3 = new Record('Elvis', 'Long Lost Record', 'Rock', 300);
    store = new Store('Wagga Wagga Records', 'Wagga Wagga');
    store.addRecord(record1);
    store.addRecord(record2);
  })

  it('should check collection is empty', function(){
    assert.strictEqual(customer.collection.length, 0);
  })

  it('should start with 100 dollars', function() {
    assert.strictEqual(customer.wallet, 100);
  })

  it('can buy a record and notice changes in wallet size', function() {
    customer.buyRecord(record1, store);
    assert.strictEqual(customer.wallet, 90);
  })

  it('should be able to sell records', function() {
    customer.collection.push(record3);
    store.balance = 500;
    customer.sellRecord(record3, store);
    assert.strictEqual(customer.wallet, 400);
    assert.strictEqual(store.balance, 200);
  })
})
