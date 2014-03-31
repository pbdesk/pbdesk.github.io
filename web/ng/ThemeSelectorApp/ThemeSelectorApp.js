(function () {
    'use strict';
    var ThemeSelectorApp = angular.module('ThemeSelectorApp', ['ngCookies']);
    ThemeSelectorApp.run(['$q', '$rootScope',
        function ($q, $rootScope) {

        }]);

    

})();

(function () {
    'use strict';

    var controllerId = 'ThemeSelectorCtrl';

    // TODO: replace app with your module name
    angular.module('ThemeSelectorApp').controller(controllerId,
        ['$scope', '$cookies', ThemeSelectorCtrl]);

    function ThemeSelectorCtrl($scope, $cookies) {
        var theme = $cookies.theme;
        if (!theme) {
            theme = 'cerulean';
        }
        $scope.Theme = theme;
        $cookies.theme = theme;

        $scope.Themes = [
            { id: 'amelia', name: 'Amelia', caption: 'Sweet and cheery' },
            { id: 'cerulean', name: 'Cerulean', caption: 'A calm blue sky' },
            { id: 'cosmo', name: 'Cosmo', caption: 'An ode to Metro' }, 
            { id: 'cyborg', name: 'Cyborg', caption: 'Jet black and electric blue' },
            { id: 'darkly', name: 'Darkly', caption: 'Flatly in night mode' },
            { id: 'flatly', name: 'Flatly', caption: 'Flat and modern' },
            { id: 'journal', name: 'Journal', caption: 'Crisp like a new sheet of paper' }

        ];

        $scope.SelectTheme = function (selectedTheme) {
            $scope.Theme = selectedTheme;
            $cookies.theme = selectedTheme;
        }



    }
})();

