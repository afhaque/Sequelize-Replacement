// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Chirp = require("../models/chirp.js")


// Routes
// =============================================================
module.exports = function(app){

	// Get all chirps
	app.get('/api/all', function(req, res){

		Chirp.findAll().then(function(results) {
      res.json(results)
    });

	});

	// Add a chirp
	app.post('/api/new', function(req, res){

		console.log("Chirp Data:")
		console.log(req.body)

		Chirp.create({
      author: req.body.author,
      body: req.body.body,
      created_at: req.body.created_at
    });

    res.end()

	});

}
