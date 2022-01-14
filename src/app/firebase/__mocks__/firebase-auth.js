export const enviarIngreso = jest.fn((email, password) =>
  Promise.resolve({
    user: {
      emailVerified: true,
    },
  })
);

export const loginGoogle = () => Promise.resolve();
export const sendPasswordResetEmail = () => Promise.resolve();

// export auth = () => Promise.resolve();
