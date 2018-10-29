angular.module('app.controllers', [])
  
.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$scope.mdl = {};

	$scope.resetButton = function () {
		$scope.mdl.city = null;
	}
}])
   
.controller('page2Ctrl', ['$scope', '$stateParams', '$http', 
// don't forget fucking commas/brackets here
function ($scope, $stateParams, $http) {
	
	appid = '6405adcf2ed2c2335e1d27e990497eb2';

	city = $stateParams.city;
	
	url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + appid + "&units=metric"

	$http.get(url).then(function(response) {
		
		$scope.cityname = response.data.name;
		$scope.temperature = response.data.main.temp;
		$scope.commentary = response.data.weather[0].description;
		$scope.icon = response.data.weather[0].icon;
		
		}, function(error) {
			alert("unable to retrieve weather");
		});
}])
 