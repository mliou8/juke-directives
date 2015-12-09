app.directive('doubleClick', function () {
    return {
        restrict: 'A',
        scope: {
            twoClicks: '&'
        },
        link: function (scope, element, attrs) {\
            element.on('dblclick', function (e) {
                scope.twoClicks();
            });
        }
    };
});