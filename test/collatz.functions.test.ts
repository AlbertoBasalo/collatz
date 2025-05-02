import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { collatzFunctions } from "../src/collatz.functions.ts";

describe("Collatz Sequence", () => {
  it("should return the collatz sequence for 1", () => {
    const result = collatzFunctions.getSequenceFor(1);
    assert.deepEqual(result, [1]);
  });
  it("should return the collatz sequence for 2", () => {
    const result = collatzFunctions.getSequenceFor(2);
    assert.deepEqual(result, [2, 1]);
  });
  it("should return the collatz sequence for 3", () => {
    const result = collatzFunctions.getSequenceFor(3);
    assert.deepEqual(result, [3, 10, 5, 16, 8, 4, 2, 1]);
  });
  it("should return the collatz sequence for 4", () => {
    const result = collatzFunctions.getSequenceFor(4);
    assert.deepEqual(result, [4, 2, 1]);
  });
  it("should return the collatz sequence for 5", () => {
    const result = collatzFunctions.getSequenceFor(5);
    assert.deepEqual(result, [5, 16, 8, 4, 2, 1]);
  });
  it("should return the collatz sequence for 6", () => {
    const result = collatzFunctions.getSequenceFor(6);
    assert.deepEqual(result, [6, 3, 10, 5, 16, 8, 4, 2, 1]);
  });
  it("should return the collatz sequence for 7", () => {
    const result = collatzFunctions.getSequenceFor(7);
    assert.deepEqual(result, [7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1]);
  });
});