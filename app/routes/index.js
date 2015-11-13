var restaurant = require('./restaurant');

var mongoose = require('mongoose');

module.exports = function (app) {
	restaurant(app);

	//Tất cả request phải đi qua trang index.html để xử lý.
	app.get('*', function(req, res){
		res.sendfile('public/index.html');
	});
};