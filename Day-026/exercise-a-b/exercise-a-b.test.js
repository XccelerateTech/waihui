const testBox = require('./exercise').testBox;

describe('Testing the test suite Jest', function() {
    test('I am in the test block 1', function() {
        expect(testBox(1)).toBe('I am in the test block 1');
    });
    test('I am in the test block 2', function() {
        expect(testBox(2)).toBe('I am in the test block 2');
    });
    test('I am in the test block 3', function() {
        expect(testBox(3)).toBe('I am in the test block 3');
    });
    test('I am in the test block 4', function() {
        expect(testBox(4)).toBe('I am in the test block 4');
    });
    test('I am in the test block 5 but I fail', function() {
        console.log('I am the test block five but I fail');
        throw new Error();
    });
});