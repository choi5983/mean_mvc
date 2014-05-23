var users = require('./../app/controllers/users.js');

module.exports = function Routes(app){
	app.get('/', function(req,res) { users.index(req,res) });
	app.get('/users', function(req,res) { users.index(req,res) });
	app.get('/users/index.json', function(req,res) { users.index_json(req,res) });
	app.get('/users/new', function(req,res) { users.new(req,res) });
	app.post('/users/create', function(req,res) { users.create(req,res) });
	app.get('/users/:id', function(req,res) { users.show(req,res) });
	app.get('/users/:id/edit', function(req,res) { users.edit(req,res) });

	app.post('/users/newUser_json', function(req,res) { users.newUser_json(req,res) });
	
};
