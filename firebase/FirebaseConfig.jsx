import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCvvf3PgCuCFlHESADhJbGaX6nTENJv4ms",
    authDomain: "f-pro-7d54a.firebaseapp.com",
    projectId: "f-pro-7d54a",
    storageBucket: "f-pro-7d54a.appspot.com",
    messagingSenderId: "234337541873",
    appId: "1:234337541873:web:7a82be431678f55b4ad350",
    measurementId: "G-64FWVRNCKQ"
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export { fireDB, auth }