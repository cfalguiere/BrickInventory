describe('bricksController test', function(){

    beforeEach(module('BrickInventoryApp'));

    describe('bricksController and bricksFactory integration test', function(){

        beforeEach(module('BrickInventoryApp'));

        it('should create brickList with 12 bricks', inject(function($controller) {
          var scope = {}
          var ctrl = $controller('bricksController', {$scope:scope});

          expect(scope.bricksList).toBeDefined();
          expect(scope.bricksList.length).toBeGreaterThan(1);
        }))

    });

    describe('bricksController and shapesService integration test', function(){

        it('should create shapeList with 3 shapes', inject(function($controller) {
          var scope = {}
          var ctrl = $controller('bricksController', {$scope:scope});

          expect(scope.shapesList).toBeDefined();
          expect(scope.shapesList.length).toBeGreaterThan(1);
        }))

    });

    describe('bricksController and colorsService integration test', function(){

        it('should create colorsList with 3 colors', inject(function($controller) {
          var scope = {}
          var ctrl = $controller('bricksController', {$scope:scope});

          expect(scope.colorsList).toBeDefined();
          expect(scope.colorsList.length).toBeGreaterThan(1);
        }))

    });

})