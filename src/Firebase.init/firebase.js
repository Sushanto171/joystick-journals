import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtCwB6GFFvLB2Qiz_NUoum9Z5rL2t_Opw",
  authDomain: "joystick-journals.firebaseapp.com",
  projectId: "joystick-journals",
  storageBucket: "joystick-journals.firebasestorage.app",
  messagingSenderId: "18241074142",
  appId: "1:18241074142:web:5f952e5d804553f694234f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
