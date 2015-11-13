var Restaurant = require('../models/restaurant');

module.exports = function(app) {
	app.get('/restaurants', function (req, res) {
        var options = {
            "limit": 10,
        }
        Restaurant.find({}, {}, options, function (err, passport) {
        	if (err) {
                return res.send(err);
            }
            return res.json(restaurant);
        });
	});
}