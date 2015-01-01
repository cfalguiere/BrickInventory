
angular.module('BrickInventoryApp.controllers', [])
  .controller('bricksController', function($scope, bricksFactory, colorsService, shapesService) {
    var self = this;

    $scope.bricksList = bricksFactory;
    //$scope.colorsList = colorsService.fillColorNames($scope.bricksList);

    $scope.colorsList = colorsService.selectColors($scope.bricksList);
    $scope.selectedColor = null;

    $scope.shapesList = shapesService.selectShapes($scope.bricksList);
    $scope.selectedShape = null;

    $scope.found = function(brick) {
	    //alert("Found " + brick.itemName);
      brick.count++;
      brick.show = (brick.count < brick.quantity);
    };

    $scope.filterByColor = function(selectedColor) {
      if (selectedColor == null) {
        angular.forEach($scope.bricksList, function(brick) {
          brick.colorFilter = true;
        } )
      } else {
        angular.forEach($scope.bricksList, function(brick) {
          brick.colorFilter = (brick.colorId == selectedColor.id);
        } )
      }
    };

    $scope.filterByShape = function(selectedShape) {
      if (selectedShape == null) {
        angular.forEach($scope.bricksList, function(brick) {
          brick.shapeFilter = true;
        } )
      } else {
        angular.forEach($scope.bricksList, function(brick) {
          brick.shapeFilter = (brick.groupName == selectedShape);
        } )
      }
    };

    $scope.resetFilters = function() {
	    // reset all count to 0 and all show to true
	    angular.forEach($scope.bricksList, function(brick) {
        brick.colorFilter = true;
        brick.shapeFilter = true;
      } )
      $scope.selectedColor = null;
      $scope.selectedShape = null;
    };

    $scope.resetCount = function() {
	    // reset all count to 0 and all show to true
	    angular.forEach($scope.bricksList, function(brick) {
        brick.count = 0;
        brick.show = true;
      } )
      self.resetFilters();
    };
});




