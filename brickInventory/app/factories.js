angular.module('BrickInventoryApp.factories', [])
  .factory("bricksFactory", function() {

  var brickList = [
      {
        itemType: "S",
        itemId: "9581-1",
        itemName: "WeDo Robotics USB Hub",
        quantity: 1,
        colorId: 0,
 	      count: 0,
	      show: true
      },
      {
        itemType: "S",
        itemId: "9583-1",
        itemName: "WeDo Robotics Motion Sensor",
        quantity: 1,
        colorId: 0,
 	      count: 0,
	      show: true
      }
    ];
  /*
  = function(typ, id, name, qty, colorId) {

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
  };*/

  // Return a reference to the function
  return brickList;
});