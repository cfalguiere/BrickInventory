describe('bricksController test', function(){

    beforeEach(module('BrickInventoryApp'));


    it('should set shapeFilter to true for each Brick and false for other shapes', inject(function($controller) {
      var scope = {}
      var ctrl = $controller('bricksController', {$scope:scope});
      var bricksList = scope.bricksList;
      scope.filterByShape("Brick");

      expect(bricksList[0].shapeFilter).toBe( false );
      expect(bricksList[4].shapeFilter).toBe( true );
    }))


    it('should set colorFilter to true for each Red brick and false for other colors', inject(function($controller) {
      var scope = {}
      var ctrl = $controller('bricksController', {$scope:scope});
      var bricksList = scope.bricksList;
      scope.filterByColor( {name:'Red', id:5} );

      expect(bricksList[0].colorFilter).toBe( false );
      expect(bricksList[4].colorFilter).toBe( true );
    }))

});
