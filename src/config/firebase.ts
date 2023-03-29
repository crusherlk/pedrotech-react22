import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCekaoR4SGsnk9P9DN22oapdi1Ve4Wpr_Y",
  authDomain: "pedrotech-react22.firebaseapp.com",
  projectId: "pedrotech-react22",
  storageBucket: "pedrotech-react22.appspot.com",
  messagingSenderId: "548480219654",
  appId: "1:548480219654:web:dd5fa3cece8d11478ca187",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
