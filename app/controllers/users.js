var mongoose = require('mongoose'),
	User = mongoose.model('User');

module.exports = {

	index: function(req, res){
		res.render('./../app/views/users/index', {title:'Welcome Page'});
	},
	index_json: function(req, res){	
		User.find({}, function(err, results){
			res.send(JSON.stringify(results));
		});
	},

	show: function(req, res){
		res.render('./../app/views/users/show', {title:'Welcome Page'});
	},

	new: function(req, res){
		var user1 = new User();
		user1.name = 'Speros';
		user1.email = 'speros@codingdojo.com';
		user1.height = 'short';
		user1.save();
		
		console.log('USER 1 INFO', user1);

		res.render('./../app/views/users/new', {title:'Welcome Page'});
	},

	edit: function(req, res){
		res.render('./../app/views/users/edit', {title:'Welcome Page'});
	}
}