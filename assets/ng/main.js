/// <reference path="../js/require.js" />

requirejs.config({
    baseUrl: '/assets/ng',
    urlArgs: 'v=1.0'
       
});

requirejs(
    [
        'PBDeskGHApp',
        'common/services/routeResolver',
        'common/controllers/HeadTagCtrl',
        'common/controllers/HeaderNavCtrl',
        'common/controllers/FooterCtrl',
    ],
    function () {
        angular.bootstrap(document, ['PBDeskGHApp']);
    });