var myApp = angular.module('myApp', []);

myApp.controller('myAppCtrl', function($scope) {

	$scope.batman = 'batman.html';
	$scope.superman = 'superman.html';

	$scope.url = $scope.batman;

	$scope.showBatman = function() {
		$scope.url = $scope.batman;		
	}

	$scope.showSuperman = function() {
		$scope.url = $scope.superman;		
	}

});