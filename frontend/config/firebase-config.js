import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAvr67KjtRJ--RSJwjS9zfQsHF_8ylncmU',
  authDomain: 'video-lesson-b2bab.firebaseapp.com',
  projectId: 'video-lesson-b2bab',
  storageBucket: 'video-lesson-b2bab.appspot.com',
  messagingSenderId: '844694490398',
  appId: '1:844694490398:web:83e86049cec050bbc84d0f',
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {db};
