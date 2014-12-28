angular.module('BrickInventoryApp.factories', [])
  .factory("Brick",function() {

  var Brick = function(typ, id, name, qty, colorId) {

    this.initialize = function() {
      var self = this;
      self.itemType = typ;
      self.itemId = id;
      self.itemName = name;
      self.quantity = qty;
      self.colorId = colorId;
 	    self.count =  0;
	    self.show = true;
    };

    // Call the initialize function for every new instance
    this.initialize();
  };

  // Return a reference to the function
  return (Brick);
});