(function () {
    var PBDeskHelperApp = angular.module('PBDeskHelperApp', []);

    // Execute bootstrapping code and any dependencies.
    // TODO: inject services as needed.
    PBDeskHelperApp.run(['$q', '$rootScope',
        function ($q, $rootScope) {

        }]);
})();

(function () {
    'use strict';

    var serviceId = 'PBDeskHelper';

    // TODO: replace app with your module name
    angular.module('PBDeskHelperApp').factory(serviceId, ['$http', PBDeskHelper]);

    function PBDeskHelper($http) {
        // Define the functions and properties to reveal.
        

        function getCourseUrl(course) {
            if (course != null) {
                course.CourseUrl = '';
                switch (course.Format) {
                    case 115: {
                        course.CourseUrl = '#/eLearning/Tutorials/' + course.NodeId;
                        break;
                    }
                    case 119: {
                        course.CourseUrl = '/e-Learning/Tutorials/UTCourse#/' + course.NodeId + '-' + course.Title;
                        break;
                    }
                }                
            }
        }

        function setDeckUrl(deck) {
            if (deck != null) {
                deck.DeckUrl = "/e-learning/flash-cards/Deck#" + deck.NodeId;
            }
        }

        //#region Internal Methods        

        //#endregion

        var service = {
            GetCourseUrl: getCourseUrl,
            SetDeckUrl: setDeckUrl
        };

        return service;
    }
})();