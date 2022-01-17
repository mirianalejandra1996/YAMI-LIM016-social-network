/**
 * @jest-environment jsdom
 */

import {
  Login,
} from '../src/app/components/Login';

import {
  // eslint-disable-next-line import/named
  signInWithPopup,
} from '../src/app/firebase/firebase-auth.js';

jest.mock('../src/app/firebase/firebase-auth.js');
jest.mock('../src/app/firebase/firebase-initializer.js');

describe('Testing function signInWithPopup of Firebase Auth', () => {
  beforeAll((done) => {
    document.body.id = 'root';
    document.body.innerHTML = '';
    document.body.append(Login());
    done();
  });

  it("should return an user id when button 'SignIn with Google' is clicked", (done) => {
    const btn = document.getElementById('btn-g');
    const eventClick = new Event('click');
    btn.dispatchEvent(eventClick);
    const id = 'fake-id-user';
    const id2 = 'fake-id-user-2';

    signInWithPopup()
      .then((data) => {
        expect(data).toBe(id);
        expect(data).not.toBe(id2);
        done();
      })
      .catch(done);
  });
});
