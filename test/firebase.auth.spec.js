import { olvideContrasena } from '../src/app/firebase/firebase-auth';

jest.mock('../src/app/firebase/firebase-initializer')

describe('olvide contrasena', () => {
    it('funciona',() => {
        const result=olvideContrasena();

    })

})