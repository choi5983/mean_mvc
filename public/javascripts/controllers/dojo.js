myApp.controller('DojoController', function($scope, FriendsFactory){
	$scope.friends = FriendsFactory.getFriends();
	$scope.friends = FriendsFactory.updateFriends();
	$scope.addUser = function(){
		FriendsFactory.addUser($scope.new_user);
	}
});