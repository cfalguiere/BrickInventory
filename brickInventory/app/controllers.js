angular.module('F1FeederApp.controllers', [])
  .controller('driversController', function($scope) {
    $scope.driversList = [
      {
          Driver: {
              givenName: 'Sebastian',
              familyName: 'Vettel'
          },
          points: 322,
          nationality: "German",
          Constructors: [
              {name: "Red Bull"}
          ],
	  found: 0,
	  show: true
      },
      {
          Driver: {
          givenName: 'Fernando',
              familyName: 'Alonso'
          },
          points: 207,
          nationality: "Spanish",
          Constructors: [
              {name: "Ferrari"}
          ],
	  found: 0,
	  show: true
      }
    ];

    $scope.found = function(driver) {
	// Hides a row of brick, if the found button was clicked
	alert("Found the " + driver.name);
	return driver.show = false;
    };
});
