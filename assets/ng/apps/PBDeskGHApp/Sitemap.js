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
                    parent: null,
                    children: ['TechNews', 'Articles', 'eLearning', 'Spotlight', 'Showcase', 'Blogs', 'About']
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
                    view: 'news.html',
                    parent: 'Root',
                    children: []
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
                    view: 'articles.html',
                    parent: 'Root',
                    children: []
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
                    children: ['Tutorials_Featured', 'Tutorials_New', 'Tutorials_Catalog', 'Tutorials_ByTag', 'Tutorials_Course'],
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
            Tutorials_Catalog:
                {
                    id: 'tutorials_catalog',
                    url: '/eLearning/Tutorials/Catalog',
                    pgTitle: 'Tutorials Catalog',
                    heading: 'Tutorials',
                    subHeading: 'Catalog',
                    crumbText: 'Catalog',
                    faIcon: 'list-alt',
                    ngFolder: 'Tutorials',
                    controller: 'CatalogTutorialsController',
                    view: 'catalog.html',
                    children: [],
                    parent: 'Tutorials'
                },
            Tutorials_ByTag:
                {
                    id: 'tutorials_bytag',
                    url: '/eLearning/Tutorials/Tags',
                    pgTitle: 'Tutorials By Tags',
                    heading: 'Tutorials',
                    subHeading: 'By Tags',
                    crumbText: 'Tags',
                    faIcon: 'tags',
                    ngFolder: 'Tutorials',
                    controller: 'TagsTutorialsController',
                    view: 'new.html',
                    children: [],
                    parent: 'Tutorials'
                },
            Tutorials_Course:
                {
                    id: 'tutorials_course',
                    url: '/eLearning/Tutorials/:courseId',
                    pgTitle: 'New Tutorials',
                    heading: 'Tutorials',
                    subHeading: 'Course',
                    crumbText: 'New',
                    faIcon: 'asterisk',
                    ngFolder: 'Tutorials',
                    controller: 'CourseController',
                    view: 'course.html',
                    children: ['Tutorials_Course_Item'],
                    parent: 'Tutorials'
                },
            Tutorials_Course_Item:
                {
                    id: 'tutorials_course_item',
                    url: '/eLearning/Tutorials/:courseId/:itemId',
                    pgTitle: 'New Tutorials',
                    heading: 'Tutorials',
                    subHeading: 'Course',
                    crumbText: 'New',
                    faIcon: 'asterisk',
                    ngFolder: 'Tutorials',
                    controller: 'CourseItemController',
                    view: 'courseitem.html',
                    children: [],
                    parent: 'Tutorials_Course'
                },
            Videos:
                {
                    id: 'videos',
                    url: '/eLearning',
                    pgTitle: 'eLearning',
                    heading: 'Videos',
                    subHeading: 'Free Videos and Presentations on verious technology topics.',
                    crumbText: 'Videos',
                    faIcon: 'film',
                    ngFolder: 'eLearning',
                    controller: 'eLearningController',
                    view: 'elearning.html',
                    children: [],
                    parent: 'eLearning'
                },
            FlashCards:
                {
                    id: 'flashcards',
                    url: '/eLearning',
                    pgTitle: 'eLearning',
                    heading: 'Flash Cards',
                    subHeading: 'Learn verious technology conecpts, topic by topic - one card at a time, with our Flash Cards!',
                    crumbText: 'FlashCards',
                    faIcon: 'tablet',
                    ngFolder: 'eLearning',
                    controller: 'eLearningController',
                    view: 'elearning.html',
                    children: [],
                    parent: 'eLearning'
                },
            Showcase:
                {
                    id: 'showcase',
                    url: '/Articles',
                    pgTitle: 'Articles',
                    heading: 'Articles',
                    crumbText: 'Articles',
                    faIcon: 'file-text',
                    ngFolder: 'articles',
                    controller: 'ArticlesController',
                    view: 'articles.html',
                    parent: 'Root',                    
                    children: []
                },
            Spotlight:
                {
                    id: 'spotlight',
                    url: '/Articles',
                    pgTitle: 'Articles',
                    heading: 'Articles',
                    crumbText: 'Articles',
                    faIcon: 'file-text',
                    ngFolder: 'articles',
                    controller: 'ArticlesController',
                    view: 'articles.html',
                    parent: 'Root',
                    children: []
                },
            Blogs:
                {
                    id: 'blogs',
                    url: '/Articles',
                    pgTitle: 'Articles',
                    heading: 'Articles',
                    crumbText: 'Articles',
                    faIcon: 'file-text',
                    ngFolder: 'articles',
                    controller: 'ArticlesController',
                    view: 'articles.html',
                    parent: 'Root',
                    children: []
                },
            About:
                {
                    id: 'about',
                    url: '/Articles',
                    pgTitle: 'Articles',
                    heading: 'Articles',
                    crumbText: 'Articles',
                    faIcon: 'file-text',
                    ngFolder: 'articles',
                    controller: 'ArticlesController',
                    view: 'articles.html',
                    parent: 'Root',
                    children: []
                }
        });

})();