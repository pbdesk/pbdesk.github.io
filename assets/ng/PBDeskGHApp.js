/// <reference path="../js/PBDeskUtils.js" />

var PBDeskGHAppName = 'PBDeskGHApp';
(function () {
    'use strict';

    var id = 'PBDeskGHApp';

    // TODO: Inject modules as needed.
    var PBDeskGHApp = angular.module('PBDeskGHApp', [
        'ngAnimate', 'ngRoute', 'ngResource', 'ngSanitize',   //Angular Apps
        'ui.bootstrap', 'jmdobry.angular-cache',            // 3rd Party Apps
        'GoogleFeedsApp', 'DataSvcApp', 'PBDeskHelperApp'                                          // PBDesk Supporting Apps
        
    ]);

    // Execute bootstrapping code and any dependencies.
    // TODO: inject services as needed.
    PBDeskGHApp.run(['$q', '$rootScope', '$location', 'Sitemap',
    function ($q, $rootScope, $location, Sitemap) {
            $rootScope.SetActiveNav = function (navId) {
                var currentNavItem = '#navItem' + navId;
                $('[id^=navItem]').removeClass('active');
                $('#navItem' + navId).addClass('active');
            };

            $rootScope.SetPgTitle = function (ttl) {
                document.title = PBDeskJS.StrUtils.Format("PBDesk - {0} | from the desk of Pinal Bhatt!", ttl);
            }

            $rootScope.GetBreadcrumb = function(){
                var url = $location.url();
                var items = url.split("/");
                var crumbs = [];
                if (items.length > 0) {
                    $.each(items, function (index, value) {
                        if (value === '') {
                            crumbs[index] = Sitemap["Root"];
                        }
                        else {
                            crumbs[index] = Sitemap[value];
                        }
                    });
                }
                
                return crumbs;
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
                    abstract: 'Blended Learning Pathway',
                    faIcon: 'laptop',
                    ngFolder: 'eLearning',
                    controller: 'eLearningController',
                    view: 'eLearning.html',

                    eBooks: {
                        id: 'ebooks',
                        url: '/eLearning/eBooks',
                        pgTitle: 'eBooks',
                        caption: 'eBooks',
                        abstract: 'one of the basic source of Knowledge now in digital formats called "eBooks"',
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
                        abstract: 'Free online tutorials and videos for self learning technology concepts.',
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
                        abstract: 'Free Videos and Presentations on verious technology topics.',
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
                        abstract: 'Learn verious technology conecpts, topic by topic - one card at a time, with our Flash Cards!',
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