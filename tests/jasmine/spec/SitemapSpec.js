describe("PBDeskGHApp App Constants:", function () {

    beforeEach(angular.mock.module("PBDeskGHApp"));

    describe("Sitemap Tests:", function () {
        
        var ProperyList = ['id', 'url', 'pgTitle', 'heading', 'crumbText', 'faIcon', 'ngFolder', 'controller', 'view', 'parent', 'children'];

        beforeEach(inject(function (Sitemap) {
            this.Sitemap = Sitemap;
        }));

        
        function PropertyDefinedTest(objName, property) {
            it("- '" + objName + '.' + property + "' is defined", function () {
                expect(this.Sitemap[objName][property]).toBeDefined();
            });
        }

        it("Has Root item defined", function () {            
            expect(this.Sitemap["Root"]).toBeDefined();
            expect(this.Sitemap.Root).toBeDefined();
        });

        describe("Has all required properties for Root", function () {
            //beforeEach(function () {
            //    this.SitemapRoot = this.Sitemap.Root;
            //});

            //function RootPropertyDefinedTest( property) {
            //    it("- '" + property + "' is defined", function () {
            //        expect(this.SitemapRoot[property]).toBeDefined();
            //    });
            //}

            for (var item in ProperyList) {
                //RootPropertyDefinedTest(ProperyList[item]);
                PropertyDefinedTest("Root", ProperyList[item]);
            }
        });

        it("Root.parent should be null", function () {
            expect(this.Sitemap.Root.parent).toBeNull();
        });

        it("Root.children should have 7 items", function () {
            //(SitemapObj["TechNews"].id);
            expect(this.Sitemap.Root.children.length).toBe(7);
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
            expect(this.Sitemap.Root.id).toBe("home");
        });

    });

    describe("DataSvcObjects Constant", function () {
        var DataSvcObj;

        beforeEach(inject(function (DataSvcObjects) {
            DataSvcObj = DataSvcObjects;
        }));
    });

   


});

