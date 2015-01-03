angular.module('BrickInventoryApp.factories', [])
  .factory("bricksFactory", function(colorsService, wedoLoaderService) {

    var brickList = []

    function buildBrick(typ, id, name, qty, colorId, groupName) {

       return {
        itemType: typ,
        itemId: id,
        itemName: name,
        quantity: qty,
        colorId: colorId,
        colorName: colorName,
        groupName: groupName,
 	      count: 0,
	      colorFilter: true,
	      shapeFilter: true,
	      show: true
      }
    }

    var itemList = wedoLoaderService.load()
    brickList = itemList.map( function(item) {
      var colorName = colorsService.getColorName(item.colorId)
      return { item: item, colorName: colorName, count: 0, colorFilter: true, shapeFilter: true, show: true }
    })

 /*
    brickList.push(buildBrick("S", "9581-1", "WeDo Robotics USB Hub", 1, 0, "Robotics"))
    brickList.push(buildBrick("S", "9583-1", "WeDo Robotics Motion Sensor", 1, 0, "Robotics"))
    brickList.push(buildBrick("S", "9584-1", "WeDo Robotics Tilt Sensor",	1,	0, "Robotics"))
    brickList.push(buildBrick("P", "970c00", "Hips and Legs",	1,	88, "Minifigure"))
    brickList.push(buildBrick("P", "3010",	"Brick 1 x 4",	2,	5, "Brick"))
    brickList.push(buildBrick("P", "3003", 	"Brick 2 x 2",	2,	5, "Brick"))
    brickList.push(buildBrick("S", "8883-1",	"Power Functions M-Motor",	1, 0, "Robotics"))
    brickList.push(buildBrick("P", "x127c41",	"String with End Studs 41L Overall",	1,	11, "Misc"))
    brickList.push(buildBrick("P", "6588",	"Technic, Gearbox 2 x 4 x 3 1/3",	1,	12, "Misc"))
    brickList.push(buildBrick("P",	"x90", "Rubber Belt Extra Large &#40;Round Cross Section&#41; - Approx. 5 x 5",	2,	3, "Misc"))
    brickList.push(buildBrick("P",	"4185",	"Technic Wedge Belt Wheel (Pulley)",	2,	34, "Misc"))
    brickList.push(buildBrick("P",	"70162",	"Technic Wedge Belt Wheel Tire",	2,	11, "Misc"))

    brickList.push(buildBrick("P",	"3743",	"Technic, Gear Rack 1 x 4", 2,	1,	"Gear"))
    brickList.push(buildBrick("P",	"4519",	"Technic, Axle 3",	2,	86,	"Axle"))
    brickList.push(buildBrick("P",	"3706",	"Technic, Axle 6",	2,	11,	"Axle"))
    brickList.push(buildBrick("P",	"3707",	"Technic, Axle 8",	2,	11,	"Axle"))
*/
    return brickList;
});

