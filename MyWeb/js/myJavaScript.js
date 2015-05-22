
var app = angular.module('myApp', []);
    app.controller('MyController', ['$scope', function ($scope) {
        $scope.greetMe = 'World';
		$scope.firstName = '';
		$scope.lastName = '';
		$scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
		}
		$scope.setName = function(firstName,lastName) {
        $scope.firstName = firstName;
		$scope.lastName = lastName;
		}
      }]);