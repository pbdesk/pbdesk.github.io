(function () {
    'use strict';

    angular.module(PBDeskGHAppName).constant('DataSvcObjects',
        {
            Courses_Featured:
                 { ApiUrl: 'Featured/Courses', CacheKey: 'featuredCourses1', AllowCache: true },
            Courses_New:
                { ApiUrl: 'Featured/Courses', CacheKey: 'featuredCourses', AllowCache: false },
            Courses_Item:
                { ApiUrl: 'Courses/course/{0}', CacheKey: 'courseItem{0}', AllowCache: false },
            Courses_Catalog:
                { ApiUrl: 'Courses/Catalog', CacheKey: 'courseCatalog', AllowCache: false },
        });

})();