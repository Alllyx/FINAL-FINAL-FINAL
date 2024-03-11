import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB-H_pZs0Z_ZF5n2bujqli68lKDHh2al8",
  authDomain: "netflix-clone-project-828a7.firebaseapp.com",
  projectId: "netflix-clone-project-828a7",
  storageBucket: "netflix-clone-project-828a7.appspot.com",
  messagingSenderId: "783423784569",
  appId: "1:783423784569:web:d1fc2d1f1939d09f65b6a8",
  measurementId: "G-RZYPV2KY24"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
