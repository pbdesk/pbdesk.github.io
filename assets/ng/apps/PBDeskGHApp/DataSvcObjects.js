(function () {
    'use strict';

    angular.module(PBDeskGHAppName).constant('DataSvcObjects',
        {
            Courses_Featured:
                 { ApiUrl: 'Featured/Courses', CacheKey: 'featuredCourses1', AllowCache: true },
            Courses_New:
                { ApiUrl: 'Featured/Courses', CacheKey: 'featuredCourses', AllowCache: false }
            
        });

})();