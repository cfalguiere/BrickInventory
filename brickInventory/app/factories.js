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

    brickList.push(buildBrick("S", "9581-1", "WeDo Robotics USB Hub", 1, 0, "Robotics"));
    brickList.push(buildBrick("S", "9583-1", "WeDo Robotics Motion Sensor", 1, 0, "Robotics"));
    brickList.push(buildBrick("S", "9584-1", "WeDo Robotics Tilt Sensor",	1,	0, "Robotics"));
    brickList.push(buildBrick("P", "970c00", "Hips and Legs",	1,	88, "Minifigure"));
    brickList.push(buildBrick("P", "3010",	"Brick 1 x 4",	2,	5, "Brick"));
    brickList.push(buildBrick("P", "3003", "Brick 2 x 2", 2,	5, "Brick"));

    return brickList;
});

