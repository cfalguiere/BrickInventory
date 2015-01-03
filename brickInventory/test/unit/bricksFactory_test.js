'use strict';

describe('bricksFactory test', function(){

    describe('when I call factory', function(){
        beforeEach(module('BrickInventoryApp.services'));
        beforeEach(module('BrickInventoryApp.loaders'));
        beforeEach(module('BrickInventoryApp.factories'));

        it('returns a list of bricks', inject(function(bricksFactory){

           expect( bricksFactory ).toBeDefined( )
           expect( bricksFactory.length ).toBeGreaterThan( 0 )

        }))

        it('and bricks have loaded attributes', inject(function(bricksFactory){

          var brick = bricksFactory[0]
          expect( brick.item ).toBeDefined( )
          expect( brick.item.itemType ).toBeDefined( )
          expect( brick.item.itemId ).toBeDefined( )
          expect( brick.item.itemName ).toBeDefined( )
          expect( brick.item.quantity ).toBeDefined( )
          expect( brick.item.colorId ).toBeDefined( )

        }))

        it('and bricks have additional attributes', inject(function(bricksFactory){

          var brick = bricksFactory[0]
          expect( brick.count ).toBeDefined( )
          expect( brick.show ).toBeDefined( )
          expect( brick.colorFilter ).toBeDefined( )
          expect( brick.shapeFilter ).toBeDefined( )

        }))

        it('and bricks have groupNames', inject(function(bricksFactory){

           var items = bricksFactory.filter( function(e) { return e.item.itemId == "3003" } )
           expect( items[0].item.groupName ).toBe( "Brick" ) ;

        }))

        it('and bricks have colorNames', inject(function(bricksFactory){

           var items = bricksFactory.filter( function(e) { return e.item.itemId == "3003" && e.item.colorId == "5" } )
           expect( items[0].colorName ).toBe( "Red" ) ;

        }))
    })


    describe('when I test a mock', function(){

        beforeEach(module('BrickInventoryApp.services'));
        beforeEach(module('BrickInventoryApp.factories'));

        beforeEach(function () {
           var loaderDependency =  {
                load: function () {
                  return [ 1, 2, 3 ]
                }
           }

           module(function ($provide) {
              $provide.value('wedoLoaderService', loaderDependency)
           })
        })


        it('returns the number of items of the mock', inject(function(bricksFactory){

          expect( bricksFactory.length ).toBe( 3 )

        }))
    })

});
