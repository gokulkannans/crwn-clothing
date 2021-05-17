import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyA3LtUF-VDZresQUPQPl5djjK9JSZW6whQ",
    authDomain: "crwn-db-23884.firebaseapp.com",
    projectId: "crwn-db-23884",
    storageBucket: "crwn-db-23884.appspot.com",
    messagingSenderId: "191199294397",
    appId: "1:191199294397:web:8b9f3e3b108d6aa8b198d4",
    measurementId: "G-X7RYTLCPVW"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error in creating user', error.message);
        }
    }
    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;