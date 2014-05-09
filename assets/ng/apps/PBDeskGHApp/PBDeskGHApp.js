///#source 1 1 /assets/ng/apps/PBDeskGHApp/PBDeskGHApp.js
var PBDeskGHAppName = 'PBDeskGHApp';
(function () {
    'use strict';

    var id = 'PBDeskGHApp';

    // TODO: Inject modules as needed.
    var PBDeskGHApp = angular.module('PBDeskGHApp', [
        'ngAnimate', 'ngRoute', 'ngResource', 'ngSanitize',   //Angular Apps
        'ui.bootstrap', 'jmdobry.angular-cache',            // 3rd Party Apps
        'GoogleFeedsApp', 'DataSvcApp', 'PBDeskHelperApp'                                          // PBDesk Supporting Apps
        
    ]);

    // Execute bootstrapping code and any dependencies.
    // TODO: inject services as needed.
    PBDeskGHApp.run(['$q', '$rootScope', '$location', 'Sitemap',
    function ($q, $rootScope, $location, Sitemap) {

        $rootScope.SitemapWork = function (currentNode, currentScope) {
            currentScope.Sitemap = Sitemap;
            currentScope.SitemapNodeCurrent = currentNode;
            currentScope.SitemapNodeParent = GetSitemapNodeParent(currentNode);            
            currentScope.SitemapNodeBase = GetSitemapBaseNode(currentNode);            
            currentScope.SitemapNodeChildren = GetSitemapNodeChildren(currentNode);
            currentScope.Crumbs = GetCrumbsFromCurrentNode(currentNode);
            SetActiveNav(currentScope.SitemapNodeBase.id);
            SetPgTitle(currentScope.SitemapNodeCurrent.pgTitle);

        }

        $rootScope.SetActiveNav = function (navId) {
            return SetActiveNav(navId);
        }

        $rootScope.SetPgTitle = function (ttl) {
            return SetPgTitle(ttl);
        }

        function GetSitemapNodeParent(currentNode) {
            var parent = null;
            if (currentNode != null && currentNode.parent != null && Sitemap[currentNode.parent] != null) {
                parent = Sitemap[currentNode.parent];
            }
            return parent;
        }

        function GetSitemapBaseNode(currentNode) {
            var parent = null;
            var current = currentNode;
            if (current != null) {
                while (current.parent !== 'Root') {
                    current = Sitemap[current.parent]
                }
                if (current != null && current.parent === 'Root') {
                    parent = current;
                }
            }
            return parent;
        }

        function GetSitemapNodeChildren(currentNode) {
            var children = [];
            var counter = 0;
            if (currentNode != null && currentNode.children != null && currentNode.children.length > 0) {
                $.each(currentNode.children, function (index, value) {
                    if(Sitemap[value] != null ){
                        children[counter] = Sitemap[value];
                        counter++;
                    }
                });
            }
            return children;
        }
        
        function SetActiveNav(navId) {
            if (navId != null && navId.length > 0) {
                var currentNavItem = '#navItem' + navId;
                $('[id^=navItem]').removeClass('active');
                $('#navItem' + navId).addClass('active');
            }
        };   
        
        function SetPgTitle(ttl) {
            document.title = PBDeskJS.StrUtils.Format("PBDesk - {0} | from the desk of Pinal Bhatt!", ttl);
        }  

        function GetCrumbsFromCurrentNode(currentNode) {
                var crumbs = [];
                if (currentNode != null) {
                    var current = currentNode;
                    var counter = 0;
                    do {
                        crumbs[counter] = current;
                        counter++;
                        if (current.parent != null && Sitemap[current.parent] != null) {
                            current = Sitemap[current.parent];
                        }
                        else {
                            current = null;
                        }
                    } while (current != null);
                }
                return crumbs.reverse();
            }

            //$rootScope.GetBreadcrumb = function(){
            //    var url = $location.url();
            //    var items = url.split("/");
            //    var crumbs = [];
            //    if (items.length > 0) {
            //        $.each(items, function (index, value) {
            //            if (value === '') {
            //                crumbs[index] = Sitemap["Root"];
            //            }
            //            else {
            //                crumbs[index] = Sitemap[value];
            //            }
            //        });
            //    }
                
            //    return crumbs;
            //}
        }]);

})();

