'use strict';
describe('bricksController integration test', function(){
    var scope
    var ctrl
    var bricksList

    beforeEach(module('BrickInventoryApp'));

    beforeEach(inject(function($controller)  {
      scope = {}
      ctrl = $controller('bricksController', {$scope:scope});
      bricksList = scope.bricksList;
    }))

    describe('bricksController and bricksFactory', function(){

        it('should create brickList with some bricks', function() {
          expect(scope.bricksList).toBeDefined();
          expect(scope.bricksList.length).toBeGreaterThan(0);
        })

    });

    describe('bricksController and shapesService', function(){

        it('should create shapeList with some shapes', function() {
          expect(scope.shapesList).toBeDefined();
          expect(scope.shapesList.length).toBeGreaterThan(0);
        })

    });

    describe('bricksController and colorsService', function(){

        it('should create colorsList with some colors', function() {
          expect(scope.colorsList).toBeDefined();
          expect(scope.colorsList.length).toBeGreaterThan(0);
        })

    });

})
