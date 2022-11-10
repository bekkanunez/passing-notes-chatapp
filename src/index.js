//import functions from SDKs//
//creates firebase app that stores firbase app//
import { initializeApp } from "firebase/app";

import { getAuth, 
    onAuthStateChanged, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";


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
        
     }) //.then((response) => {
    //         response = fetch('/api/member/login', {
    //             method: 'POST',
    //             body: JSON.stringify({ email, password, firstName, lastName }),
    //             headers: { 'Content-Type': 'application/json' },
    //         })
    //         if (response.ok) {
    //             document.location.replace("/");
    //           } 
    //     })
        .catch((err) => {
            console.log(err.message)
        // const errorMessage = document.createElement('p').innerHTML = err.message
        // password.appendChild(errorMessage);
        })
})



//logs user in
const loginBtn = document.getElementById('#login-btn')
loginBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const email = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-pwd').value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        
        console.log(userCredential.user + 'is signed in')
    })//if this doesnt work add if after .then
    // .then((response) => {
    //     response = fetch('/api/member/login', {
    //         method: 'POST',
    //         body: JSON.stringify({ email, password, }),
    //         headers: { 'Content-Type': 'application/json' },
    //     })
    //     if (response.ok) {
    //         document.location.replace("/");
    //       } 
    // })
    .catch ((err) => {
        console.log(err.message)
        // const errorMessage = document.createElement('p').innerHTML = err.message
        // password.appendChild(errorMessage);
    })
})

//logs u ser out
const logoutBtn = document.getElementById('logout')
logoutBtn.addEventListener('click', (e) => {
    e.preventDefault()
    signOut(auth) 
        .then (() => {
        console.log('You have successfully signed out')
    })
    .catch((err) => {
        console.log(err.message);
        // const errorMessage = document.createElement('p').innerHTML = err.message
        // logoutBtn.appendChild(errorMessage);
    })

})


// const displayName = document.getElementById('welcome').innerHTML = 'Welcome: ' + firstName.user;


// auth.onAuthStateChanged(user => {
//     console.log(user);
//     if (user) {
//         console.log(user + ' has signed in');
//     } else console.log(user + ' has signed out');
// })




