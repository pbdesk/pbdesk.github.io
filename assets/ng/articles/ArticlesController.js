(function () {
    'use strict';

    var controllerId = 'ArticlesController';

    // TODO: replace app with your module name
    angular.module(PBDeskGHAppName).controller(controllerId,
        ['$scope', 'Sitemap', ArticlesController]);

    function ArticlesController($scope, Sitemap) {
        var sitemapNode = Sitemap.Articles;


        $scope.$on('$routeChangeSuccess', function () {
            var currentNavItem = '#navItem' + sitemapNode.id;
            $('[id^=navItem]').removeClass('active');
            $('#navItem' + sitemapNode.id).addClass('active');
        });
    }
})();
