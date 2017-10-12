var Customer = function() {
  this.collection = [];
  this.wallet = 100;
}

Customer.prototype.buyRecord = function(record, store) {
  if(store.hasRecord(record)){
  this.collection.push(record);
  this.wallet -= record.price;
  store.balance += record.price;
  }
}

Customer.prototype.sellRecord = function(record, store) {
    if(store.buyRecord(record)){
    this.wallet += record.price;
  }
}

module.exports = Customer;
