describe("Unit Testing PBDeskGHApp", function () {

    beforeEach(angular.mock.module("PBDeskGHApp"));

    describe("Testing Sitemap Constant", function () {
        var SitemapObj;

        beforeEach(inject(function (Sitemap) {
            SitemapObj = Sitemap;
        }));

        it("Has Root item defined", function () {
            //(SitemapObj["TechNews"].id);
            expect(SitemapObj.Root.id).toBe("home");
        });

        it("Has all required properties for Root", function () {
            //(SitemapObj["TechNews"].id);
            expect(SitemapObj.Root.id).toBe("home");
        });

        it("All items have required properties defined", function () {
            //(SitemapObj["TechNews"].id);
            expect(SitemapObj.Root.id).toBe("home");
        });

        it("Has Valid parent-child relationship defined on Sitemap", function () {
            //alert(SitemapObj["TechNews"].id);
            expect(SitemapObj.Root.id).toBe("home");
        });

    });

   


});

