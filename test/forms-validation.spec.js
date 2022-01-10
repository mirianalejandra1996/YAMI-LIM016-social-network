import {
  validate_field,
  validate_password,
  timeSince,
  validate_email,
  // } from "../helpers/forms-validation.js";
} from "../src/app/helpers/forms-validation.js";

describe("validate_field function", () => {
  it("should return a boolean (false) if value = '' ", () => {
    expect(validate_field("")).toBe(false);
  });

  it("should return a boolean (false) if value is null", () => {
    expect(validate_field(null)).toBe(false);
  });

  it("should return a boolean (true) if value has a string = 'anything'", () => {
    expect(validate_field("anything")).toBe(true);
  });

  it("should return a boolean (false) if value has a string with spaces  ('   ') ", () => {
    expect(validate_field("   ")).not.toBe(true);
  });
});

describe("validate_password function", () => {
  it("should return a boolean (false) if value is a string = '123456' (string with 6 characters) ", () => {
    expect(validate_password("123456")).toBe(true);
  });

  it("should return a boolean (false) if value is null", () => {
    expect(validate_password(null)).toBe(false);
  });

  it("should return a boolean (true) if value is a string = 'a23456f8901e345_7*90' (string with 20 characters)", () => {
    expect(validate_password("a23456f8901e345_7*90")).not.toBe(true);
  });

    it("should return a boolean (false) if value is a string with spaces  ('   ') ", () => {
      expect(validate_password("   ")).toBe(false);
    });

    it("should return a boolean (false) if value is a  string ' 3_*yami123                  ' ", () => {
      expect(validate_password(' 3_*yami123                  ')).toBe(true);
    });


    it("should return a boolean (false) if value is a number =  765812376  ", () => {
      expect(validate_password(765812376)).toBe(true);
    });

});
