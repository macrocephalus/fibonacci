const functionalFibonachi = require('../src/functionalFibonachi');
const assert = require("assert");

//console.log(functionalFibonachi.startFibonachi(5))

describe("integration test", function() {
    it("in parametr", function() {
        let rez = functionalFibonachi.startFibonachi(7);
        assert.equal(rez, 13);
    });
    it("test error", function() {
        const expectedError = new Error('Expected incorrect index');

        assert.throws(() => {
            functionalFibonachi.startFibonachi(-5);
        }, expectedError);
    });
});