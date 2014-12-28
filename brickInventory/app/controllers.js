
angular.module('BrickInventoryApp.controllers', [])
  .controller('bricksController', function($scope) {
    $scope.bricksList = [
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

    $scope.found = function(brick) {
	    // Hides a row of brick, if the found button was clicked
	    alert("Found the " + brick.itemName);
      return brick.show = (brick.count >= brick.quantity);
    };
});




