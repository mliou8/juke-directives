app.directive('doubleClick', function (PlayerFactory) {
    return {
        restrict: 'A',
        scope: {
            twoClicks: '='
        },
        link: function (scope, element) {
            element.on('dblclick', function () {
                PlayerFactory.start(scope.song);
            });
        }
    };
});