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
	create: function(req, res){
		var a = new User(req.body);
		a.save(function(err){
			if(err){
				res.send(JSON.stringify(err));
			}
			else
			{
				res.send('success');
			}
		});
	},

	show: function(req, res){
		res.render('./../app/views/users/show', {title:'Welcome Page'});
	},

	edit: function(req, res){
		res.render('./../app/views/users/edit', {title:'Welcome Page'});
	}
}