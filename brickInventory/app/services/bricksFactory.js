angular.module('BrickInventoryApp.factories', [])
  .factory("bricksFactory", function(colorsService, wedoLoaderService) {

    var brickList = []

    var itemList = wedoLoaderService.load()
    brickList = itemList.map( function(item) {
        var colorName = colorsService.getColorName(item.colorId)
        return { item: item, colorName: colorName, count: 0, colorFilter: true, shapeFilter: true, show: true }
    })

    function compareByQuantityDesc (a, b) {
        return b.item.quantity - a.item.quantity
    }

    function compareByQuantityDescAndShapeAsc(a, b) {
        var r = b.item.quantity - a.item.quantity
        if (r == 0) r = a.item.groupName.localeCompare( b.item.groupName )
        return r
    }

    brickList.sort(compareByQuantityDescAndShapeAsc)

    return brickList;
});

