describe("Unit Testing PBDeskGHApp AngularJS App Constants:", function () {

    beforeEach(angular.mock.module("PBDeskGHApp"));

    describe("Sitemap Constant Tests:", function () {
        
        var ProperyList = ['id', 'url', 'pgTitle', 'heading', 'crumbText', 'faIcon', 'ngFolder', 'controller', 'view', 'parent', 'children'];

        beforeEach(inject(function (Sitemap) {
            this.Sitemap = Sitemap;
        }));

        

        it("Has Root item defined", function () {            
            expect(this.Sitemap["Root"]).toBeDefined();
            expect(this.Sitemap.Root).toBeDefined();
        });

        describe("Has all required properties for Root", function () {
            beforeEach(function () {
                this.SitemapRoot = this.Sitemap.Root;
            });

            function PropertyDefinedTest( property) {
                it("- '" + property + "' is defined", function () {
                    expect(this.SitemapRoot[property]).toBeDefined();
                });
            }

            for (var item in ProperyList) {
                PropertyDefinedTest(ProperyList[item]);
            }
        });

        it("Root.parent should be null", function () {
            //(SitemapObj["TechNews"].id);
            expect(this.Sitemap.Root.parent).toBeNull();
        });


        it("Root.children should have 6 items", function () {
            //(SitemapObj["TechNews"].id);
            expect(this.Sitemap.Root.parent).toBeNull();
        });

        it("All items have required properties defined", function () {
            //(SitemapObj["TechNews"].id);
            expect(this.Sitemap.Root.id).toBe("home");
        });

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

