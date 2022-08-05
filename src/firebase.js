import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBNRGHZieMGPB_QJmmvdiH6OxbmxoYHDzU",
  authDomain: "galaxy-arena-1a522.firebaseapp.com",
  projectId: "galaxy-arena-1a522",
  storageBucket: "galaxy-arena-1a522.appspot.com",
  messagingSenderId: "899058055844",
  appId: "1:899058055844:web:d66ba50a1354f167cd8431",
  measurementId: "G-RS9YTDYF6C"
};
// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default (analytics);