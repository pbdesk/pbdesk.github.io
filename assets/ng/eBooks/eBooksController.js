(function () {
    'use strict';

    var controllerId = 'eBooksController';

    // TODO: replace app with your module name
    angular.module(PBDeskGHAppName).controller(controllerId,
        ['$scope', '$rootScope', 'Sitemap', eBooksController]);

    function eBooksController($scope, $rootScope, Sitemap) {
        $rootScope.SitemapWork(Sitemap.eBooks, $scope);

        $scope.$on('$routeChangeSuccess', function () {
            $rootScope.SetActiveNav($scope.SitemapNodeBase.id);
        });
    }
})();
