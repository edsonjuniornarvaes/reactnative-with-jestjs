const areaOfSquare = require('../');

describe('Calculate area of square', () => {
  test('passed the value 3, it should return 9', () => {
    expect(areaOfSquare(3)).toBe(9);
    test('passed the value 17, it should return 289', () => {
      expect(areaOfSquare(17)).toBe(289);
    });
  });
});