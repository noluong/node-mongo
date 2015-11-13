var app = angular.module('NolaApp', [
	'ui.router',
	'ngSanitize',
	'appRoutes',
	'appDirectives',
	'appFilters',
	'appServices',
	'MainCtrl',
	'RestaurantCtrl',
	'RestaurantService'
]);
