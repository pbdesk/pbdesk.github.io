(function () {
    'use strict';
    var HeaderNavApp = angular.module('HeaderNavApp', [ ]);
    HeaderNavApp.run(['$q', '$rootScope',
        function ($q, $rootScope) {

        }]);
})();

(function () {
    'use strict';

    var controllerId = 'HeaderNavCtrl';

    // TODO: replace app with your module name
    angular.module('HeaderNavApp').controller(controllerId,
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

angular.element(document).ready(function () {

    var header = document.createElement('header');
    header.setAttribute('ng-controller', 'HeaderNavCtrl');
    header.setAttribute('ng-cloak', '');
    
    var ngInc = document.createElement('ng-include');
    ngInc.setAttribute('src', "'/assets/ng/common/views/navbar.html'");
    header.appendChild(ngInc);
    document.body.insertBefore(header, document.body.firstChild);
    angular.bootstrap(header, ['HeaderNavApp']);
});