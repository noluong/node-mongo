angular.module('RestaurantService', [])
	.factory('Restaurant', ['$http', function($http){
		return {
			//call to get all restaurants
			get: function(){
				return $http.get('/restaurant');
			},
			edit: function(formData){
				return $http.post('/restaurant', formData);
			},
			delete: function(id){
				return $http.delete('/restaurant'+id);
			}
		}
	}]);