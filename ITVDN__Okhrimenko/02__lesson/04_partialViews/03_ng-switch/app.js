var myApp = angular.module('myApp', []);

myApp.controller('myAppCtrl', function($scope) {

	$scope.options = [
		{name: 'Fill Murray', value: 'murray'},
		{name: 'Place Cage', value: 'cage'},
		{name: 'Steven SeGALLERY', value: 'segall'}
	];

	$scope.selected = $scope.options[0];


});