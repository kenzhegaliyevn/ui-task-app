import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBQ3BADiAM4kjTLGF9_fAZr9XMvFnOiT_A',
  authDomain: 'task-app-a8af3.firebaseapp.com',
  projectId: 'task-app-a8af3',
  storageBucket: 'task-app-a8af3.appspot.com',
  messagingSenderId: '363313377247',
  appId: '1:363313377247:web:9ecf01eed99be8a074de6a',
  measurementId: 'G-8RWE9EGL99',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
