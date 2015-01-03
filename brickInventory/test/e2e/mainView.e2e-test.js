'use strict';
describe('Main view End-2-End', function() {
    var brickTable

    beforeEach(function() {
      browser.get('index.html')

      brickTable = element.all(by.repeater('brick in bricksList'))
    })


    describe('When Main view appears', function() {

      it('should show all the bricks', function() {

        expect(brickTable.count()).toBe(5)

      })

      it('should have a colorSelecter and colors', function() {

        var colorSelecter = element(by.model('selectedColor'))
        expect(colorSelecter).toBeDefined()
        var colorSelecterItem = element(by.cssContainingText('option', 'Red'))
        expect( colorSelecterItem.getText() ).toBe( "Red" )

      })


      it('should have a shapeSelecter and shapes', function() {

        var shapeSelecter = element(by.model('selectedShape'))
        expect(shapeSelecter).toBeDefined()
        var shapeSelecterItem = element(by.cssContainingText('option', 'Robotics'))
        expect( shapeSelecterItem.getText() ).toBe( "Robotics" )

      })


    })

    describe('When user clicks Red', function() {

      it('should narrow the list of brick to Red bricks', function() {

         var total = brickTable.count()

         var redColor = element(by.cssContainingText('option', 'Red'))
         redColor.click()

         //expect( brickList.count() ).toBeLessThan( total )
         // does not work has items are still in the table, they are just hidden

         var displayedElements = brickTable.filter(function(row) {
             return row.isDisplayed()
         })

         expect( displayedElements.count() ).toBeLessThan( total )

         displayedElements.map( function(element) {
           expect(element.getText()).toContain('Red');
         })

      })

   })

   describe('When user clicks Robotics', function() {

      it('should narrow the list of brick to Robotics', function() {

         var total = brickTable.count()

         var roboticsShape = element(by.cssContainingText('option', 'Robotics'))
         roboticsShape.click()

         var displayedElements = brickTable.filter(function(row) {
             return row.isDisplayed()
         })

         expect( displayedElements.count() ).toBeLessThan( total )

         displayedElements.map( function(element) {
           expect(element.getText()).toContain('Robotics');
         })

      })

   })

   /*
    it('should filter the phone list as a user types into the search box', function() {

      var phoneList = element.all(by.repeater('phone in phones'));
      var query = element(by.model('query'));

      expect(phoneList.count()).toBe(3);

      query.sendKeys('nexus');
      expect(phoneList.count()).toBe(1);

      query.clear();
      query.sendKeys('motorola');
      expect(phoneList.count()).toBe(2);
    });
    */
});
