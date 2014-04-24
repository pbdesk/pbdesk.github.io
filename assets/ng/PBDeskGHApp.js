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
            $rootScope.SetActiveNav = function(navId){
                var currentNavItem = '#navItem' + navId;
                $('[id^=navItem]').removeClass('active');
                $('#navItem' + navId).addClass('active');
            }
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
                },
            eLearning:
                {
                    id: 'elearning',
                    url: '/eLearning',
                    pgTitle: 'eLearning',
                    caption: 'eLearning',
                    faIcon: 'laptop',
                    ngFolder: 'eLearning',
                    controller: 'eLearningController',
                    view: 'elearning.html',

                    eBooks: {
                        id: 'ebooks',
                        url: '/eLearning/eBooks',
                        pgTitle: 'eBooks',
                        caption: 'eBooks',
                        faIcon: 'book',
                        ngFolder: 'eBooks',
                        controller: 'eBooksController',
                        view: 'ebooks.html'
                    },
                    Tutorials: {
                        id: 'elearning',
                        url: '/eLearning/Tutorials',
                        pgTitle: 'Tutorials',
                        caption: 'Tutorials',
                        faIcon: 'laptop',
                        ngFolder: 'Tutorials',
                        controller: 'TutorialsController',
                        view: 'tutorials.html'
                    },
                    Videos: {
                        id: 'elearning',
                        url: '/eLearning',
                        pgTitle: 'eLearning',
                        caption: 'Videos',
                        faIcon: 'film',
                        ngFolder: 'eLearning',
                        controller: 'eLearningController',
                        view: 'elearning.html'
                    },
                    FlashCards: {
                        id: 'elearning',
                        url: '/eLearning',
                        pgTitle: 'eLearning',
                        caption: 'Flash Cards',
                        faIcon: 'tablet',
                        ngFolder: 'eLearning',
                        controller: 'eLearningController',
                        view: 'elearning.html'
                    }


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

            .when(Sitemap.eLearning.url, { controller: Sitemap.eLearning.controller, templateUrl: NGViewPath(Sitemap.eLearning), caseInsensitiveMatch: true })
            .when(Sitemap.eLearning.eBooks.url, { controller: Sitemap.eLearning.eBooks.controller, templateUrl: NGViewPath(Sitemap.eLearning.eBooks), caseInsensitiveMatch: true })
            .when(Sitemap.eLearning.Tutorials.url, { controller: Sitemap.eLearning.Tutorials.controller, templateUrl: NGViewPath(Sitemap.eLearning.Tutorials), caseInsensitiveMatch: true })
            //.when('/Projects/Edit/:Id', { controller: 'ProjectsController', templateUrl: viewPath + 'projects/edit.html' })

            .otherwise({ redirectTo: '/' });

    }]);

    function NGViewPath(node) {
        return '/assets/ng/' + node.ngFolder + '/' + node.view;
    }
})();