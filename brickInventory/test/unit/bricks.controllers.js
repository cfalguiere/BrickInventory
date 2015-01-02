describe('bricksController test', function(){

    beforeEach(module('BrickInventoryApp'));

    describe('when shapeFilter is used ', function(){
        var scope
        var ctrl
        var bricksList

        beforeEach( inject(function($controller)  {
          scope = {}
          ctrl = $controller('bricksController', {$scope:scope});
          bricksList = scope.bricksList;
        }))

        it('should set all shapeFilters to true if unselected', function() {
          scope.filterByShape(null);

          var matches = bricksList.filter( function (element) { return element.shapeFilter == true } )

          expect( matches.length ).toEqual( bricksList.length );
        })

        it('should set shapeFilter to true for Brick and false for other shapes', inject(function($controller) {
          scope.filterByShape("Brick");

          var matches = bricksList.filter( function (element) { return element.shapeFilter == true } )
          expect(matches.length).toBe( 2 );
          expect(bricksList[4].shapeFilter).toBe( true );
          expect(bricksList[5].shapeFilter).toBe( true );
        }))
    })

    describe('when color Filter is used ', function(){
        var scope
        var ctrl
        var bricksList

        beforeEach( inject(function($controller)  {
          scope = {}
          ctrl = $controller('bricksController', {$scope:scope});
          bricksList = scope.bricksList;
        }))

        it('should set all colorFilters to true if unselected', function() {
          scope.filterByColor( null );

          var matches = bricksList.filter( function (element) { return element.colorFilter == true } )

          expect( matches.length ).toEqual( bricksList.length );
        })

        it('should set colorFilter to true for each Red brick and false for other colors', function() {
          scope.filterByColor( {name:'Red', id:5} );

          var matches = bricksList.filter( function (element) { return element.colorFilter == true } )
          expect(matches.length).toBe( 2 );
          expect(bricksList[4].shapeFilter).toBe( true );
          expect(bricksList[5].shapeFilter).toBe( true );
        })

    })

});
