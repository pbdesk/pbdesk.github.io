(function () {
    'use strict';

    angular.module(PBDeskGHAppName).constant('Sitemap',
        {
            Root:
                {
                    id: 'home',
                    url: '/',
                    pgTitle: 'Welcome',
                    heading: 'PBDesk',
                    crumbText: 'Home',
                    faIcon: 'home',
                    ngFolder: 'home',
                    controller: 'HomeController',
                    view: 'home.html',
                    parent: null
                },
            TechNews:
                {
                    id: 'technews',
                    url: '/TechNews',
                    pgTitle: 'TechNews',
                    heading: 'TechNews',
                    crumbText: 'TechNews',
                    faIcon: 'info',
                    ngFolder: 'news',
                    controller: 'NewsController',
                    view: 'news.html'
                },
            Articles:
                {
                    id: 'articles',
                    url: '/Articles',
                    pgTitle: 'Articles',
                    heading: 'Articles',
                    crumbText: 'Articles',
                    faIcon: 'file-text',
                    ngFolder: 'articles',
                    controller: 'ArticlesController',
                    view: 'articles.html'
                },
            eLearning:
                {
                    id: 'elearning',
                    url: '/eLearning',
                    pgTitle: 'eLearning',
                    heading: 'eLearning',
                    subHeading: 'Blended Learning Pathway',
                    crumbText: 'eLearning',
                    faIcon: 'cloud',
                    ngFolder: 'eLearning',
                    controller: 'eLearningController',
                    view: 'eLearning.html',
                    children: ['eBooks', 'Tutorials', 'Videos', 'FlashCards'],
                    parent: 'Root'
                },

            eBooks:
                {
                    id: 'ebooks',
                    url: '/eLearning/eBooks',
                    pgTitle: 'eBooks',
                    heading: 'eBooks',
                    subHeading: 'basic source of Knowledge now in digital format - "eBooks"',
                    crumbText: 'eBooks',
                    faIcon: 'book',
                    ngFolder: 'eBooks',
                    controller: 'eBooksController',
                    view: 'ebooks.html',
                    children: [],
                    parent: 'eLearning'

                },
            Tutorials:
                {
                    id: 'tutorials',
                    url: '/eLearning/Tutorials',
                    pgTitle: 'Tutorials',
                    heading: 'Tutorials',
                    subHeading: 'Free online tutorials and videos for self learning technology concepts.',
                    crumbText: 'Tutorials',
                    faIcon: 'laptop',
                    ngFolder: 'Tutorials',
                    controller: 'TutorialsController',
                    view: 'tutorials.html',
                    children: ['Tutorials_Featured', 'Tutorials_New'],
                    parent: 'eLearning'
                },
            Tutorials_Featured:
                {
                    id: 'tutorials_featured',
                    url: '/eLearning/Tutorials/Featured',
                    pgTitle: 'Featured Tutorials',
                    heading: 'Tutorials',
                    subHeading: 'Featured Tutorials',
                    crumbText: 'Featured',
                    faIcon: 'bookmark-o',
                    ngFolder: 'Tutorials',
                    controller: 'FeaturedTutorialsController',
                    view: 'featured.html',
                    children: [],
                    parent: 'Tutorials'
                },
            Tutorials_New:
                {
                    id: 'tutorials_new',
                    url: '/eLearning/Tutorials/New',
                    pgTitle: 'New Tutorials',
                    heading: 'Tutorials',
                    subHeading: 'New Tutorials',
                    crumbText: 'New',
                    faIcon: 'asterisk',
                    ngFolder: 'Tutorials',
                    controller: 'NewTutorialsController',
                    view: 'new.html',
                    children: [],
                    parent: 'Tutorials'
                },
            Tutorials_Course:
                {
                    id: 'tutorials_course',
                    url: '/eLearning/Tutorials/Course/:courseId',
                    pgTitle: 'New Tutorials',
                    heading: 'Tutorials',
                    subHeading: 'Course',
                    crumbText: 'New',
                    faIcon: 'asterisk',
                    ngFolder: 'Tutorials',
                    controller: 'NewTutorialsController',
                    view: 'course.html',
                    children: [],
                    parent: 'Tutorials'
                },
            Videos:
                {
                    id: 'elearning',
                    url: '/eLearning',
                    pgTitle: 'eLearning',
                    heading: 'Videos',
                    subHeading: 'Free Videos and Presentations on verious technology topics.',
                    faIcon: 'film',
                    ngFolder: 'eLearning',
                    controller: 'eLearningController',
                    view: 'elearning.html',
                    children: [],
                    parent: 'eLearning'
                },
            FlashCards:
                {
                    id: 'elearning',
                    url: '/eLearning',
                    pgTitle: 'eLearning',
                    heading: 'Flash Cards',
                    subHeading: 'Learn verious technology conecpts, topic by topic - one card at a time, with our Flash Cards!',
                    faIcon: 'tablet',
                    ngFolder: 'eLearning',
                    controller: 'eLearningController',
                    view: 'elearning.html',
                    children: [],
                    parent: 'eLearning'
                }
        });

})();