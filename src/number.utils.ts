/**
 * This module contains utility functions for logic operations.
 * @module numberUtils
 */
export const numberUtils = {
  isEven(number: number) {
    return number % 2 === 0
  },
  isOdd(number: number) {
    return this.isEven(number) === false
  },
  isWhole(number: number) {
    return number % 1 === 0
  },
  isPositive(number: number) {
    return number > 0
  },
  isNatural(number: number) {
    return this.isWhole(number) && this.isPositive(number);
  }
}



/**
 * 

export const numberUtils = {
  isEven: (number: number) => number % 2 === 0,
  isOdd: (number: number) => numberUtils.isEven(number) === false,
  isWhole: (number: number) => number % 1 === 0,
  isPositive: (number: number) => number > 0,
  isNatural: (number: number) =>
    numberUtils.isWhole(number) && numberUtils.isPositive(number)
}
 */