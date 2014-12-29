
angular.module('BrickInventoryApp.controllers', [])
  .controller('bricksController', function($scope, bricksFactory, colorsService) {
    $scope.bricksList = bricksFactory;
    $scope.colorsList = colorsService.selectColors($scope.bricksList);
    $scope.selectedColor = 0;

    $scope.found = function(brick) {
	    // Hides a row of brick, if the found button was clicked
	    alert("Found the " + brick.itemName);
      return brick.show = (brick.count >= brick.quantity);
    };

    $scope.filterByColor = function(selectedColor) {
      if (selectedColor == null) {
        angular.forEach($scope.bricksList, function(item) {
          item.colorFilter = true;
        } )
      } else {
        angular.forEach($scope.bricksList, function(item) {
          item.colorFilter = (item.colorId == selectedColor.id);
        } )
      }
    };

    $scope.resetSet = function() {
	    // reset all count to 0 and all show to true
	    angular.forEach($scope.bricksList, function(item) {
        item.count = 0;
        item.show = true;
      } )
    };
});




