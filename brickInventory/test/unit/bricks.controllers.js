describe('bricksController test', function(){

    beforeEach(module('BrickInventoryApp'));


    describe('shapeFilter is used ', function(){

        it('should set all shapeFilters to true if unselected', inject(function($controller) {
          var scope = {}
          var ctrl = $controller('bricksController', {$scope:scope});
          var bricksList = scope.bricksList;
          scope.filterByShape(null);

          expect(bricksList[0].shapeFilter).toBe( true );
          expect(bricksList[4].shapeFilter).toBe( true );
        }))

        it('should set shapeFilter to true for Brick and false for other shapes', inject(function($controller) {
          var scope = {}
          var ctrl = $controller('bricksController', {$scope:scope});
          var bricksList = scope.bricksList;
          scope.filterByShape("Brick");

          expect(bricksList[0].shapeFilter).toBe( false );
          expect(bricksList[4].shapeFilter).toBe( true );
        }))
    })

    it('should set colorFilter to true for each Red brick and false for other colors', inject(function($controller) {
      var scope = {}
      var ctrl = $controller('bricksController', {$scope:scope});
      var bricksList = scope.bricksList;
      scope.filterByColor( {name:'Red', id:5} );

      expect(bricksList[0].colorFilter).toBe( false );
      expect(bricksList[4].colorFilter).toBe( true );
    }))

});
