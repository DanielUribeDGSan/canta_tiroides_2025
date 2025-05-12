import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const app = initializeApp(firebaseConfig);

// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);

export const firebaseInitialization = () => {
  initializeApp(firebaseConfig);
};

export const storage = getStorage(app);
