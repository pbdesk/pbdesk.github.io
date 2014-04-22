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

    PBDeskGHApp.constant('AppConfigs',
        {
            Sitemap :
                {
                    Root:
                        {
                            id: 'Home',
                            url: '/',
                            title: 'Welcome'

                        }
                }

        });

    PBDeskGHApp.config(['$routeProvider', function ($routeProvider) {
        var ngPath = '/ng/';
        $routeProvider
            .when('/', { controller: 'MDataHomeController', templateUrl: viewPath + 'index.html' })

            .when('/Locales', { controller: 'LocalesController', templateUrl: viewPath + 'locales/list.html' })
            .when('/Locales/Create', { controller: 'LocalesController', templateUrl: viewPath + 'locales/edit.html' })
            .when('/Locales/Edit/:Id', { controller: 'LocalesController', templateUrl: viewPath + 'locales/edit.html' })

            .when('/Builds', { controller: 'BuildsController', templateUrl: viewPath + 'builds/list.html' })
            .when('/Builds/Create', { controller: 'BuildsController', templateUrl: viewPath + 'builds/edit.html' })
            .when('/Builds/Edit/:Id', { controller: 'BuildsController', templateUrl: viewPath + 'builds/edit.html' })

            .when('/Projects', { controller: 'ProjectsController', templateUrl: viewPath + 'projects/list.html' })
            .when('/Projects/Create', { controller: 'ProjectsController', templateUrl: viewPath + 'projects/edit.html' })
            .when('/Projects/Edit/:Id', { controller: 'ProjectsController', templateUrl: viewPath + 'projects/edit.html' })

            .otherwise({ redirectTo: '/' });

    }]);
})();