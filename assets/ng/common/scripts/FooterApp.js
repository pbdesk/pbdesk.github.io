(function () {
    'use strict';
    var FooterApp = angular.module('FooterApp', []);
    FooterApp.run(['$q', '$rootScope',
        function ($q, $rootScope) {

        }]);
})();

(function () {
    'use strict';

    var controllerId = 'FooterCtrl';

    // TODO: replace app with your module name
    angular.module('FooterApp').controller(controllerId,
        ['$scope', FooterCtrl]);

    function FooterCtrl($scope) {

    }
})();

angular.element(document).ready(function () {

    var footer = document.createElement('footer');
    footer.setAttribute('ng-controller', 'FooterCtrl');
    footer.setAttribute('ng-cloak', '');

    var ngInc = document.createElement('ng-include');
    ngInc.setAttribute('src', "'/assets/ng/common/views/footer.html'");
    footer.appendChild(ngInc);

    document.body.appendChild(footer);
    angular.bootstrap(footer, ['FooterApp']);
});