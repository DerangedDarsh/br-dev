// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBxUk7xzPuDJFcwS6SzVeNbOdOlncZOTkU',
  authDomain: 'bloody-rooster.firebaseapp.com',
  projectId: 'bloody-rooster',
  storageBucket: 'bloody-rooster.appspot.com',
  messagingSenderId: '225500835313',
  appId: '1:225500835313:web:ec99805342b9301970e850',
  measurementId: 'G-Y1BGQMP73T',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
