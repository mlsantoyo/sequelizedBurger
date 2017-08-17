var db = require('../models');

module.exports = function(app){

app.get('/burgers', function(req,res){
	db.Burger.findAll({}).then(function(burger_data){
		console.log(burger_data);
		res.render('index', {burger_data});
	
	});
	 	
});

app.put('/burgers/devour', function(req, res){
	db.Burger.update({devoured: true},
	{
		where: {id: req.params.id}
		
	}).then(function(results){
		res.json(results);
	});
});	

app.post('/burgers/newBurger', function(req, res) {
	db.Burger.create({
		burger_name: req.body.burger_name
	}).then(function(newBurger){
		res.json(newBurger);
	});
		
		res.redirect('/');
});

}


		

