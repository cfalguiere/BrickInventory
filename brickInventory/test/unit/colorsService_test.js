'use strict';

describe('colorsService test', function(){

    describe('when I call selectColors', function(){
        beforeEach(module('BrickInventoryApp.services'));
        it('returns a list of color tuples', inject(function(colorsService){

          var brickList = [  { item: { colorId: '5' }} , { item: { colorId: '0' }} ];

          expect( colorsService.selectColors(brickList) ).toEqual( [ { name: "Red", id: '5' }, { name: "Undefined", id: '0'} ]) ;

        }))

        it('and they are sorted by color name', inject(function(colorsService){

          var brickList = [ { item: { colorId: '0' }} , { item: { colorId: '5' }}  ];

          expect( colorsService.selectColors(brickList) ).toEqual( [ { name: "Red", id: '5' }, { name: "Undefined", id: '0'} ]) ;

        }))

    })


    describe('when I call selectColorIds', function(){
        beforeEach(module('BrickInventoryApp.services'));

        it('returns 5 0', inject(function(colorsService){

          var brickList = [ { item: { colorId: '0' }} , { item: { colorId: '5' }}  ];

          expect( colorsService.selectColorIds(brickList) ).toEqual( [ '0', '5' ] ) ;

        }))


    })


    describe('when I call getColorName(id)', function(){
        beforeEach(module('BrickInventoryApp.services'));

        describe('if 5 (id exists)', function(){

            it('returns Red', inject(function(colorsService){

              expect( colorsService.getColorName('5') ).toEqual( "Red" ) ;

            }))
        })

        describe('if -1 (id is not know yet)', function(){

            it('returns id', inject(function(colorsService){

              expect( colorsService.getColorName('-1') ).toEqual( '-1' ) ;

            }))
        })
    })



    describe('when I call getColorById(id)', function(){
        beforeEach(module('BrickInventoryApp.services'));

        describe('if 5 (id exists)', function(){

            it('returns Red', inject(function(colorsService){

              expect( colorsService.getColorById('5') ).toEqual( { name: "Red", id: '5' } ) ;

            }))
        })

        describe('if -1 (id is not know yet)', function(){

            it('returns id', inject(function(colorsService){

              expect( colorsService.getColorById('-1') ).toEqual( null ) ;

            }))
        })
    })


});

