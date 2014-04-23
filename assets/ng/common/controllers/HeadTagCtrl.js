
(function () {
    'use strict';

    var controllerId = 'HeadTagCtrl';
    angular.module(PBDeskGHAppName).controller(controllerId,
        ['$scope', '$rootScope', '$location', PBDeskHeaderCtrl]);

    function PBDeskHeaderCtrl($scope, $rootScope, $location) {
        var theme = PBDeskJS.CookieUtils.Read('theme'); 
        if (!theme) {
            theme = 'cerulean';
        }
        $scope.Theme = theme;
        //$cookies.theme = theme;
        PBDeskJS.CookieUtils.Create('theme', theme);

        $scope.PageTitle = 'Welcome';
        $scope.MetaDesc = '';
        $scope.MetaKeywords = '';
        var absurl = $location.absUrl().toLowerCase();
        if (absurl.indexOf('/elearning/') != -1) {
            $scope.PageTitle = "PBDesk - eLearning";
        }
        
        

        
    }
})();

//angular.element(document).ready(function () {
//    document.head.setAttribute('ng-controller', 'HeadTagCtrl');
//    document.head.setAttribute('ng-cloak', '');
//    document.head.innerHTML = '<meta charset="utf-8"> \
//        <meta http-equiv="X-UA-Compatible" content="IE=edge"> \
//        <meta name="viewport" content="width=device-width, initial-scale=1"> \
//        <meta name="description" content="{{MetaDesc}}"> \
//        <meta name="keywords" content="{{MetaKeywords}}"> \
//        <meta name="author" content="Pinal Bhatt [PBDesk.com]"> \
//        <meta property="fb:admins" content="731775365" />   \
//        <meta http-equiv="Content-Type" content="text/html;charset=utf-8" /> \
//        <title>{{PageTitle}}</title> \
//        <link rel="shortcut icon" href="/assets/imgs/pbdesk/favicon.ico">  \
//        <link href="https://plus.google.com/104802217330869674552" rel="publisher" /> \
//        <link href="https://plus.google.com/116495447274977757345?rel=author" rel="author" /> \
//        <!--[if lt IE 9]> \
//            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script> \
//            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script> \
//        <![endif]--> \
//        <link ng-href="//netdna.bootstrapcdn.com/bootswatch/3.1.1/{{Theme}}/bootstrap.min.css" rel="stylesheet" id="bootstrap.css.theme" /> \
//        <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet" /> \
//        <link href="/assets/css/styles.css" rel="stylesheet" />';


    
//    angular.bootstrap(document.head, ['HeadTagApp']);

//});