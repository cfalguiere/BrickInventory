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
    var GRP_BELT = "Belt"


    function guessGroup(name) {
      var groupName = GRP_MISC

      if (name.indexOf(GRP_BRICK) == 0) {
          groupName = GRP_BRICK
      } else if (name.indexOf("WeDo Robotics") == 0) {
          groupName = GRP_ROBOTICS
      } else if (name.indexOf("Power Functions") == 0) {
          groupName = GRP_ROBOTICS
      } else if (name.indexOf("Belt") > -1 ) {
          groupName = GRP_BELT
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

      angular.forEach( kit, function( line ) {
          itemList.push(parseLine( line ))
      })

      return itemList
    }


    var kit = [
      "S	9581-1	WeDo Robotics USB Hub	1	0	N	N	0	N",
      "S	9583-1	WeDo Robotics Motion Sensor	1	0	N	N	0	N",
      "S	9584-1	WeDo Robotics Tilt Sensor	1	0	N	N	0	N",
      "S	8883-1	Power Functions M-Motor	1	0	N	N	0	N",
      "P	x127c41	String with End Studs 41L Overall	1	11	N	N	0	N",
      "P	6588	Technic, Gearbox 2 x 4 x 3 1/3	1	12	N	N	0	N",
      "P	x90	Rubber Belt Extra Large &#40;Round Cross Section&#41; - Approx. 5 x 5	2	3	N	N	0	N",
      "P	4185	Technic Wedge Belt Wheel (Pulley)	2	34	N	N	0	N",
      "P	70162	Technic Wedge Belt Wheel Tire	2	11	N	N	0	N",
/*
      P	3743	Technic, Gear Rack 1 x 4	2	1	N	N	0	N
P	4519	Technic, Axle 3	2	86	N	N	0	N
P	3706	Technic, Axle 6	2	11	N	N	0	N
P	3707	Technic, Axle 8	2	11	N	N	0	N
P	3650b	Technic, Gear 24 Tooth Crown with Reinforcements (New Style)	2	86	N	N	0	N
P	3648	Technic, Gear 24 Tooth (New Style with Single Axle Hole)	2	85	N	N	0	N
  */
      "P	3003	Brick 2 x 2	2	5	N	N	0	N"
    ]


})
