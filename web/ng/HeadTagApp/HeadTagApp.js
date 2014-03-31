(function () {
    'use strict';
    var PBDeskHeaderApp = angular.module('HeadTagApp', []);
    PBDeskHeaderApp.run(['$q', '$rootScope',
        function ($q, $rootScope) {

        }]);
})();

(function () {
    'use strict';

    var controllerId = 'HeadTagCtrl';

    // TODO: replace app with your module name
    angular.module('HeadTagApp').controller(controllerId,
        ['$scope',  PBDeskHeaderCtrl]);

    function PBDeskHeaderCtrl($scope) {
        var theme = PBDeskJS.CookieUtils.Read('theme'); 
        if (!theme) {
            theme = 'cerulean';
        }
        $scope.Theme = theme;
        //$cookies.theme = theme;
        PBDeskJS.CookieUtils.Create('theme', theme);
        

        
    }
})();

angular.element(document).ready(function () {
    document.head.setAttribute('ng-controller', 'HeadTagCtrl');
    document.head.setAttribute('ng-cloak','');
    angular.bootstrap(document.head, ['HeadTagApp']);
});