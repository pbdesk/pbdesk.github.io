(function () {
    'use strict';

    var controllerId = 'eBooksController';

    // TODO: replace app with your module name
    angular.module(PBDeskGHAppName).controller(controllerId,
        ['$scope', '$rootScope', 'Sitemap', eBooksController]);

    function eBooksController($scope, $rootScope, Sitemap) {
        $scope.SitemapNode = Sitemap.eBooks;
        $scope.SitemapNodeParent = $rootScope.GetSitemapNodeParent($scope.SitemapNode)
        $rootScope.SetActiveNav($scope.SitemapNodeParent.id);        
        $rootScope.SetPgTitle($scope.SitemapNode.pgTitle);
        $scope.Crumbs = $rootScope.GetCrumbsFromCurrentNode($scope.SitemapNode);
        
        $scope.$on('$routeChangeSuccess', function () {
            $rootScope.SetActiveNav($scope.SitemapNodeParent.id);
        });
    }
})();
