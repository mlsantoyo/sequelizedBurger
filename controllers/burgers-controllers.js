var express = require('express');
var router = express.Router();
var db = require('../models');
var path = require('path');


router.get('/', function(req,res){
	db.Burger.findAll({}).then(function(burger_data){
		console.log(burger_data);
		res.render('index', {burger_data});
	
	});
	 	
});

router.post('/burgers/devour', function(req, res){
	console.log(req.body);
	db.Burger.update({devoured: true},
	{
		where: {id: req.body.burger_id}
		
	}).then(function(devour){
		res.redirect('/');
	});
});	

router.post('/burgers/newBurger', function(req, res) {
	db.Burger.create({
		burger_name: req.body.burger_name
	}).then(function(newBurger){
		res.redirect('/');
	});
		
		
});

// Export routes for server.js to use.
  module.exports = router;
