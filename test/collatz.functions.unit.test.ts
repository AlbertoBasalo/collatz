import assert from "node:assert/strict";
import { describe, it, mock } from "node:test";
import { collatzFunctions } from "../src/collatz.functions.ts";
import { mathFunctions } from "../src/math.functions.ts";
import { numberUtils } from "../src/number.utils.ts";

describe("Collatz Sequence UNIT", () => {
  const isEvenSpy = mock.method(numberUtils, 'isEven');
  const sumSpy = mock.method(mathFunctions, 'sum');
  it("should call is even 1 times for number 2", () => {
    collatzFunctions.getSequenceFor(2);
    assert.equal(isEvenSpy.mock.calls.length, 1);
  });
  it("should call sum 0 times for number 2", () => {
    collatzFunctions.getSequenceFor(2);
    assert.equal(sumSpy.mock.calls.length, 0);
  });
});