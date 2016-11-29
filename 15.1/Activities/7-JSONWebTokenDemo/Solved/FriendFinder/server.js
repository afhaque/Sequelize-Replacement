/* Json Web Token Demonstration
 * -/-/-/-/-/-/-/-/-/-/-/-/-/-/ */

/* 
 * Steps to get JWT working
 * 	1. require jsonwebtoken
 		2. add a route for auth-routes.js
 		3. 
 *
 * =========================== */




// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');




// IMPORTANT #1
// ============
// we add in JWT here.
var jwt  = require('jsonwebtoken'); // JSON Web Token Package for authentication







// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server 
// ==============================================================================

var app = express(); 
var PORT = process.env.PORT || 80; 



// IMPORTANT #2
// ============

// Sets JSON Web Token Secret for Encryption
app.set('jwtSecret', "CODINGROCKS"); // Can put anything in here



// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));







// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs. 
// ================================================================================


// IMPORTANT #3
// ============

// By placing the auth-routes before api-routes, 
// we stop users from going to any api sections
// if they haven't passed the threshold of auth-routes.
require('./app/routing/html-routes.js')(app);
require('./app/routing/auth-routes.js')(app); 
require('./app/routing/api-routes.js')(app); 








// ==============================================================================
// LISTENER
// The below code effectively "starts" our server 
// ==============================================================================

var PORT = 8000;
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});