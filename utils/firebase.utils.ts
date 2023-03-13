import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, doc, getDocs,onSnapshot } from "firebase/firestore";
import {set,ref} from "firebase/database";
import { auth, db, rtDb } from "./firebase.config";
type User = {
    email: string, 
    password: string,
    firstName: string, 
    lastName: string,
    phoneNumber: string
}
async function addDriver(
    {email,password,firstName,lastName,phoneNumber}: User
) {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        await addDoc(collection(db, '/driver'), {
         firstName,
         lastName,
         phoneNumber,
         email,
         role: 'driver',
        });
        const driver = res.user;
        return driver;
    } catch (error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
    }
}
async function getCollectionDatas(path: string) {
    const data: User[] = [];
    let result = [];
    try {
        const res = (await getDocs(collection(db,path))).forEach(item => data.push(item?.data()));
        data.map(async(driver) => (
            onSnapshot(doc(db,'driver',driver.docid), async (doc) => {
                await result.push(doc.data())
            })
        ));
        return data
    } catch (error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
    }
}


export {addDriver, getCollectionDatas};