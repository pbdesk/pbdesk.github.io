(function () {
    'use strict';

    var controllerId = 'TutorialsController';

    // TODO: replace app with your module name
    angular.module(PBDeskGHAppName).controller(controllerId,
        ['$scope', '$rootScope', 'Sitemap', 'DataSvcObjects', 'DSFactory', TutorialsController]);

    function TutorialsController($scope, $rootScope, Sitemap, DataSvcObjects, DSFactory) {
        $rootScope.SitemapWork(Sitemap.Tutorials, $scope);
        //$scope.SitemapNode = Sitemap.Tutorials;
        //$scope.SitemapNodeParent = $rootScope.GetSitemapNodeParent($scope.SitemapNode)
        $rootScope.SetActiveNav($scope.SitemapNodeParent.id);
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
            $rootScope.SetActiveNav($scope.SitemapNodeParent.id);
        });
    }
})();
