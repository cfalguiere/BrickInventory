'use strict';

describe('colorsService test', function(){

    describe('when I call selectColors', function(){
        beforeEach(module('BrickInventoryApp.services'));
        it('returns a list of color tuples', inject(function(colorsService){

          var brickList = [ { colorId: 5 }, { colorId: 0 } ];

          expect( colorsService.selectColors(brickList) ).toEqual( [ { name: "Red", id:5}, { name: "Undefined", id:0 } ]) ;

        }))
    })


    describe('when I call selectColorIds', function(){
        beforeEach(module('BrickInventoryApp.services'));
        it('returns 5 0', inject(function(colorsService){

          var brickList = [ { colorId: 5 }, { colorId: 5 }, { colorId: 0 } ];

          expect( colorsService.selectColorIds(brickList) ).toEqual( [ 5, 0 ] ) ;

        }))
    })


    describe('when I call getColorName(id)', function(){
        beforeEach(module('BrickInventoryApp.services'));

        describe('if 5 (id exists)', function(){

            it('returns Red', inject(function(colorsService){

              expect( colorsService.getColorName(5) ).toEqual( "Red" ) ;

            }))
        })

        describe('if -1 (id is not know yet)', function(){

            it('returns id', inject(function(colorsService){

              expect( colorsService.getColorName(-1) ).toEqual( '-1' ) ;

            }))
        })
    })


});

describe('shapesService test', function(){

    describe('when I call selectShapes', function(){
        beforeEach(module('BrickInventoryApp.services'));
        it('returns a list of shapes', inject(function(shapesService){

          var brickList = [ { groupName: "Brick" }, { groupName: "Brick" }, { groupName: "Minifigure" } ];

          expect( shapesService.selectShapes(brickList) ).toEqual( [ "Brick", "Minifigure"  ]) ;

        }))
    })


});

describe('bricksFactory test', function(){

    describe('when I call factory', function(){
        beforeEach(module('BrickInventoryApp.services'));
        beforeEach(module('BrickInventoryApp.factories'));
        it('returns a list of 12 bricks', inject(function(bricksFactory){

           expect( bricksFactory.length ).toEqual( 12 ) ;

        }))
    })

    describe('when I call factory', function(){
        beforeEach(module('BrickInventoryApp.services'));
        beforeEach(module('BrickInventoryApp.factories'));
        it('returns a list of 12 bricks with colorNames', inject(function(bricksFactory){

           expect( bricksFactory[4].colorName ).toEqual( "Red" ) ;

        }))
    })

});
