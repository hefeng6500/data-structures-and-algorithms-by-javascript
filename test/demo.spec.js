import "mocha";
import { expect } from "chai";
import { test } from "../src";

describe("Test Demo", () => {
  it("first item", function() {
    expect(test(1, 1)).to.equal(2);
  });
});
