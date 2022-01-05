import { initializeApp, FirebaseApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

import { config } from 'config'
export { uploadBytes, uploadString, getDownloadURL, uploadBytesResumable, deleteObject, listAll } from 'firebase/storage'

let firebaseApp: FirebaseApp | undefined

if (!getApps().length) {
  firebaseApp = initializeApp(config.FIREBASE.INIT_APP)
}

export const db = getFirestore(firebaseApp)
export const storage = getStorage(firebaseApp)
export const firebaseAuth = getAuth(firebaseApp)
