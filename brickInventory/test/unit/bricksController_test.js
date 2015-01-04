'use strict';
describe('In bricksController', function(){
    var scope
    var ctrl

    beforeEach(module('BrickInventoryApp'));

    describe('when page opens', function() {
        beforeEach(function () {
           module(function ($provide) {
             $provide.value('bricksFactory', [ {item: { quantity:1}}, {item: { quantity:2}}] )
           })
        })

        beforeEach( inject(function($controller)  {
          scope = {}
          ctrl = $controller('bricksController', {$scope:scope});
        }))

        it('should have list of bricks', function() {
          expect( scope.bricksList.length ).toBe( 2 )
        })

        it('should compute the total count', function() {
          expect( scope.totalCount ).toBe( 3 );
        })

        it('should set the currentCount and progress to 0', function() {
          expect( scope.currentCount ).toBe( 0 );
          expect( scope.progressBar ).toBe( 0 );
        })

        it('should show the blank status ', function() {
          expect( scope.progressStatus ).toBe( "" );
       })

    })

    describe('when found is used ', function(){
        var scope
        var ctrl

        beforeEach(function () {
           module(function ($provide) {
             $provide.value('bricksFactory', [ { item: { quantity: 1 }, show:true , count: 0 },
                               { item: { quantity: 2 }, show:true , count: 0 }
                             ])
           })
        })

        beforeEach( inject(function($controller)  {
          scope = {}
          ctrl = $controller('bricksController', {$scope:scope});
        }))

        it('should increment the brick count', function() {
          var brick = scope.bricksList[1];
          expect( brick ).toBeDefined( )
          expect( brick.count ).toEqual( 0 )
          expect( brick.item.quantity ).toEqual( 2 )

          scope.found(brick)
          expect( brick.count ).toEqual( 1 )

          scope.found(brick)
          expect( brick.count ).toEqual( 2 )
        })

        it('should show the brick while quantity is not reached', function() {
          var brick = scope.bricksList[1];
          expect( brick.show ).toBe( true );
          expect( brick.item.quantity ).toEqual( 2 )

          scope.found(brick)
          expect( brick.show ).toBe( true );
       })

        it('should hide the brick when quantity is reached', function() {
          var brick = scope.bricksList[1];
          expect( brick.show ).toBe( true );
          expect( brick.item.quantity ).toEqual( 2 )

          scope.found(brick)
          expect( brick.show ).toBe( true );

          scope.found(brick)
          expect( brick.show ).toBe( false );
        })


        it('should increment the current count', function() {
           var brick = scope.bricksList[1];
           expect( scope.currentCount ).toBe( 0 );
           scope.found(brick)
           expect( scope.currentCount ).toBe( 1 );
        })

        it('should increment the progressBar (rounded)', function() {
           var brick = scope.bricksList[1];
           expect( scope.progressBar ).toBe( 0 );
           scope.found(brick)
           expect( scope.progressBar ).toBe( 33 );
        })

        it('should set the progressStatus to Done! when progressBar reach 100%', function() {
           var brick1 = scope.bricksList[0];
           var brick2 = scope.bricksList[1];
           expect( scope.progressStatus ).toBe( '' );
           scope.found(brick1)
           scope.found(brick2)
           scope.found(brick2)
           expect( scope.progressBar ).toBe( 100 );
           expect( scope.progressStatus ).toBe( "Done!" );
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



    describe('when colorFilterByColorId is used instead', function(){

        var scope
        var ctrl
        var bricksList

        beforeEach(function () {
          var colorServiceDependency =  {
            getColorById: function (id) {
              //alert("been here with " + id)
              return {name:'Red', id: '5'}
            },
            getColorName: function (id) {
              return 'Red'
            },
            selectColors: function () {
              return [ {name:'Red', id: '5'}  ]
            }
          }

          module(function ($provide) {
            $provide.value('colorsService', colorServiceDependency)
          })
        })

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

        it('should have the same behavior than filterByColor', function() {
          scope.filterByColorId( '5' );

          var matches = bricksList.filter( function (element) { return element.colorFilter == true } )
          var hidden = bricksList.filter( function (element) { return element.colorFilter == false } )
          expect(hidden.length).toBe( 3 );
          expect(matches.length).toBe( 2 );
          expect(bricksList[1].colorFilter).toBe( true );
          expect(bricksList[3].colorFilter).toBe( true );
        })

        it('should set selectedColor', function() {
          scope.filterByColorId( '5' );
          expect(scope.selectedColor.name).toBe( 'Red' )
        })
    })

    describe('when reset count is used ', function(){
        beforeEach(function () {
           module(function ($provide) {
             $provide.value('bricksFactory', [ { item: { quantity: 1 }, show:true , count: 0 },
                               { item: { quantity: 2 }, show:true , count: 0 }
                             ])
           })
        })

        beforeEach( inject(function($controller)  {
            scope = {}
            ctrl = $controller('bricksController', {$scope:scope});
        }))

        it("should reset currentCount, progressBar, progressStatus and item's count", function() {
            var brick = scope.bricksList[1];

            scope.found(brick)
            expect( brick.count ).toBeGreaterThan( 0 )
            expect( scope.currentCount ).toBeGreaterThan( 0 );
            expect( scope.progressBar ).toBeGreaterThan( 0 );

            scope.resetCount()
            expect( brick.count ).toEqual( 0 )
            expect( scope.currentCount ).toBe( 0 );
            expect( scope.progressBar ).toBe( 0 );
            expect( scope.progressStatus).toBe( "" );

       })
    })

    describe('when foundAll is used ', function(){
        var scope
        var ctrl

        beforeEach(function () {
           module(function ($provide) {
             $provide.value('bricksFactory', [ { item: { quantity: 1 }, show:true , count: 0 },
                               { item: { quantity: 2 }, show:true , count: 0 }
                             ])
           })
        })

        beforeEach( inject(function($controller)  {
          scope = {}
          ctrl = $controller('bricksController', {$scope:scope});
        }))

        it('should set the count to quantity and behave as if the quantity were reached', function() {
            var brick = scope.bricksList[1];
            expect( brick ).toBeDefined( )
            expect( brick.count ).toEqual( 0 )
            expect( brick.item.quantity ).toEqual( 2 )

            scope.foundAll(brick)
            expect( brick.count ).toEqual( 2 )
            expect( brick.show ).toBe( false );
            expect( scope.currentCount ).toBe( 2 );
            expect( scope.progressBar ).toBe( 67 );
        })

        it('should set the progressStatus to Done! when progressBar reach 100%', function() {
           var brick1 = scope.bricksList[0];
           var brick2 = scope.bricksList[1];
           expect( scope.progressStatus ).toBe( '' );
           scope.found(brick1)
           scope.foundAll(brick2)
           expect( scope.progressBar ).toBe( 100 );
           expect( scope.progressStatus ).toBe( "Done!" );
        })
    })

});
