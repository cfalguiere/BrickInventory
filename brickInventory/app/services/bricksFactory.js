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

    return brickList;
});

