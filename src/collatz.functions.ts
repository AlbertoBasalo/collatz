import { mathFunctions } from "./math.functions.ts";
import { numberUtils } from "./number.utils.ts";

const TERMINATOR = 1;
const COLLATZ_MULTIPLIER = 3;
const COLLATZ_ADDITION = 1;
const COLLATZ_DIVIDER = 2;

/**
 * Collatz sequence module.
 * @module collatzFunctions
 */
export const collatzFunctions = {
  /**
   * Returns the Collatz sequence for a given number.
   * @param number - The number to get the Collatz sequence for.
   * @returns An array containing the Collatz sequence.  
   */
  getSequenceFor(number: number): number[] {
    if (!numberUtils.isNatural(number)) {
      throw new Error("Number must be a natural (whole >=1) number.");
    }
    const sequence: number[] = [number];
    if (isTerminated(number)) {
      return sequence;
    }
    do {
      number = nextCollatz(number);
      sequence.push(number);
    } while (isValid(number));
    return sequence;
  }
}


function nextCollatz(number: number): number {
  if (numberUtils.isEven(number)) {
    return mathFunctions.divide(number, COLLATZ_DIVIDER);
  }
  const multiplied = mathFunctions.multiply(number, COLLATZ_MULTIPLIER);
  return mathFunctions.sum(multiplied, COLLATZ_ADDITION);
}

const isTerminated = (number: number): boolean => number === TERMINATOR;

const isValid = (number: number): boolean => isTerminated(number) === false;


