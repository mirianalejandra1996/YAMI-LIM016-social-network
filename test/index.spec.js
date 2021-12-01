// importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';
// import { myFunction } from '../src/lib/index';
import { myFunction } from '../spa/app/index';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});
