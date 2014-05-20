/// <reference path="../../../js/PBDeskUtils.js" />

(function () {
    'use strict';

    var controllerId = 'CourseItemController';

    // TODO: replace app with your module name
    angular.module(PBDeskGHAppName).controller(controllerId,
        ['$scope', '$rootScope', '$routeParams', '$location', 'Sitemap', 'DataSvcObjects', 'DSFactory', 'GoogleFeedsFactory', CourseItemController]);

    function CourseItemController($scope, $rootScope, $routeParams, $location, Sitemap, DataSvcObjects, DSFactory, GoogleFeedsFactory) {
        var courseId = $routeParams.courseId;
        if (!$.isNumeric(courseId) || courseId < 1000) {
            toastr.warning("Not a valid course Id")            
            $location.url('/eLearning/Tutorials');
            return;
        }

        var itemId = $routeParams.itemId;
        if (!$.isNumeric(itemId) || itemId > 100) {
            toastr.warning("Not a valid Session Id")
            $location.url('/eLearning/Tutorials/' + courseId);
            return;
        }
       
        $rootScope.SitemapWork(Sitemap.Tutorials_Course_Item, $scope);
        var CourseObj = {};
        var svcObj = {};
        angular.copy(DataSvcObjects.Courses_Item, svcObj);
        svcObj.ApiUrl = PBDeskJS.StrUtils.Format(svcObj.ApiUrl, courseId)
        
        $scope.Current = {};
        DSFactory.GetData(svcObj)
            .then(function (result) {
                $("#pgSubHeading").html(result.Title);
                angular.copy(result, CourseObj);
                AppendAdditionalParameters();



                GoogleFeedsFactory.GetFeeds(CourseObj.RssLink, CourseObj.SessionCount, 'c9').then(
                            function (feedResult) {
                                CourseObj.Sessions = feedResult.feed;
                                CourseObj.Sessions.entries.reverse();
                                $scope.Current = CourseObj;
                                
                            },
                            function (error) {
                                //error
                                toastr.error("Error loading rss feeds from Google. " + error.message);
                                
                            });

               
                
            }, function (reason) {
                alert("Error making Data Api calls. Please try again later.");
            })
            .finally(function () {

            });

        $scope.$on('$routeChangeSuccess', function () {
            $rootScope.SetActiveNav($scope.SitemapNodeBase.id);
        });

        function AppendAdditionalParameters() {
            if (CourseObj != null) {
                if (CourseObj.Format == 115) {
                    //Channel9 Series
                    CourseObj.RssLink = jQuery.grep(CourseObj.Items, function (n, i) {
                        return (n.Text.toLowerCase() === 'c9rsslink');
                    })[0].Link;
                    CourseObj.SessionCount = jQuery.grep(CourseObj.Items, function (n, i) {
                        return (n.Text.toLowerCase() === 'sessioncount');
                    })[0].Link;
                }
            }
        }
    }
})();
