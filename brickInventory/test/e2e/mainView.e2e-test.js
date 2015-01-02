describe('BrickInventory End-2-End App', function() {

  describe('Main view', function() {

    beforeEach(function() {
      browser.get('index.html');
      //browser.get('app/index.html');
    });


    it('should show all the bricks', function() {

      var brickList = element.all(by.repeater('brick in bricksList'));

      expect(brickList.count()).toBe(16);
   });

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
});
