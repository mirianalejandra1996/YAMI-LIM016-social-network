export const auth = {
  currentUser: {
    uid: "fake-uid",
  },
};

export const setDoc = jest.fn((document, values) => Promise.resolve({values}));
export const doc = jest.fn(() => Promise.resolve({}));
export const db = {};

// export const changePasswordFirestore = jest.fn(() => {Promise.resolve({
//     new
// })})
