import { changePasswordFirestore } from '../src/app/firebase/firebase-data.js'
import { db, doc, updateDoc } from '../src/__mocks__/firebase-data.js'

jest.mock('../src/app/firebase/firebase-data.js')

describe ('changePasswordFirestore', async () => {
    it('funciona', async ()=>{
        const result = await changePasswordFirestore('fakeUserId', 'fakePassword')
        expect(result).toStrictEqual({user_password: 'fakePassword'})

        console.log(doc.mock)
        console.log(updateDoc.mock)
    })
    
    it('falla si no recibe argumentos', () => {

    })
})