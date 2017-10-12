var Store = function(name, city) {
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
};

Store.prototype.addRecord = function(record){
  this.inventory.push(record);
};

Store.prototype.details = function() {
  var numberOfRecords = this.inventory.length;
  var result = "Name: " + this.name + ", City: " + this.city + ", records in inventory: " + numberOfRecords + ", Sales: " + this.balance+".";
  return result;
};

Store.prototype.listInventory = function() {

  var result = '';
  for ( var i = 0; i < this.inventory.length; i++ ) {
    var currentString = (i + 1).toString() + ': ' + this.inventory[i].title + ', ' + this.inventory[i].artist + '. ';
    result = result.concat( currentString );
  };
  return result;
};

Store.prototype.sellRecord = function(record) {
  this.balance += record.price;
};

Store.prototype.totalValue = function() {
  var total = 0;
  this.inventory.forEach(function(record) {
    total += record.price;
  })
  total += this.balance;
  return total;
}

Store.prototype.searchGenre = function(genre) {
  var result = [];
  var filterByGenre = function(record){
    if(record.genre === genre){
      result.push(record);
    }
  }
  this.inventory.filter(filterByGenre);
  return result;
}

Store.prototype.hasRecord = function(record) {
  return this.inventory.includes(record);
}

Store.prototype.buyRecord = function(record) {
  if(this.hasSufficientFunds(record)){
  this.inventory.push(record);
  this.balance -= record.price;
  return true;
  }
}

Store.prototype.hasSufficientFunds = function(record){
  var sufficientFunds = false;
  if(record.price < this.balance){
    sufficientFunds = true;
  }
  return sufficientFunds;
}
module.exports = Store;
