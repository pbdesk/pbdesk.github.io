﻿/// <reference path="../js/PBDeskUtils.js" />

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

        $rootScope.GetSitemapNodeParent = function (currentNode) {
            var parent = null;
            if (currentNode != null && currentNode.parent != null && Sitemap[currentNode.parent] != null) {
                parent = Sitemap[currentNode.parent];
            }
            return parent;
        }

        $rootScope.GetSitemapBaseNode = function (currentNode) {
            var parent = null;
            var current = currentNode;
            if (current != null) {
                while (current.parent !== 'Root') {
                    current = Sitemap[current.parent]
                }
                if (current != null && current.parent === 'Root') {
                    parent = current;
                }
            }
            return parent;
        }

        $rootScope.GetSitemapNodeChildren = function (currentNode) {
            var children = [];
            var counter = 0;
            if (currentNode != null && currentNode.children != null && currentNode.children.length > 0) {
                $.each(currentNode.children, function (index, value) {
                    if(Sitemap[value] != null ){
                        children[counter] = Sitemap[value];
                        counter++;
                    }
                });
            }
            return children;
        }

        $rootScope.SetActiveNav = function (navId) {
            if (navId != null && navId.length > 0) {
                var currentNavItem = '#navItem' + navId;
                $('[id^=navItem]').removeClass('active');
                $('#navItem' + navId).addClass('active');
            }
        };      
          

            $rootScope.SetPgTitle = function (ttl) {
                document.title = PBDeskJS.StrUtils.Format("PBDesk - {0} | from the desk of Pinal Bhatt!", ttl);
            }

            $rootScope.GetCrumbsFromCurrentNode = function (currentNode) {
                var crumbs = [];
                if (currentNode != null) {
                    var current = currentNode;
                    var counter = 0;
                    do {
                        crumbs[counter] = current;
                        counter++;
                        if (current.parent != null && Sitemap[current.parent] != null) {
                            current = Sitemap[current.parent];
                        }
                        else {
                            current = null;
                        }
                    } while (current != null);
                }
                return crumbs.reverse();
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
                    heading: 'PBDesk',
                    crumbText: 'Home',
                    faIcon: 'home',
                    ngFolder:  'home',
                    controller: 'HomeController',
                    view: 'home.html',
                    parent: null
                },
            TechNews:
                {
                    id: 'technews',
                    url: '/TechNews',
                    pgTitle: 'TechNews',
                    heading: 'TechNews',
                    crumbText: 'TechNews',
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
                    heading: 'Articles',
                    crumbText: 'Articles',
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
                    heading: 'eLearning',
                    subHeading: 'Blended Learning Pathway',
                    crumbText: 'eLearning',
                    faIcon: 'cloud',
                    ngFolder: 'eLearning',
                    controller: 'eLearningController',
                    view: 'eLearning.html',
                    children: ['eBooks', 'Tutorials', 'Videos', 'FlashCards'],
                    parent: 'Root'
                },

            eBooks: 
                {
                    id: 'ebooks',
                    url: '/eLearning/eBooks',
                    pgTitle: 'eBooks',
                    heading: 'eBooks',
                    subHeading: 'basic source of Knowledge now in digital format - "eBooks"',
                    crumbText: 'eBooks',
                    faIcon: 'book',
                    ngFolder: 'eBooks',
                    controller: 'eBooksController',
                    view: 'ebooks.html',
                    children: [],
                    parent: 'eLearning'

                },
            Tutorials: 
                {
                    id: 'tutorials',
                    url: '/eLearning/Tutorials',
                    pgTitle: 'Tutorials',
                    heading: 'Tutorials',
                    subHeading: 'Free online tutorials and videos for self learning technology concepts.',
                    crumbText: 'Tutorials',
                    faIcon: 'laptop',
                    ngFolder: 'Tutorials',
                    controller: 'TutorialsController',
                    view: 'tutorials.html',
                    children: ['Tutorials_Featured', 'Tutorials_New'],
                    parent: 'eLearning'
                },
            Tutorials_Featured:
                {
                    id: 'tutorials_featured',
                    url: '/eLearning/Tutorials/Featured',
                    pgTitle: 'Featured Tutorials',
                    heading: 'Tutorials',
                    subHeading: 'Featured Tutorials',
                    crumbText: 'Featured',
                    faIcon: 'bookmark-o',
                    ngFolder: 'Tutorials',
                    controller: 'FeaturedTutorialsController',
                    view: 'featured.html',
                    children: [],
                    parent: 'Tutorials'
                },
            Tutorials_New:
                {
                    id: 'tutorials_new',
                    url: '/eLearning/Tutorials/New',
                    pgTitle: 'New Tutorials',
                    heading: 'Tutorials',
                    subHeading: 'New Tutorials',
                    crumbText: 'New',
                    faIcon: 'asterisk',
                    ngFolder: 'Tutorials',
                    controller: 'NewTutorialsController',
                    view: 'new.html',
                    children: [],
                    parent: 'Tutorials'
                },
            Tutorials_Course:
                {
                    id: 'tutorials_course',
                    url: '/eLearning/Tutorials/Course/:courseId',
                    pgTitle: 'New Tutorials',
                    heading: 'Tutorials',
                    subHeading: 'Course',
                    crumbText: 'New',
                    faIcon: 'asterisk',
                    ngFolder: 'Tutorials',
                    controller: 'NewTutorialsController',
                    view: 'course.html',
                    children: [],
                    parent: 'Tutorials'
                },
            Videos: 
                {
                    id: 'elearning',
                    url: '/eLearning',
                    pgTitle: 'eLearning',
                    heading: 'Videos',
                    subHeading: 'Free Videos and Presentations on verious technology topics.',
                    faIcon: 'film',
                    ngFolder: 'eLearning',
                    controller: 'eLearningController',
                    view: 'elearning.html',
                    children: [],
                    parent: 'eLearning'
                },
            FlashCards: 
                {
                        id: 'elearning',
                        url: '/eLearning',
                        pgTitle: 'eLearning',
                        heading: 'Flash Cards',
                        subHeading: 'Learn verious technology conecpts, topic by topic - one card at a time, with our Flash Cards!',
                        faIcon: 'tablet',
                        ngFolder: 'eLearning',
                        controller: 'eLearningController',
                        view: 'elearning.html',
                        children: [],
                        parent: 'eLearning'
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
            .when(Sitemap.eBooks.url, { controller: Sitemap.eBooks.controller, templateUrl: NGViewPath(Sitemap.eBooks), caseInsensitiveMatch: true })
            .when(Sitemap.Tutorials.url, { controller: Sitemap.Tutorials.controller, templateUrl: NGViewPath(Sitemap.Tutorials), caseInsensitiveMatch: true })
            .when(Sitemap.Tutorials_Featured.url, { controller: Sitemap.Tutorials_Featured.controller, templateUrl: NGViewPath(Sitemap.Tutorials_Featured), caseInsensitiveMatch: true })
            .when(Sitemap.Tutorials_New.url, { controller: Sitemap.Tutorials_New.controller, templateUrl: NGViewPath(Sitemap.Tutorials_New), caseInsensitiveMatch: true })
            .when(Sitemap.Tutorials_Course.url, { controller: Sitemap.Tutorials_Course.controller, templateUrl: NGViewPath(Sitemap.Tutorials_Course), caseInsensitiveMatch: true })
            .when('/eLearning/Tutorials/:courseId', { controller: Sitemap.Tutorials_Course.controller, templateUrl: NGViewPath(Sitemap.Tutorials_Course), caseInsensitiveMatch: true })
            //.when('/Projects/Edit/:Id', { controller: 'ProjectsController', templateUrl: viewPath + 'projects/edit.html' })

            .otherwise({ redirectTo: '/' });

    }]);

    function NGViewPath(node) {
        return '/assets/ng/' + node.ngFolder + '/' + node.view;
    }
})();