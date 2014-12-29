'use strict';

describe('colorsService test', function(){

    describe('when I call selectColors', function(){
        beforeEach(module('BrickInventoryApp.services'));
        it('returns a list of color tuples', inject(function(colorsService){

          var brickList = [ { colorId: 5 }, { colorId: 0 } ];

          expect( colorsService.selectColors(brickList) ).toEqual( [ { name: "red", id:5}, { name: "undefined", id:0 } ]) ;

        }))
    })


    describe('when I call selectColorIds', function(){
        beforeEach(module('BrickInventoryApp.services'));
        it('returns 5 0', inject(function(colorsService){

          var brickList = [ { colorId: 5 }, { colorId: 0 } ];

          expect( colorsService.selectColorIds(brickList) ).toEqual( [ 5, 0 ] ) ;

        }))
    })


    describe('when I call getColorNameF(5)', function(){
        beforeEach(module('BrickInventoryApp.services'));
        it('returns red', inject(function(colorsService){

          expect( colorsService.getColorName(5) ).toEqual( "red" ) ;

        }))
    })

});