

(function () {
    'use strict';

    var controllerId = 'HomeController';

    // TODO: replace app with your module name
    angular.module(PBDeskGHAppName).controller(controllerId,
        ['$scope', 'Sitemap', HomeController]);

    function HomeController($scope, Sitemap) {
        $scope.title = 'HomeController';
        $scope.activate = activate;
        $scope.Sitemap = Sitemap;

        
        

        function activate() { }

        $scope.$on('$routeChangeSuccess', function () {
            $('[id^=navItem]').removeClass('active');
        });

       
    }
})();
