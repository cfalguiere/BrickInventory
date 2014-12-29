
angular.module('BrickInventoryApp.controllers', [])
  .controller('bricksController', function($scope, bricksFactory) {
    $scope.bricksList = bricksFactory;

    $scope.found = function(brick) {
	    // Hides a row of brick, if the found button was clicked
	    alert("Found the " + brick.itemName);
      return brick.show = (brick.count >= brick.quantity);
    };

    $scope.resetSet = function() {
	    // reset all count to 0 and all show to true
	    angular.forEach($scope.bricksList, function(item) {
        item.count = 0;
        item.show = true;
      } )
    };
});




