import firebase from "./firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBidDEXzW163g_lKfTLTFefbCO7kqc-q5M",
  authDomain: "whatsapp-clone-487ce.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-487ce-default-rtdb.firebaseio.com",
  projectId: "whatsapp-clone-487ce",
  storageBucket: "whatsapp-clone-487ce.appspot.com",
  messagingSenderId: "374412652055",
  appId: "1:374412652055:web:9323735bdebc70a6c3b652",
  measurementId: "G-8YK71TBELQ"
};

const firebaseApp = firebase.initializeApp
(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
