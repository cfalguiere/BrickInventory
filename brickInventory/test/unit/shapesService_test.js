'use strict';

describe('shapesService test', function(){

    describe('when I call selectShapes', function(){
        beforeEach(module('BrickInventoryApp.services'));
        it('returns a list of shapes', inject(function(shapesService){

          var brickList = [ { item: {groupName: "Brick"} }, { item: {groupName: "Brick"} }, { item: {groupName: "Minifigure"} } ];

          expect( shapesService.selectShapes(brickList) ).toEqual( [ "Brick", "Minifigure"  ]) ;

        }))

        it('and they are sorted by name', inject(function(shapesService){

           var brickList = [ { item: {groupName: "Gear"} }, { item: {groupName: "Minifigure"} }, { item: {groupName: "Brick"} } ];

           expect( shapesService.selectShapes(brickList) ).toEqual( [ "Brick", "Gear", "Minifigure"  ]) ;

        }))
    })


});

