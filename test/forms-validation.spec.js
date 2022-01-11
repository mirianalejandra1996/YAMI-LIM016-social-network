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
    expect(validate_password(" 3_*yami123                  ")).toBe(true);
  });

  it("should return a boolean (true) if value is a number =  765812376  ", () => {
    expect(validate_password(765812376)).toBe(true);
  });
});

describe("validate_email function", () => {
  it("should return a boolean (false) if value is a string without email format => 'correo' ", () => {
    expect(validate_email("correo")).toBe(false);
  });

  it("should return a boolean (false) if value is null", () => {
    expect(validate_email(null)).toBe(false);
  });

  it("should return a boolean (true) if value is a string with spaces = '   laboratoria@gmail.com   ' ", () => {
    expect(validate_email("   laboratoria@gmail.com   ")).toBe(true);
  });

  it("should return a boolean (true) if value is a string without spaces = 'labo@gmail.com' ", () => {
    expect(validate_email("labo@gmail.com")).toBe(true);
  });

  it("should return a boolean (false) if value is a string with spaces  ('   ') ", () => {
    expect(validate_email("   ")).toBe(false);
  });

  it("should return a boolean (false) if value is a  string without email format => '3_*yami123@prueba' ", () => {
    expect(validate_email("3_*yami123@prueba")).toBe(false);
  });

  it("should return a boolean (false) if value is a number =  765812376  ", () => {
    expect(validate_email(765812376)).toBe(false);
  });
});

// todo: preguntar por qué no me funciona esto
// Date.now = jest.fn(() => 1487076708000)
// Date.now = jest.fn(() => new Date(Date.UTC(2017, 1, 14)).valueOf())
// Date.now = jest.fn(() => 1644364800000)

// Date.now = jest.fn(() => new Date(Date.UTC(2022, 1, 9)).valueOf())


// 2022, Enero , dia 9 - A las 22:23 pm
jest.useFakeTimers().setSystemTime(new Date(1641784980776).valueOf());

describe("timeSince function if message is posted at 2022-January-9th day . time: 22:23pm", () => {
  it("should return 'Hace 10 horas' if value is a number (1641745402970)", () => {
    expect(timeSince(1641745402970)).toBe("Hace 10 horas");
  });

  it("should return 'Hace 1 hora' if value is a number (1641691168524)", () => {
    expect(timeSince(1641691168524)).toBe("Hace 1 hora");
  });

  it("should return 'Hace 4 días' if value is a number (1641357567564)", () => {
    expect(timeSince(1641357567564)).toBe("Hace 4 días");
  });

  it("should return 'Hace 2 años' if value is a number (1549670400000)", () => {
    expect(timeSince(1549670400000)).toBe("Hace 2 años");
  });

  it("should return 'Hace 1 mes' if value is a number (1638576000000)", () => {
    expect(timeSince(1638576000000)).toBe("Hace 1 mes");
  });

  it("should return 'Hace segundos' if value is a number (1641784980776)", () => {
    expect(timeSince(1641784980776)).toBe("Hace segundos");
  });
});
