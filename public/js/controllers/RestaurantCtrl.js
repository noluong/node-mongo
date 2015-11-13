angular.module('RestaurantCtrl', [])
	.controller('RestaurantController',['$scope', '$state','Restaurant', function($scope, $state, Restaurant) {
		Restaurant.get().success(function(data){
			console.log(data);
			$scope.restaurants = data;
		});
	}])
