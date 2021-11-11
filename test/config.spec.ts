import { defaultModuleName } from "../src/config";

describe("defaultModuleName", () => {
  it("it should be string", () => {
    expect(typeof defaultModuleName).toBe("string");
  });
  it("should return the word User", () => {
    expect(defaultModuleName).toBe("User");
  });
});
