// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSEZGflR0TamEwSub4_8aZISD7vbZN7eI",
    authDomain: "screening-apl-player.firebaseapp.com",
    projectId: "screening-apl-player",
    storageBucket: "screening-apl-player.appspot.com",
    messagingSenderId: "944707885504",
    appId: "1:944707885504:web:76887c2ed41ba651171025"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

