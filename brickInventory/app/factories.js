angular.module('BrickInventoryApp.factories', [])
  .factory("bricksFactory", function() {

    var brickList = [];
    var colorIds = [];

    function registerColorId(colorId) {
      if ($.inArray(colorId, colorIds) < 0) {
        colorIds.push(colorId);
      }
    }

    function buildBrick(typ, id, name, qty, colorId) {
       return {
        itemType: typ,
        itemId: id,
        itemName: name,
        quantity: qty,
        colorId: colorId,
 	      count: 0,
	      colorFilter: true,
	      show: true
      };
    }

    brickList.push(buildBrick("S", "9581-1", "WeDo Robotics USB Hub", 1, 0));
    brickList.push(buildBrick("S", "9583-1", "WeDo Robotics Motion Sensor", 1, 0));
    brickList.push(buildBrick("S", "9584-1", "WeDo Robotics Tilt Sensor",	1,	0));
    brickList.push(buildBrick("P", "970c00", "Hips and Legs",	1,	88));
    brickList.push(buildBrick("P", "3010",	"Brick 1 x 4",	2,	5));
    brickList.push(buildBrick("P", "3003", "Brick 2 x 2", 2,	5));

    return brickList;
});

