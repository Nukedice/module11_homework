const getPercents = require('./task2.js');

describe('calculates the percentage of the number', () => {
    it ('should calculate correctly and corner', () => {
        expect(getPercents(30, 200)).toBe(60);
        expect(getPercents(40, 0)).toBe(0);
        expect(getPercents(0, 2)).toBe(0);
    })
});
