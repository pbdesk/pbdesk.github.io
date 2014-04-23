
(function () {
    'use strict';

    var controllerId = 'FooterCtrl';
    angular.module(PBDeskGHAppName).controller(controllerId,
        ['$scope', '$rootScope', FooterCtrl]);

    function FooterCtrl($scope, $rootScope) {

    }
})();

//angular.element(document).ready(function () {

//    var footer = document.createElement('footer');
//    footer.setAttribute('ng-controller', 'FooterCtrl');
//    footer.setAttribute('ng-cloak', '');

//    var ngInc = document.createElement('ng-include');
//    ngInc.setAttribute('src', "'/assets/ng/common/views/footer.html'");
//    footer.appendChild(ngInc);

//    document.body.appendChild(footer);
//    angular.bootstrap(footer, ['FooterApp']);
//});