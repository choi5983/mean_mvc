myApp.factory('FriendsFactory', function($http){
	var friends;

	var factory = {};
	factory.getFriends = function(){
		return friends;
	}
	factory.addUser = function(user){
		friends.push({
			name: user.name,
			email: user.email
		});
	}
	factory.updateFriends = function(){
		$http({method: 'GET', url: '/users/index.json'}).
	    success(function(data, status, headers, config) {
	      friends = data;
	      return friends;
	    }).
	    error(function(data, status, headers, config) {
	      // called asynchronously if an error occurs
	      // or server returns response with an error status.
	   });
	}

	return factory;
})