angular.module('BrickInventoryApp.services', [])
  .service("colorsService", function() {

     var colors = [
       {name:'black', id:999},
       {name:'white', id:999},
       {name:'red', id:5},
       {name:'brown', id:88},
       {name:'green', id:999},
       {name:'yellow', id:999},
       {name:'undefined', id:0}
     ];

    function getColorNameF(id) {
      return colors
              .filter( function (element, id) { return element.id == id; } )
              .map( function (element) {return element.name;} );
    }

    function getColorName(id) {
        var found = false;
        var name = "UNKNOWN";
        for(var i = 0; i < colors.length; i++ && !found) {
           var item = colors[i];
           if (item.id == id) {
               found = true;
               name = item.name;
           }
        }
    }


    function uniqueColorIds(brickList) {
        var seen = {};
        var out = [];
        var len = brickList.length;
        var k = 0;
        for(var i = 0; i < len; i++) {
           var item = brickList[i].colorId;
           if (seen[item] !== 1) {
               seen[item] = 1;
               out[k++] = item;
           }
        }
        return out;
    }

    this.selectColorIds = function(brickList) {
      return uniqueColorIds(brickList);
    }

    this.selectColors = function(brickList) {
      var colorList = [];
      var colorIdIndex = uniqueColorIds(brickList);

      function isInIndex(id) {
        return colorIdIndex.indexOf(id) > -1;
      }

      /*
      angular.forEach(colorIdIndex, function(colorId) {
          colorList.push({name: getColorName(5), id: colorId});
      });*/

      colorList = colors.filter( function (element) { return isInIndex(element.id); } )


      return colorList;
    }

});