var path = require('path');
var userData = require('../data/friends.js');
var bodyParser = require('body-parser');

module.exports = function(app) {

	app.get("/api/friends", function(req,res) {
		res.json(userData);
	});

    app.post("/api/friends", function (req, res){
        userData.push(req.body);
        res.json(userData);
    });

};