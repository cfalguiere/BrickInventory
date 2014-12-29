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

    this.getColorName = function(id) {
      function match(anId) {
        return anId == id;
      }
      return colors
              .filter( function (element) { return match(element.id); } )
              .map( function (element) {return element.name;} )[0];
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


      colorList = colors.filter( function (element) { return isInIndex(element.id); } )


      return colorList;
    }

});