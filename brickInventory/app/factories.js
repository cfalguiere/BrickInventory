angular.module('BrickInventoryApp.factories', [])
  .factory("bricksFactory", function(colorsService) {

    var brickList = [];

    function buildBrick(typ, id, name, qty, colorId, groupName) {
       var colorName = colorsService.getColorName(colorId);

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
      };
    }

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

    return brickList;
});

