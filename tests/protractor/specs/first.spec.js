describe('Demo Test', function () {

    var ptor;
    beforeEach(function() {
        // before function
        ptor = protractor.getInstance();
        ptor.get('http://gh.PBDesk.com/');
    });

    it('First', function() {
        // test goes here
        var x = 'hello';
        expect(x).toEqual('hello');
    });
});