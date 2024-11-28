const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of two integers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round numbers before adding (case: first argument)', () => {
    assert.strictEqual(calculateNumber(1.4, 3), 4);
    assert.strictEqual(calculateNumber(1.5, 3), 5);
  });

  it('should round numbers before adding (case: second argument)', () => {
    assert.strictEqual(calculateNumber(1, 3.4), 4);
    assert.strictEqual(calculateNumber(1, 3.5), 5);
  });

  it('should round both numbers before adding', () => {
    assert.strictEqual(calculateNumber(1.4, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle negative numbers correctly', () => {
    assert.strictEqual(calculateNumber(-1.4, -3.7), -5);
    assert.strictEqual(calculateNumber(-1.5, -3.7), -6);
  });
});

