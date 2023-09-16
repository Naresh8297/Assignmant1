
import firebase from 'firebase/app';
import 'firebase/auth'; 

const firebaseConfig = {
 
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
