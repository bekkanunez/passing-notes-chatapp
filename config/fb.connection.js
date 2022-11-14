// const {initializeApp} = require('firebase/app')
// const {getFirestore} = require('firebase/firestore/lite')
// const {getAuth} = require('firebase/auth')
// const firebaseConfig = {
//   apiKey: "AIzaSyCs1cBiUxFFoG5NS-Cx7x0hfnZui0F32UU",
//   authDomain: "passing-notes-29428.firebaseapp.com",
//   databaseURL: "https://passing-notes-29428-default-rtdb.firebaseio.com",
//   projectId: "passing-notes-29428",
//   storageBucket: "passing-notes-29428.appspot.com",
//   messagingSenderId: "673359625270",
//   appId: "1:673359625270:web:8389ceb82a4d5633d3ac97",
//   measurementId: "G-F5LWHZ3LLV",
//   };
// const app2 = initializeApp(firebaseConfig);
// const auth = getAuth(app2);
// const db = getFirestore(app2);
// getMessages(db)
// getUsers(db)

// Get a list of users from database
// async function getUsers(db) {
//     const userCol = collection(db, 'users');
//     const userSnapshot = await getDocs(userCol);
//     const userList = userSnapshot.docs.map(doc => doc.data());
//     console.log(userList);
// }
// async function getMessages(db) {
//     const messagesCol = collection(db, 'users');
//     const messagesSnapshot = await getDocs(messagesCol);
//     const messagesList = messagesSnapshot.docs.map(doc => doc.data());
//     console.log(messagesList);
// }
// const signUpBtn = document.getElementById("create-btn");
// async function createUser(auth) {
//     const firstName = document.getElementById("create-first-name").value;
//     const email = document.getElementById("create-email").value;
//     const password = document.getElementById("create-pwd").value;
//     await createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             //     Signed in
//             console.log(userCredential.user);
//         })
//         .then((response) => {
//             response = fetch('/api/messages', {
//                 method: 'POST',
//                 body: JSON.stringify({ email, password, firstName }),
//                 headers: { 'Content-Type': 'application/json' },
//             })
//             if (response.ok) {
//                 document.location.replace("/");
//             }
//             else {
//                 alert("Failed to log in.");
//             }
//         })
//         .catch((error) => {
//             console.log(error.message)
//             // ..
//         });
// }
// signUpBtn.addEventListener('click', createUser);

// module.exports = {getUsers, getMessages, createUser}

// // //logs user in
// const loginBtn = document.getElementById('login-btn')
// loginBtn.addEventListener('click', (e) => {
//     e.preventDefault()
//     const email = document.getElementById('login-email').value;
//     const password = document.getElementById('login-pwd').value;
//     signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {

//         console.log(userCredential.user + 'is signed in')
//     })
//     .then((response) => {
//         response = fetch('/api/messages', {
//             method: 'GET',
//             body: JSON.stringify({ email, password, firstName }),
//             headers: { 'Content-Type': 'application/json' },
//         })
//         if (response.ok) {
//             document.location.replace("/");
//           }
//           else {
//             alert("Failed to log in.");
//           }
//     })
// })

// const logoutBtn = document.getElementById('logout')
// logoutBtn.addEventListener('click', (e) => {
//     e.preventDefault()
//     signOut(auth)
//     .then((response) => {
//       response = fetch('/api/login', {
//           method: 'POST',
//           body: JSON.stringify({ email, password, }),
//           headers: { 'Content-Type': 'application/json' },
//       })
//       if (response.ok) {
//           document.location.replace("/");
//         }
//         else {
//           alert("Failed to sign out");
//         }
//   })
// })

