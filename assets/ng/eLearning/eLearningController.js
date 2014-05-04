(function () {
    'use strict';

    var controllerId = 'eLearningController';

    // TODO: replace app with your module name
    angular.module(PBDeskGHAppName).controller(controllerId,
        ['$scope', '$rootScope', 'Sitemap', eLearningController]);

    function eLearningController($scope, $rootScope, Sitemap) {
        $scope.SitemapNode = Sitemap.eLearning;
        $scope.SitemapNodeParent = $rootScope.GetSitemapNodeParent($scope.SitemapNode);
        $scope.SitemapNodeChildren = $rootScope.GetSitemapNodeChildren($scope.SitemapNode);
        $rootScope.SetActiveNav($scope.SitemapNode.id);
        $rootScope.SetPgTitle($scope.SitemapNode.pgTitle);

        $.each($scope.SitemapNodeChildren, function (index, value) {
            switch (index) {
                case 0: { $scope.SitemapNodeChildren[index].colorcode = 'warning'; break; }
                case 1: { $scope.SitemapNodeChildren[index].colorcode = 'danger'; break; }
                case 2: { $scope.SitemapNodeChildren[index].colorcode = 'success'; break; }
                case 3: { $scope.SitemapNodeChildren[index].colorcode = 'info'; break; }
                default: { $scope.SitemapNodeChildren[index].colorcode = 'success'; break; }
            }
            
        });


        $scope.$on('$routeChangeSuccess', function () {
            $rootScope.SetActiveNav($scope.SitemapNode.id);
        });

        
    }
})();
