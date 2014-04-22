

(function () {
    'use strict';

    var controllerId = 'HeaderNavCtrl';
    angular.module(PBDeskGHAppName).controller(controllerId,
        ['$scope', '$location', HeaderNavCtrl]);

    function HeaderNavCtrl($scope, $location) {
        $scope.MainMenu = '';
        $scope.PageTitle = 'PBDesk - from the desk of Pinal Bhatt!';
        var absurl = $location.absUrl().toLowerCase();
        if (absurl.indexOf('/elearning/') != -1) {
            $scope.MainMenu = "elearning";
            $scope.PageTitle = "PBDesk - eLearning";
        }

    }
})();

//angular.element(document).ready(function () {

//    var header = document.createElement('header');
//    header.setAttribute('ng-controller', 'HeaderNavCtrl');
//    header.setAttribute('ng-cloak', '');
    
//    var ngInc = document.createElement('ng-include');
//    ngInc.setAttribute('src', "'/assets/ng/common/views/navbar.html'");
//    header.appendChild(ngInc);
//    document.body.insertBefore(header, document.body.firstChild);
//    angular.bootstrap(header, ['HeaderNavApp']);
//});