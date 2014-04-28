(function () {
    'use strict';

    var controllerId = 'eLearningController';

    // TODO: replace app with your module name
    angular.module(PBDeskGHAppName).controller(controllerId,
        ['$scope', '$rootScope', 'Sitemap', eLearningController]);

    function eLearningController($scope, $rootScope, Sitemap) {
        var sitemapNode = Sitemap.eLearning;

        $scope.SitemapNode = Sitemap.eLearning;


        $scope.$on('$routeChangeSuccess', function () {
            $rootScope.SetActiveNav(sitemapNode.id);
        });
    }
})();
