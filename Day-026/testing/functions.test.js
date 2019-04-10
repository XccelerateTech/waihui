const functions = require('./functions');

describe('Testing on add function', function() {
    test('10 + 10 = 20', function() {
        expect(functions.add(10, 10)).toBe(20);
    })
    test('200 + 30 = 230', function() {
        expect(functions.add(200, 30)).toBe(230);
    })
})

describe('Tesing on double function', function() {
    test('double 100 is 200', function() {
        expect(functions.double(100)).toBe(200);
    })
    test('double 370 is 740', function() {
        expect(functions.double(370)).toBe(740);
    })
})

describe('Testing on area function', function() {
    test('40 * 50 = 2000', function() {
        expect(functions.area(40, 50)).toBe(2000);
    })
    test('570 * 840 = 478800', function() {
        expect(functions.area(570, 840)).toBe(478800);
    })
})