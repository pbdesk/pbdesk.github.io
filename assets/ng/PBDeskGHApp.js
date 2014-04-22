var PBDeskGHAppName = 'PBDeskGHApp';
(function () {
    'use strict';

    var id = 'PBDeskGHApp';

    // TODO: Inject modules as needed.
    var PBDeskGHApp = angular.module('PBDeskGHApp', [
        // Angular modules 
        'ngAnimate',        // animations
        'ngRoute'           // routing

        // Custom modules 

        // 3rd Party Modules
        
    ]);

    // Execute bootstrapping code and any dependencies.
    // TODO: inject services as needed.
    PBDeskGHApp.run(['$q', '$rootScope',
        function ($q, $rootScope) {

        }]);
})();