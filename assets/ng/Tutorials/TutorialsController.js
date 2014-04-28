﻿(function () {
    'use strict';

    var controllerId = 'TutorialsController';

    // TODO: replace app with your module name
    angular.module(PBDeskGHAppName).controller(controllerId,
        ['$scope', '$rootScope', 'Sitemap', TutorialsController]);

    function TutorialsController($scope,$rootScope, Sitemap) {
        var sitemapNode = Sitemap.eLearning;
        $rootScope.SetActiveNav(sitemapNode.id);
        $scope.$on('$routeChangeSuccess', function () {
            $rootScope.SetActiveNav(sitemapNode.id);
        });
    }
})();