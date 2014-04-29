(function () {
    'use strict';

    var controllerId = 'eLearningController';

    // TODO: replace app with your module name
    angular.module(PBDeskGHAppName).controller(controllerId,
        ['$scope', '$rootScope', 'Sitemap', eLearningController]);

    function eLearningController($scope, $rootScope, Sitemap) {
        var sitemapNode = Sitemap.eLearning;
        $rootScope.SetPgTitle(sitemapNode.pgTitle);
        $scope.SitemapNode = Sitemap.eLearning;
        $scope.OneAtATime = false;
        $scope.AccordionGroups = [
            {
                title: "Featured eBooks",
                content: "<ng-include src=\"'/assets/ng/eBooks/featured.html'\"></ng-include>"
            },
            {
                title: "Featured Courses",
                content: "Dynamic Group Body - 1"
            },
            {
                title: "Featured Videos",
                content: "Dynamic Group Body - 1"
            },
            {
                title: "Featured Flash Card Decks",
                content: "Dynamic Group Body - 1"
            }
        ];

        $scope.$on('$routeChangeSuccess', function () {
            $rootScope.SetActiveNav(sitemapNode.id);
        });

        
    }
})();
