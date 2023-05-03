import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD1Rh_eT3HX-HAAG1oEGkLqhd2OKMWD2BA",
  authDomain: "task-tracker-c5b99.firebaseapp.com",
  projectId: "task-tracker-c5b99",
  storageBucket: "task-tracker-c5b99.appspot.com",
  messagingSenderId: "827435117645",
  appId: "1:827435117645:web:641216ee3ad98120518004",
  measurementId: "G-5DHG1B92TH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
