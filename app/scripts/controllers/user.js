'use strict';

/**
 * @ngdoc function
 * @name geomsgApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the geomsgApp
 */
  app.controller('UserCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.users = []

    var getUsers = function() {
	    $http.get("/api/users.json").
	    	success(function(data){
	    		$scope.users = data
	    		console.log(data)
	    	}).error(function(data){
	    		console.log("error")
	    	})
    }

    getUsers()


  }]);
