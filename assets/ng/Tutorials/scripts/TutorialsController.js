(function () {
    'use strict';

    var controllerId = 'TutorialsController';

    // TODO: replace app with your module name
    angular.module(PBDeskGHAppName).controller(controllerId,
        ['$scope', '$rootScope', 'Sitemap', 'DSFactory', TutorialsController]);

    function TutorialsController($scope, $rootScope, Sitemap, DSFactory) {
        $scope.SitemapNode = Sitemap.Tutorials;
        $scope.SitemapNodeParent = $rootScope.GetSitemapNodeParent($scope.SitemapNode)
        $rootScope.SetActiveNav($scope.SitemapNodeParent.id);
        $rootScope.SetPgTitle($scope.SitemapNode.pgTitle);

        $scope.FeaturedCourses = {};
        DSFactory.GetData({ ApiUrl: 'Featured/Courses', CacheKey: 'featuredCourses', AllowCache:false })
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
