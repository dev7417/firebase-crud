import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'
// import { FirebaseError } from "firebase/app";
import Config  from "./Config";




firebase.initializeApp(Config)

const auth = firebase.auth()
const storage = firebase.storage();
const db = firebase.firestore();

export {auth, storage, db}
