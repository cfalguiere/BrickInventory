'use strict';

describe('wedoLoaderService test', function(){

    describe('when I call load', function(){
        var itemList

        beforeEach(module('BrickInventoryApp.loaders'));

        beforeEach( inject(function(wedoLoaderService)  {
          itemList =  wedoLoaderService.load()
        }))


        it('returns a list of bricks', function() {

           expect( itemList ).toBeDefined( ) ;
           expect( itemList.length ).toBeGreaterThan( 0 )

        })

        it('and bricks have attributes', function() {

          var item = itemList[0];
          //expect( item  ).toBe(  1 )
          expect( item.itemType ).toBeDefined( )
          expect( item.itemId ).toBeDefined( )
          expect( item.itemName ).toBeDefined( )
          expect( item.quantity ).toBeDefined( )
          expect( item.colorId ).toBeDefined( )

        })

        it('and brick 3003 red is correct ', function() {

          var items = itemList.filter( function(e) { return e.itemId == "3003" && e.colorId == "5"} )
          expect( items.length ).toBe( 1 )

          var item = items[0]
          expect( item.itemType ).toBe( "P" ) ;
          expect( item.itemId ).toBe( "3003" ) ;
          expect( item.itemName ).toBe( "Brick 2 x 2" ) ;
          expect( item.quantity ).toBe( 2 ) ;
          expect( item.colorId ).toBe( '5' ) ;

        })

        it('and brick have a group name', function() {

          var item = itemList[0]
          expect( item.groupName ).toBeDefined( )
          expect( [ "Misc", "Brick", "Robotics" ].indexOf(item.groupName)  ).toBeGreaterThan( -1 )

        })

        it('and groupName of brick 3003 is Brick', function() {

          var items = itemList.filter( function(e) { return e.itemId == "3003" } )
          expect( items[0].groupName ).toBe( "Brick" ) ;

        })

        it('and groupName of brick 9581-1 is Robotics (Wedo)', function() {

          var items = itemList.filter( function(e) { return e.itemId == "9581-1" } )
          expect( items[0].groupName ).toBe( "Robotics" ) ;

        })

        it('and groupName of brick 8883-1 is Robotics  (Power)', function() {

          var items = itemList.filter( function(e) { return e.itemId == "8883-1" } )
          expect( items[0].groupName ).toBe( "Robotics" ) ;

        })

        it('and groupName of brick 4185 is Belt', function() {

          var items = itemList.filter( function(e) { return e.itemId == "4185" } )
          expect( items[0].groupName ).toBe( "Belt" ) ;

        })

        it('and groupName of brick 3743 is Gear', function() {

          var items = itemList.filter( function(e) { return e.itemId == "3743" } )
          expect( items[0].groupName ).toBe( "Gear" ) ;

        })

        it('and groupName of brick 6575 is  (Cam)', function() {

          var items = itemList.filter( function(e) { return e.itemId == "6575" } )
          expect( items[0].groupName ).toBe( "Gear" ) ;

        })

        it('and groupName of brick 4519 is Axle', function() {

          var items = itemList.filter( function(e) { return e.itemId == "4519" } )
          expect( items[0].groupName ).toBe( "Axle" ) ;

        })

        it('and groupName of brick 4485 is Minifig', function() {

          var items = itemList.filter( function(e) { return e.itemId == "4485" } )
          expect( items[0].groupName ).toBe( "Minifig" ) ;

        })

        it('and groupName of brick 973px126c01 is Minifig (Torso)', function() {

          var items = itemList.filter( function(e) { return e.itemId == "973px126c01" } )
          expect( items[0].groupName ).toBe( "Minifig" ) ;

        })

        it('and groupName of brick 973px126c01 is Minifig (Hips and Legs)', function() {

          var items = itemList.filter( function(e) { return e.itemId == "970c00" } )
          expect( items[0].groupName ).toBe( "Minifig" ) ;

        })

        it('and groupName of brick 42022 is Slope', function() {

          var items = itemList.filter( function(e) { return e.itemId == "42022" } )
          expect( items[0].groupName ).toBe( "Slope" ) ;

        })


    })

});


