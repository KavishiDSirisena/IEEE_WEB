// firebaseConfig.js
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAnwT3ur2RSJqpBsacGiSACtsNmfT8Yw9g",
  authDomain: "ieeecsweb.firebaseapp.com",
  projectId: "ieeecsweb",
  storageBucket: "ieeecsweb.appspot.com",
  messagingSenderId: "43959963974",
  appId: "1:43959963974:web:aae6ad335c2cb5f2331547",
  measurementId: "G-1YT9JPVD38",
  databaseURL: 'https://ieeecsweb-default-rtdb.firebaseio.com'
};

const app = initializeApp(firebaseConfig);

export default app;
