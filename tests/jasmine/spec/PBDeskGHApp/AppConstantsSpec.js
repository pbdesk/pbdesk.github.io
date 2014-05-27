(function () {
    

    describe("PBDeskGHApp App Constants:", function () {

        var SITEMAP = {};
        beforeEach(angular.mock.module("PBDeskGHApp"));

        describe("Sitemap Tests:", function () {

            var ProperyList = ['id', 'url', 'pgTitle', 'heading', 'crumbText', 'faIcon', 'ngFolder', 'controller', 'view', 'parent', 'children'];

            beforeEach(inject(function (Sitemap) {
                SITEMAP = Sitemap;
            }));


            function PropertyDefinedTest( nodeName, property) {               
                since("- '" + nodeName + '.' + property + "' is not defined")
                    .expect(SITEMAP[nodeName][property])
                    .toBeDefined();
            }

            function ParentValidTest(nodeToTest, expectedParent) {
                if (nodeToTest.id === 'home') {
                    since(nodeToTest.id + ' has invalid parent')
                     .expect(SITEMAP[nodeToTest.parent])
                     .toBeNull();
                }
                else {
                    since(nodeToTest.id + ' has invalid parent')
                        .expect(SITEMAP[nodeToTest.parent])
                        .toBe(expectedParent);
                }
            }

            function IdValidityTest(nodeToTest, nodename) {

                since('id for ' + nodename + '  is null')
                        .expect(nodeToTest.id)
                        .not.toBeNull();

                since('id for ' + nodename + '  has invalid length ')
                        .expect(nodeToTest.id.length)
                        .toBeGreaterThan(1);

            }

            function IdUniquenessTest(nodeToTest, nodename) {
                var counter = 0;
                var testId = nodeToTest.id;
                for (var item in SITEMAP) {
                    if (SITEMAP[item].id == testId) {
                        counter++;
                    }
                }
                since('id ' + testId + '  is not unuque')
                        .expect(counter)
                        .toBe(1);
            }
            function ParentValidityTest(nodeToTest, nodename) {
                if (nodeToTest.id === 'home') {

                }
                else {
                    since('ParentValidityTest-01 ' + nodename + ' has null parent')
                        .expect(nodeToTest.parent)
                        .not.toBeNull();

                    since('ParentValidityTest-02 ' + nodename + ' has invalid parent')
                        .expect(SITEMAP[nodeToTest.parent])
                        .toBeDefined();

                    var parentNode = SITEMAP[nodeToTest.parent];
                    since('ParentValidityTest-03 ' + nodename + ' has invalid parent')
                       .expect(parentNode.children.length)
                       .toBeGreaterThan(0);

                    since('ParentValidityTest-04 ' + nodename + ' has non matching parent')
                        .expect(parentNode.children)
                        .toContain(nodename);

                }
            }

            function ParentChildTest(nodeToTest) {
                for (var item in nodeToTest.children) {
                    var currentNode = SITEMAP[nodeToTest.children[item]];
                    ParentValidTest(currentNode, nodeToTest);
                    if (currentNode.children.length > 0) {
                        ParentChildTest(currentNode);
                    }
                }
            }


            it("Has Root item defined", function () {
                expect(SITEMAP["Root"]).toBeDefined();
                expect(SITEMAP.Root).toBeDefined();
            });

            it("Has all required properties for Root", function () {
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
                    for (var prop in ProperyList) {
                        PropertyDefinedTest(item, ProperyList[prop]);
                    }
                }
            });

            it("All ids are valid", function () {
                for (var item in SITEMAP) {
                    IdValidityTest(SITEMAP[item], item);
                }
            });

            it("All ids are unique", function () {
                for (var item in SITEMAP) {
                    IdUniquenessTest(SITEMAP[item], item);
                }
            });

            it("All items have valid parents", function () {
                for (var item in SITEMAP) {
                    ParentValidityTest(SITEMAP[item], item);
                }
            });

            it("Has Valid parent-child relationship defined on Sitemap", function () {
                ParentChildTest(SITEMAP.Root);                
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


