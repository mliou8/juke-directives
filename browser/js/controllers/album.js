app.controller('AlbumCtrl', function ($scope, PlayerFactory, theAlbum) {

	$scope.album = theAlbum;
	//$scope.songs = theAlbum.songs;


	$scope.generateMailTo = function () {
		if (!$scope.album) return;
		var link = 'Check out this groovy album: http://localhost:1337/#/albums/' + $scope.album._id;
		return 'mailto:?subject=' + $scope.album.name + '&body=' + link;
	};

});