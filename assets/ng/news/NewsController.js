
(function () {
    'use strict';

    var controllerId = 'NewsController';

    // TODO: replace app with your module name
    angular.module(PBDeskGHAppName).controller(controllerId,
        ['$scope', NewsController]);

    function NewsController($scope) {
        $scope.title = 'NewsController';
        $scope.activate = activate;

        function activate() { }
    }
})();
