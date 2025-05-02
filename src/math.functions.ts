/**
 * This module exports a set of mathematical functions.
 * @module mathFunctions
 */
export const mathFunctions = {
  sum(a: number, b: number) {
    return a + b;
  },
  subtract(a: number, b: number) {
    return this.sum(a, -b);
  },
  multiply(a: number, b: number) {
    return a * b;
  },
  divide(a: number, b: number) {
    return a / b;
  }
};


