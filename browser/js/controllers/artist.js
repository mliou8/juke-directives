app.controller('ArtistCtrl', function ($scope, PlayerFactory, theArtist) {
	
	$scope.artist = theArtist;
	$scope.songs = theArtist.songs;

	$scope.isCurrent = function (song) {
		var current = PlayerFactory.getCurrentSong();
		return current && current._id == song._id;
	};
	$scope.start = function (song) {
		PlayerFactory.start(song, theArtist.songs);
	};

});