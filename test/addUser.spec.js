import { addUser } from '../src/app/firebase/firebase-data.js';
import { auth } from '../src/app/firebase/firebase-initializer.js';

jest.mock('../src/app/firebase/firebase-initializer.js');

describe('Testing AddUser firestore MOCK', () => {
  it(' should create a user if user is logged by google', () => {
    const user = auth;

    // no deberían servir de nada
    const name = '';
    const password = '';
    const fakeInfo = {
      user_birth: '',
      user_createdAt: 'fake-time',
      user_email: 'fake-email',
      user_id: 'fake-uid',
      user_logedBy: 'google',
      user_name: 'fake-name',
      user_password: null,
      user_photo: 'fake-photo',
    };

    addUser(user.currentUser, name, password)
      .then((res) => {
        expect(res.values).toEqual(fakeInfo);
      });
  });
});
