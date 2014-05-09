(function () {
    'use strict';

    var controllerId = 'NewTutorialsController';

    // TODO: replace app with your module name
    angular.module(PBDeskGHAppName).controller(controllerId,
        ['$scope', '$rootScope', 'Sitemap', 'DataSvcObjects', 'DSFactory', NewTutorialsController]);

    function NewTutorialsController($scope, $rootScope, Sitemap, DataSvcObjects, DSFactory) {
        $rootScope.SitemapWork(Sitemap.Tutorials_New, $scope);

        $scope.FeaturedCourses = {};
        DSFactory.GetData(DataSvcObjects.Courses_Featured)
            .then(function (result) {
                $scope.FeaturedCourses = result;
            }, function (reason) {
                alert("Error making Data Api calls. Please try again later.");
            })
            .finally(function () {

            });

        $scope.$on('$routeChangeSuccess', function () {
            $rootScope.SetActiveNav($scope.SitemapNodeBase.id);
        });
    }
})();
