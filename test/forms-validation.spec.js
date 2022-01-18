import {
  validateField,
  validatePassword,
  timeSince,
  validateEmail,
} from '../src/app/helpers/forms-validation.js';

describe('validateField function', () => {
  it("should return a boolean (false) if value = '' ", () => {
    expect(validateField('')).toBe(false);
  });

  it('should return a boolean (false) if value is null', () => {
    expect(validateField(null)).toBe(false);
  });

  it("should return a boolean (true) if value has a string = 'anything'", () => {
    expect(validateField('anything')).toBe(true);
  });

  it("should return a boolean (false) if value has a string with spaces  ('   ') ", () => {
    expect(validateField('   ')).not.toBe(true);
  });
});

describe('validatePassword function', () => {
  it("should return a boolean (false) if value is a string = '123456' (string with 6 characters) ", () => {
    expect(validatePassword('123456')).toBe(true);
  });

  it('should return a boolean (false) if value is null', () => {
    expect(validatePassword(null)).toBe(false);
  });

  it("should return a boolean (true) if value is a string = 'a23456f8901e345_7*90' (string with 20 characters)", () => {
    expect(validatePassword('a23456f8901e345_7*90')).not.toBe(true);
  });

  it("should return a boolean (false) if value is a string with spaces  ('   ') ", () => {
    expect(validatePassword('   ')).toBe(false);
  });

  it("should return a boolean (false) if value is a  string ' 3_*yami123                  ' ", () => {
    expect(validatePassword(' 3_*yami123                  ')).toBe(true);
  });

  it('should return a boolean (true) if value is a number =  765812376  ', () => {
    expect(validatePassword(765812376)).toBe(true);
  });
});

describe('validateEmail function', () => {
  it("should return a boolean (false) if value is a string without email format => 'correo' ", () => {
    expect(validateEmail('correo')).toBe(false);
  });

  it('should return a boolean (false) if value is null', () => {
    expect(validateEmail(null)).toBe(false);
  });

  it("should return a boolean (true) if value is a string with spaces = '   laboratoria@gmail.com   ' ", () => {
    expect(validateEmail('   laboratoria@gmail.com   ')).toBe(true);
  });

  it("should return a boolean (true) if value is a string without spaces = 'labo@gmail.com' ", () => {
    expect(validateEmail('labo@gmail.com')).toBe(true);
  });

  it("should return a boolean (false) if value is a string with spaces  ('   ') ", () => {
    expect(validateEmail('   ')).toBe(false);
  });

  it("should return a boolean (false) if value is a  string without email format => '3_*yami123@prueba' ", () => {
    expect(validateEmail('3_*yami123@prueba')).toBe(false);
  });

  it('should return a boolean (false) if value is a number =  765812376  ', () => {
    expect(validateEmail(765812376)).toBe(false);
  });
});

// 2022, Enero , dia 9 - A las 22:23 pm
jest.useFakeTimers().setSystemTime(new Date(1641784980776).valueOf());

describe('timeSince function if message is posted at 2022-January-9th day . time: 22:23pm', () => {
  it("should return 'Hace 10 horas' if value is a number (1641745402970)", () => {
    expect(timeSince(1641745402970)).toBe('Hace 10 horas');
  });

  it("should return 'Hace 1 hora' if value is a number (1641691168524)", () => {
    expect(timeSince(1641691168524)).toBe('Hace 1 hora');
  });

  it("should return 'Hace 4 días' if value is a number (1641357567564)", () => {
    expect(timeSince(1641357567564)).toBe('Hace 4 días');
  });

  it("should return 'Hace 2 años' if value is a number (1549670400000)", () => {
    expect(timeSince(1549670400000)).toBe('Hace 2 años');
  });

  it("should return 'Hace 1 mes' if value is a number (1638576000000)", () => {
    expect(timeSince(1638576000000)).toBe('Hace 1 mes');
  });

  it("should return 'Hace segundos' if value is a number (1641784980776)", () => {
    expect(timeSince(1641784980776)).toBe('Hace segundos');
  });
});
