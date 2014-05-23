myApp.controller('DojoController', function($scope, FriendsFactory){
	FriendsFactory.getFriends(function(friends){
		$scope.friends = friends;
	});

	$scope.addUser = function(){
		FriendsFactory.addUser($scope.new_user, function(err){
			$scope.errors = err;
		});
	}
});