import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDDoi9o_HTr-m3pbUVOJS_IvGe9iOOcUeY",
  authDomain: "gameflow-central-9fe00.firebaseapp.com",
  projectId: "gameflow-central-9fe00",
  storageBucket: "gameflow-central-9fe00.firebasestorage.app",
  messagingSenderId: "90170202937",
  appId: "1:90170202937:web:9771b7cd20be48c79466e8",
  measurementId: "G-TDH7CQS38D"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
