import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { numberUtils } from "../src/number.utils.ts";


/**
 * Should return true if the number is even
 * Should return false if the number is odd
 * Should return true if the number is odd
 * Should return false if the number is even
 * Should return true if the number is natural
 * Should return false if the number is not natural
 */
describe("Logic Module", () => {
  it("should return true if the number is even", () => {
    const result = numberUtils.isEven(2);
    assert.equal(result, true);
  });
  it("should return false if the number is odd", () => {
    const result = numberUtils.isEven(3);
    assert.equal(result, false);
  });
  it("should return true if the number is odd", () => {
    const result = numberUtils.isOdd(3);
    assert.equal(result, true);
  });
  it("should return false if the number is even", () => {
    const result = numberUtils.isOdd(2);
    assert.equal(result, false);
  });
  it("should return true if the number is natural", () => {
    const result = numberUtils.isNatural(1);
    assert.equal(result, true);
  });
  it("should return false if the number is not natural", () => {
    const result = numberUtils.isNatural(-1);
    assert.equal(result, false);
  });
}
);