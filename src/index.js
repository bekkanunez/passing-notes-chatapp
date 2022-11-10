//import functions from SDKs//
//creates firebase app that stores firbase app//
import { initializeApp } from "firebase/app";

import { getAuth, 
    onAuthStateChanged, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";

// import { getMessaging,
//     getToken,
//     onMessage,
// } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyCs1cBiUxFFoG5NS-Cx7x0hfnZui0F32UU",
    authDomain: "passing-notes-29428.firebaseapp.com",
    databaseURL: "https://passing-notes-29428-default-rtdb.firebaseio.com",
    projectId: "passing-notes-29428",
    storageBucket: "passing-notes-29428.appspot.com",
    messagingSenderId: "673359625270",
    appId: "1:673359625270:web:8389ceb82a4d5633d3ac97",
    measurementId: "G-F5LWHZ3LLV",
  };

// Initialize Firebase
initializeApp(firebaseConfig);


const auth = getAuth();
const user = auth.currentUser;
//signs user up
//Add username form back
//get query selector value
//Pass in result as parameter in promise
//add result under promise
const signUpBtn = document.getElementById('create-btn')
signUpBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const email = document.getElementById('create-email').value;
    const password = document.getElementById('create-pwd').value;
    const firstName = document.getElementById('create-first-name').value;
    const lastName = document.getElementById('create-last-name').value;
    console.log(email, password, firstName, lastName);
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // const displayName = user.firstName + user.lastName;
            console.log(userCredential.user + ' has successfully created an account.')
    })  .catch((err) => {
        // const errorMessage = document.createElement('p').innerHTML = err.message
        // password.appendChild(errorMessage);
    })
});


//logs user in
const loginBtn = document.querySelector('#login-btn')
loginBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const email = document.querySelector('#login-email').value
    const password = document.querySelector('#login-pwd').value
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        
        console.log(userCredential.user + 'is signed in')
    })
    .catch ((err) => {
        // const errorMessage = document.createElement('p').innerHTML = err.message
        // password.appendChild(errorMessage);
    })
})

//logs u ser out
//error somewhere
// const logoutBtn = document.querySelector('#logout')
// logoutBtn.addEventListener('click', (e) => {
//     e.preventDefault()
//     signOut(auth) 
//         .then (() => {
//         console.log('You have successfully signed out')
//     })
//     .catch((err) => {
//         const errorMessage = document.createElement('p').innerHTML = err.message
//         logoutBtn.appendChild(errorMessage);
//     })

// })
//



// auth.onAuthStateChanged(user => {
//     console.log(user);
//     if (user) {
//         console.log(user + ' has signed in');
//     } else console.log(user + ' has signed out');
// })




// const messaging = getMessaging(app);
// const token = getToken(app);

// messaging.requestPermission()
//     .then(() => {
//         console.log('Access Granted');
//          return messaging.token();
//     })
//     .then(() => {
//         //save to db
//         console.log(token);
//     }) .catch((err) => {
//         console.log ('Access Denied')
//     })
// //if webpage is open, notification will be sent on the webpage
// messaging.onMessage((payload)=> {
//     console.log('')
// });
