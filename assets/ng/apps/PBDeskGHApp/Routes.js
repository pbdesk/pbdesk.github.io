(function () {
    'use strict';

    angular.module(PBDeskGHAppName).config(['$routeProvider', 'Sitemap', function ($routeProvider, Sitemap) {

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
            .when(Sitemap.Tutorials_Catalog.url, { controller: Sitemap.Tutorials_Catalog.controller, templateUrl: NGViewPath(Sitemap.Tutorials_Catalog), caseInsensitiveMatch: true })
            .when(Sitemap.Tutorials_Course.url, { controller: Sitemap.Tutorials_Course.controller, templateUrl: NGViewPath(Sitemap.Tutorials_Course), caseInsensitiveMatch: true })
            
            //.when('/eLearning/Tutorials/:courseId', { controller: Sitemap.Tutorials_Course.controller, templateUrl: NGViewPath(Sitemap.Tutorials_Course), caseInsensitiveMatch: true })
            //.when('/Projects/Edit/:Id', { controller: 'ProjectsController', templateUrl: viewPath + 'projects/edit.html' })

            .otherwise({ redirectTo: '/' });

    }]);

    function NGViewPath(node) {
        return '/assets/ng/' + node.ngFolder + '/' + node.view;
    }
})();