// importamos la funcion que vamos a testear
import { myFunction } from '../src/app/index.js';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});
