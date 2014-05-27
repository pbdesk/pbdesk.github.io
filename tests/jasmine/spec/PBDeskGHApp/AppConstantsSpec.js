(function () {
    

    describe("PBDeskGHApp App Constants:", function () {

        var SITEMAP = {};
        beforeEach(angular.mock.module("PBDeskGHApp"));

        describe("Sitemap Tests:", function () {

            var ProperyList = ['id', 'url', 'pgTitle', 'heading', 'crumbText', 'faIcon', 'ngFolder', 'controller', 'view', 'parent', 'children'];

            beforeEach(inject(function (Sitemap) {
                SITEMAP = Sitemap;
            }));


            function PropertyDefinedTest1(obj, nodeName, property) {
               
                since("- '" + nodeName + '.' + property + "' is not defined").expect(obj[nodeName][property]).toBeDefined();
               
            }
            function PropertyDefinedTest(objName, property) {
                it("- '" + objName + '.' + property + "' is defined", function () {
                    expect(SITEMAP[objName][property]).toBeDefined();
                });
            }

            it("Has Root item defined", function () {
                expect(SITEMAP["Root"]).toBeDefined();
                expect(SITEMAP.Root).toBeDefined();
            });

            describe("Has all required properties for Root", function () {
                for (var item in ProperyList) {
                    //RootPropertyDefinedTest(ProperyList[item]);
                    PropertyDefinedTest("Root", ProperyList[item]);
                }
            });

            it("Root.parent should be null", function () {
                expect(SITEMAP.Root.parent).toBeNull();
            });

            it("Root.children should have 7 items", function () {
                //(SitemapObj["TechNews"].id);
                expect(SITEMAP.Root.children.length).toBe(7);
            });

            it("All items have required properties defined", function () {



                for (var item in SITEMAP) {
                    var x = SITEMAP[item];
                    for (var prop in ProperyList) {
                        PropertyDefinedTest1(SITEMAP,item, ProperyList[prop]);
                    }
                }


            });
            /*
             describe("All items have required properties defined", function () {
     
                 beforeEach(function () {
                     this.SitemapRoot = this.Sitemap.Root;
                 });
     
                 function PropertyDefinedTest(objName, property) {
                     it("- '" + objName + '.' + property + "' is defined", function () {
                         expect(this.Sitemap[objName][property]).toBeDefined();
                     });
                 }
     
                 describe('Something', function () {
                     it("something1", function () {
                        
                         for (var item in this.Sitemap) {
                             var x = this.Sitemap[item];
                             for (var prop in ProperyList) {
                                 PropertyDefinedTest(item, ProperyList[prop]);
                             }
                         }
                     });
     
                 });
     
                 
                 
             });
             */

            it("Has Valid parent-child relationship defined on Sitemap", function () {
                //alert(SitemapObj["TechNews"].id);
                expect(SITEMAP.Root.id).toBe("home");
            });

        });

        describe("DataSvcObjects Constant", function () {
            var DataSvcObj;

            beforeEach(inject(function (DataSvcObjects) {
                DataSvcObj = DataSvcObjects;
            }));
        });




    });

})();


