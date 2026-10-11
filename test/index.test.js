import assert from "node:assert/strict";
import { test } from "node:test";
import { formatMoney } from "../src/index.js";

test("formats cents as dollars", () => {
  assert.equal(formatMoney(12345), "$123.45");
});
