
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCjQSllsL1iJ0yZ0t3Ha6dyzy8_ySjBjIo",
  authDomain: "nyrox-9e344.firebaseapp.com",
  projectId: "nyrox-9e344",
  storageBucket: "nyrox-9e344.appspot.com",
  messagingSenderId: "310857637166",
  appId: "1:310857637166:web:43607395fd1d7786cc6ebf",
  measurementId: "G-LS629X59LX"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {db,auth} 