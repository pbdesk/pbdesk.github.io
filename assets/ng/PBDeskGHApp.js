var PBDeskGHAppName = 'PBDeskGHApp';
(function () {
    'use strict';

    var id = 'PBDeskGHApp';

    // TODO: Inject modules as needed.
    var PBDeskGHApp = angular.module('PBDeskGHApp', [
        'ngAnimate', 'ngRoute', 'ngResource'
        
    ]);

    // Execute bootstrapping code and any dependencies.
    // TODO: inject services as needed.
    PBDeskGHApp.run(['$q', '$rootScope',
        function ($q, $rootScope) {

        }]);

    

    PBDeskGHApp.constant('Sitemap',
        {
            Root:
                {
                    id: 'home',
                    url: '/',
                    pgTitle: 'Welcome',
                    caption: 'PBDesk',
                    faIcon: 'home',
                    ngFolder:  'home',
                    controller: 'HomeController',
                    view:  'home.html'
                },
            TechNews:
                {
                    id: 'technews',
                    url: '/TechNews',
                    pgTitle: 'TechNews',
                    caption: 'TechNews',
                    faIcon: 'info',
                    ngFolder: 'news',
                    controller: 'NewsController',
                    view: 'news.html'
                },
            Articles:
                {
                    id: 'articles',
                    url: '/Articles',
                    pgTitle: 'Articles',
                    caption: 'Articles',
                    faIcon: 'file-text',
                    ngFolder: 'articles',
                    controller: 'ArticlesController',
                    view: 'articles.html'
                }

        });

    PBDeskGHApp.config(['$routeProvider', 'Sitemap', function ($routeProvider, Sitemap) {

        $routeProvider
            .when(Sitemap.Root.url, { controller: Sitemap.Root.controller, templateUrl: NGViewPath(Sitemap.Root) })

            .when(Sitemap.TechNews.url, { controller: Sitemap.TechNews.controller, templateUrl: NGViewPath(Sitemap.TechNews), caseInsensitiveMatch: true })
            //.when('/Locales/Create', { controller: 'LocalesController', templateUrl: viewPath + 'locales/edit.html' })
            //.when('/Locales/Edit/:Id', { controller: 'LocalesController', templateUrl: viewPath + 'locales/edit.html' })

            .when(Sitemap.Articles.url, { controller: Sitemap.Articles.controller, templateUrl: NGViewPath(Sitemap.Articles), caseInsensitiveMatch: true })
            //.when('/Builds/Create', { controller: 'BuildsController', templateUrl: viewPath + 'builds/edit.html' })
            //.when('/Builds/Edit/:Id', { controller: 'BuildsController', templateUrl: viewPath + 'builds/edit.html' })

            //.when('/Projects', { controller: 'ProjectsController', templateUrl: viewPath + 'projects/list.html' })
            //.when('/Projects/Create', { controller: 'ProjectsController', templateUrl: viewPath + 'projects/edit.html' })
            //.when('/Projects/Edit/:Id', { controller: 'ProjectsController', templateUrl: viewPath + 'projects/edit.html' })

            .otherwise({ redirectTo: '/' });

    }]);

    function NGViewPath(node) {
        return '/assets/ng/' + node.ngFolder + '/' + node.view;
    }
})();