'use strict';
describe('bricksController test', function(){

    beforeEach(module('BrickInventoryApp'));

    describe('when found is used ', function(){
        var scope
        var ctrl
        var bricksList

        beforeEach( inject(function($controller)  {
          scope = {}
          ctrl = $controller('bricksController', {$scope:scope});
          scope.bricksList = [ { item: { quantity: 1 }, show:true , count: 0 },
                               { item: { quantity: 2 }, show:true , count: 0 }
                             ]
          bricksList = scope.bricksList
        }))

        it('should increment the brick count', function() {
          var brick = bricksList[1];
          expect( brick.count ).toEqual( 0 )
          expect( brick.item.quantity ).toEqual( 2 )

          scope.found(brick)
          expect( brick.count ).toEqual( 1 )

          scope.found(brick)
          expect( brick.count ).toEqual( 2 )
        })

        it('should show the brick while quantity is not reached', function() {
          var brick = bricksList[1];
          expect( brick.show ).toBe( true );
          expect( brick.item.quantity ).toEqual( 2 )

          scope.found(brick)
          expect( brick.show ).toBe( true );
       })

        it('should hide the brick when quantity is reached', function() {
          var brick = bricksList[1];
          expect( brick.show ).toBe( true );
          expect( brick.item.quantity ).toEqual( 2 )

          scope.found(brick)
          expect( brick.show ).toBe( true );

          scope.found(brick)
          expect( brick.show ).toBe( false );
        })


    })

    describe('when shapeFilter is used ', function(){
        var scope
        var ctrl
        var bricksList

        beforeEach( inject(function($controller)  {
          scope = {}
          ctrl = $controller('bricksController', {$scope:scope});
          scope.bricksList = [ { item: { groupName:"Brick" }, shapeFilter:false },
                               { item: { groupName:"Robotics" }, shapeFilter:false },
                               { item: { groupName:"Gear" }, shapeFilter:false },
                               { item: { groupName:"Brick" }, shapeFilter:false },
                               { item: { groupName:"Axle" }, shapeFilter:false }
                             ]
          bricksList = scope.bricksList
        }))

        it('should set all shapeFilters to true if unselected', function() {
          scope.filterByShape(null);

          var matches = bricksList.filter( function (element) { return element.shapeFilter == true } )

          expect( matches.length ).toEqual( bricksList.length );
        })

        it('should set shapeFilter to true for Brick and false for other shapes', inject(function($controller) {
          scope.filterByShape("Brick");

          var hidden = bricksList.filter( function (element) { return element.shapeFilter == false } )
          var matches = bricksList.filter( function (element) { return element.shapeFilter == true } )
          expect(matches.length).toBe( 2 );
          expect(hidden.length).toBe( 3 );
          expect(bricksList[0].shapeFilter).toBe( true );
          expect(bricksList[3].shapeFilter).toBe( true );
        }))
    })

    describe('when color Filter is used ', function(){
        var scope
        var ctrl
        var bricksList

        beforeEach( inject(function($controller)  {
          scope = {}
          ctrl = $controller('bricksController', {$scope:scope});
          scope.bricksList = [ { item: { colorId: '1' }, colorFilter:false },
                               { item: { colorId: '5' }, colorFilter:false },
                               { item: { colorId: '2' }, colorFilter:false },
                               { item: { colorId: '5' }, colorFilter:false },
                               { item: { colorId: '3' }, colorFilter:false }
                             ]
          bricksList = scope.bricksList;
        }))

        it('should set all colorFilters to true if unselected', function() {
          scope.filterByColor( {name:'Red', id:5} );
          scope.filterByColor( null );

          var matches = bricksList.filter( function (element) { return element.colorFilter == true } )

          expect( matches.length ).toEqual( bricksList.length );
        })

        it('should set colorFilter to true for each Red brick and false for other colors', function() {
          scope.filterByColor( {name:'Red', id:5} );

          var matches = bricksList.filter( function (element) { return element.colorFilter == true } )
          var hidden = bricksList.filter( function (element) { return element.colorFilter == false } )
          expect(hidden.length).toBe( 3 );
          expect(matches.length).toBe( 2 );
          expect(bricksList[1].colorFilter).toBe( true );
          expect(bricksList[3].colorFilter).toBe( true );
        })

    })

});
