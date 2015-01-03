angular.module('BrickInventoryApp.loaders', [])
  .service("wedoLoaderService", function() {

    var TYPE = 0
    var ID = 1
    var NAME = 2
    var QTY = 3
    var COLOR_ID = 4

    var GRP_MISC = "Misc"
    var GRP_BRICK = "Brick"
    var GRP_ROBOTICS = "Robotics"


    function guessGroup(name) {
      var groupName = GRP_MISC

      if (name.indexOf(GRP_BRICK) == 0) {
          groupName = GRP_BRICK
      } else if (name.indexOf("WeDo Robotics") == 0) {
          groupName = GRP_ROBOTICS
      } else if (name.indexOf("Power Functions") == 0) {
          groupName = GRP_ROBOTICS
      }

      return groupName
    }

    function parseLine(line) {
      var fields = line.split('\t')
      var groupName = guessGroup(fields[NAME])
      return {  itemType: fields[TYPE],
                itemId: fields[ID],
                itemName: fields[NAME],
                quantity: parseInt(fields[QTY]),
                colorId: fields[COLOR_ID],
                groupName : groupName}

    }

    this.load = function() {
      var itemList = [ ]

      itemList.push( parseLine("S	9581-1	WeDo Robotics USB Hub	1	0	N	N	0	N") )
      itemList.push( parseLine("S	9583-1	WeDo Robotics Motion Sensor	1	0	N	N	0	N") )
      itemList.push( parseLine("S	9584-1	WeDo Robotics Tilt Sensor	1	0	N	N	0	N") )
      itemList.push( parseLine("S	8883-1	Power Functions M-Motor	1	0	N	N	0	N") )

      itemList.push( parseLine("P	3003	Brick 2 x 2	2	5	N	N	0	N") )

      return itemList;
    }

})
