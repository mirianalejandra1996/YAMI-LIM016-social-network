// export const enviarIngreso = jest.fn((email, password) =>
//   Promise.resolve({
//     user: {
//       emailVerified: true,
//     },
//   })
// );
export const enviarIngreso = jest.fn((email, password) => Promise.resolve());

export const loginGoogle = jest.fn(() => Promise.resolve());
export const sendPasswordResetEmail = jest.fn(() => Promise.resolve());

// export auth = () => Promise.resolve();
