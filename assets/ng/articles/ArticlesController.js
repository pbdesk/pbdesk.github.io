﻿(function () {
    'use strict';

    var controllerId = 'ArticlesController';

    // TODO: replace app with your module name
    angular.module(PBDeskGHAppName).controller(controllerId,
        ['$scope', '$rootScope', 'Sitemap', ArticlesController]);

    function ArticlesController($scope, $rootScope,Sitemap) {
        var sitemapNode = Sitemap.Articles;
        $scope.$on('$routeChangeSuccess', function () {
            $rootScope.SetActiveNav(sitemapNode.id);
        });
    }
})();
