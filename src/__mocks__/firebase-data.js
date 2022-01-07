export const db = {}
export const doc = jest.fn((db, collection, docId) => Promise.resolve({}))
export const updateDoc = jest.fn((doc, values) => Promise.resolve({values}))
