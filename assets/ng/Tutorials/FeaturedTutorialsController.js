(function () {
    'use strict';

    var controllerId = 'FeaturedTutorialsController';

    // TODO: replace app with your module name
    angular.module(PBDeskGHAppName).controller(controllerId,
        ['$scope', '$rootScope', 'Sitemap', 'DSFactory', FeaturedTutorialsController]);

    function FeaturedTutorialsController($scope, $rootScope, Sitemap, DSFactory) {
        $scope.SitemapNode = Sitemap.Tutorials_Featured;
        $scope.SitemapNodeParent = $rootScope.GetSitemapNodeParent($scope.SitemapNode)
        $rootScope.SetActiveNav($scope.SitemapNodeParent.id);
        $rootScope.SetPgTitle($scope.SitemapNode.pgTitle);

        $scope.FeaturedCourses = {};
        DSFactory.GetData({ apiUrl: 'Featured/Courses', CacheKey: 'featuredCourses' })
            .then(function (result) {
                $scope.FeaturedCourses = result;
            }, function (reason) {
                alert("Error making Data Api calls. Please try again later.");
            })
            .finally(function () {

            });

        $scope.Crumbs = $rootScope.GetCrumbsFromCurrentNode($scope.SitemapNode);
            




        $scope.$on('$routeChangeSuccess', function () {
            $rootScope.SetActiveNav($scope.SitemapNodeParent.id);
        });
    }
})();
