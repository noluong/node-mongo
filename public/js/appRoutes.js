angular.module('appRoutes',[]).config(['$stateProvider', '$urlRouterProvider','$locationProvider',
	function($stateProvider, $urlRouterProvider,$locationProvider){
	
	/*Thiết lập các state*/
	$stateProvider
	.state('home', {
		url: "/",
		templateUrl: "views/public/home.html",
		controller: 'MainController'
	})
	.state('restaurant', {
		url: "/restaurant",
		templateUrl: "views/public/restaurant.html",
		controller: 'RestaurantController'
	});
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
	$locationProvider.hashPrefix('!');
}]);