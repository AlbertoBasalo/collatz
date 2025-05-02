import { sum } from "./math.functions";
import { describe, it } from "node:test";
import assert from "node:assert/strict";

describe("Math Functions", () => {
    it("should return the sum of two numbers", () => {
        const result = sum(1, 2);
        assert.equal(result, 3);
    });
});
