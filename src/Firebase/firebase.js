import { getSelectionRange } from "@testing-library/user-event/dist/utils";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB0kG_f8NLp5FrV8uO-y2_SOnYIgcdwrhg",
    authDomain: "fir-0-38e7f.firebaseapp.com",
    projectId: "fir-0-38e7f",
    storageBucket: "fir-0-38e7f.appspot.com",
    messagingSenderId: "505616883364",
    appId: "1:505616883364:web:621c5864e3503111695031",
    measurementId: "G-E8N83J8MWM"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getSelectionRange(app);

export { app, firestore, storage }