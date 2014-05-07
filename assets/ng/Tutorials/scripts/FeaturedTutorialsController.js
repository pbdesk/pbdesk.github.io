(function () {
    'use strict';

    var controllerId = 'FeaturedTutorialsController';

    // TODO: replace app with your module name
    angular.module(PBDeskGHAppName).controller(controllerId,
        ['$scope', '$rootScope', 'Sitemap', 'DataSvcObjects', 'DSFactory', FeaturedTutorialsController]);

    function FeaturedTutorialsController($scope, $rootScope, Sitemap,DataSvcObjects, DSFactory) {
        $scope.SitemapNode = Sitemap.Tutorials_Featured;
        $scope.SitemapBaseNode = $rootScope.GetSitemapBaseNode($scope.SitemapNode)
        $rootScope.SetActiveNav($scope.SitemapBaseNode.id);
        $rootScope.SetPgTitle($scope.SitemapNode.pgTitle);

        $scope.FeaturedCourses = {};
        DSFactory.GetData(DataSvcObjects.Courses_Featured)
            .then(function (result) {
                $scope.FeaturedCourses = result;
            }, function (reason) {
                alert("Error making Data Api calls. Please try again later.");
            })
            .finally(function () {

            });

        $scope.Crumbs = $rootScope.GetCrumbsFromCurrentNode($scope.SitemapNode);
            




        $scope.$on('$routeChangeSuccess', function () {
            $rootScope.SetActiveNav($scope.SitemapBaseNode.id);
        });
    }
})();
