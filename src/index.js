//import functions from SDKs//
//creates firebase app that stores firbase app//
import { initializeApp } from "firebase/app";
//getter functions,
import { getAnalytics } from "firebase/analytics";
import { getAuth, 
    onAuthStateChanged, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    EmailAuthProvider,
    signOut,
    updateCurrentUser,
    deleteUser,
    //so user has to sign back in if they want 
    reauthenticateWithCredential,
    updateEmail,
    updatePassword,
} from "firebase/auth";

//import db here

import { getMessaging,
    getToken,
    onMessage,
} from "firebase/messaging";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const messaging = getMessaging(app);

// initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

//firbase configuration, returns a firebase app instance which allows the firebase sdk to connect to our specific firebase backend//
const firebaseConfig = {
    //config object goes here
};

//signs in user
// async function signIn() {
//     //signs into firebase with email and password and uses email as auth provider
//     var provider = new EmailAuthProvider();
//     await signInWithEmailAndPassword(getAuth(), provider);
// }
//signs user out
// function signOutUser() {
//     signOut(getAuth());
// }
//initialize authentication
// function initFirebaseAuth() {
//     //listens to auth state changes(triggers each sign in, sign out)
//     onAuthStateChanged(getAuth(), authStateObserver);
// }

//returns signed-in users display name
// function getUserName() {
//     return getAuth().currentUser.displayName;
// }