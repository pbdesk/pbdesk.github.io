

(function () {
    'use strict';

    var controllerId = 'HomeController';

    // TODO: replace app with your module name
    angular.module(PBDeskGHAppName).controller(controllerId,
        ['$scope', HomeController]);

    function HomeController($scope) {
        $scope.title = 'HomeController';
        $scope.activate = activate;

        function activate() { }
    }
})();
