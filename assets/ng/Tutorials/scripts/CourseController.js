/// <reference path="../../../js/PBDeskUtils.js" />

(function () {
    'use strict';

    var controllerId = 'CourseController';

    // TODO: replace app with your module name
    angular.module(PBDeskGHAppName).controller(controllerId,
        ['$scope', '$rootScope', '$routeParams', '$location', 'Sitemap', 'DataSvcObjects', 'DSFactory', CourseController]);

    function CourseController($scope, $rootScope,$routeParams,$location, Sitemap, DataSvcObjects, DSFactory) {
        var courseId = $routeParams.courseId;
        if (!$.isNumeric(courseId) || courseId < 1000) {
            toastr.warning("Not a valid course Id")            
            $location.url('/eLearning/Tutorials');
            return;
        }
       
        $rootScope.SitemapWork(Sitemap.Tutorials_Featured, $scope);
        DataSvcObjects.Courses_Item.ApiUrl = PBDeskJS.StrUtils.Format(DataSvcObjects.Courses_Item.ApiUrl, courseId)
        
        $scope.CurrentCourse = {};
        DSFactory.GetData(DataSvcObjects.Courses_Item)
            .then(function (result) {
                $scope.CurrentCourse = result;
                $("#pgSubHeading").html($scope.CurrentCourse.Title);
            }, function (reason) {
                alert("Error making Data Api calls. Please try again later.");
            })
            .finally(function () {

            });

        $scope.$on('$routeChangeSuccess', function () {
            $rootScope.SetActiveNav($scope.SitemapNodeBase.id);
        });
    }
})();
