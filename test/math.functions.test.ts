import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { mathFunctions } from "../src/math.functions.ts";
/**
 * Should return the sum of two numbers
 * Should return the subtract  of two numbers
 * Should return the multiply of two numbers
 * Should return the divide of two numbers
 */
describe("Math Functions", () => {
  it("should return the sum of two numbers", () => {
    const result = mathFunctions.sum(1, 2);
    assert.equal(result, 3);
  });
  it("should return the subtract of two numbers", () => {
    const result = mathFunctions.subtract(2, 1);
    assert.equal(result, 1);
  });
  it("should return the mult of two numbers", () => {
    const result = mathFunctions.multiply(2, 2);
    assert.equal(result, 4);
  });
  it("should return the divide of two numbers", () => {
    const result = mathFunctions.divide(4, 2);
    assert.equal(result, 2);
  });
});
