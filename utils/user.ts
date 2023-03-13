import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase.config";

async function signup(
    email: string, 
    password: string,
    firstName: string, 
    lastName: string,
    phoneNumber: string
) {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
    } catch (error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
    }
}

async function signin(email: string, password: string) {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        const user = res.user;
    } catch (error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
    }
}

export {signup, signin};