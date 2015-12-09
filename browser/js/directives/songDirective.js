app.directive('songList', function (PlayerFactory) {
	return {
		restrict: 'E',
		scope:{
			songs:"=",
		},
		templateUrl: 'templates/songs.html',
		link: function (scope) {
			scope.isCurrent = function (song) {
				var current = PlayerFactory.getCurrentSong();
				return current && current._id == song._id;
			};
			scope.start = function (song) {
				PlayerFactory.start(song, scope.songs);
			};
		}
	};
});