(function () {
    'use strict';

    var controllerId = 'eBooksController';

    // TODO: replace app with your module name
    angular.module(PBDeskGHAppName).controller(controllerId,
        ['$scope', '$rootScope', 'Sitemap', eBooksController]);

    function eBooksController($scope, $rootScope, Sitemap) {
        var sitemapNode = Sitemap.eLearning;
        var sitemapSubNode = Sitemap.eLearning.eBooks;
        $rootScope.SetActiveNav(sitemapNode.id);
        $scope.$on('$routeChangeSuccess', function () {
            $rootScope.SetActiveNav(sitemapNode.id);
        });
    }
})();
