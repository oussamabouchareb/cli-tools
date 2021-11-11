import { capitalizeFirstLetter } from "../src/utils";

describe("capitalizeFirstLetter", () => {
  it("returns a word with its first letter capitalized", () => {
    const test = capitalizeFirstLetter("user");
    expect(test).toBe("User");
  });
  it("if passed a sentence it should remove all spaces and capitalize first letter", () => {
    const test = capitalizeFirstLetter("user name");
    expect(test).toBe("Username");
  });
  it("if passed a sentence it should remove all spaces and capitalize first letter and make everything else lowercase", () => {
    const test = capitalizeFirstLetter("user Name");
    expect(test).toBe("Username");
  });
  it("if passed a work in camel case it should lowercase it first then capitalize first letter", () => {
    const test = capitalizeFirstLetter("userName");
    expect(test).toBe("Username");
  });
});
