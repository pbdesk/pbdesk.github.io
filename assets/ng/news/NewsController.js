
(function () {
    'use strict';

    var controllerId = 'NewsController';

    // TODO: replace app with your module name
    angular.module(PBDeskGHAppName).controller(controllerId,
        ['$scope', '$rootScope', 'Sitemap', NewsController]);

    function NewsController($scope, $rootScope, Sitemap) {
        var sitemapNode = Sitemap.TechNews;
        $scope.$on('$routeChangeSuccess', function () {
            $rootScope.SetActiveNav(sitemapNode.id);
        });
    }
})();
