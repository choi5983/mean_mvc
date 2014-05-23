myApp.factory('FriendsFactory', function($http){
	var friends;

	var factory = {};
	
	factory.addUser = function(user, err_callback){
		
		$http.post('/users/create', user).success(function(data, status, headers, config) {
		  console.log('data is', data);
		  if(data=='success')
	      {
			friends.push({
				name: user.name,
				email: user.email
			});
	      	friends = data;
	      }
	      else
	      {
	      	err_callback(data.errors);
	      }
		});
	}
	factory.getFriends = function(callback){
		$http.get('/users/index.json').
	    success(function(data, status, headers, config) {
	      callback(data);
	      friends = data;
	    });
	 }

	return factory;
})