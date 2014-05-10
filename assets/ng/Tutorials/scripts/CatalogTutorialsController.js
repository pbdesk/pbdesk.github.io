(function () {
    'use strict';

    var controllerId = 'CatalogTutorialsController';

    // TODO: replace app with your module name
    angular.module(PBDeskGHAppName).controller(controllerId,
        ['$scope', '$rootScope', 'Sitemap', 'DataSvcObjects', 'DSFactory', CatalogTutorialsController]);

    function CatalogTutorialsController($scope, $rootScope, Sitemap, DataSvcObjects, DSFactory) {
        $rootScope.SitemapWork(Sitemap.Tutorials_Catalog, $scope);

        $scope.Catalog = {};
        DSFactory.GetData(DataSvcObjects.Courses_Catalog)
            .then(function (result) {
                $scope.Catalog = result;
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
