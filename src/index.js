console.log(firebase);
const auth = firebase.auth();
const signUpBtn = document.getElementById("create-btn");
const firstName = document.getElementById("create-first-name").value;
const email = document.getElementById("create-email").value;
const password = document.getElementById("create-pwd").value;

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      //     Signed in
      var user = userCredential.user;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
});

// signUpBtn.onclick = () => auth.createUserWithEmailAndPassword(email, password)

auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;

    var uid = user.uid;
    var providerData = user.providerData;
    // ...
  } else {
    // User is signed out.
    // ...
  }
});

// const db = firebase.firestore();

// auth.onAuthStateChanged((user) => {
//   if (user) {

//   }
// })

//   auth.onAuthStateChanged(user => {
//     if(user) {
//       userCollection = db.collection('user')

//     }
//     else {

//     }
//   });

// // //logs user in
// const loginBtn = document.getElementById('#login-btn')
// loginBtn.addEventListener('click', (e) => {
//     e.preventDefault()
//     const email = document.querySelector('#login-email').value;
//     const password = document.querySelector('#login-pwd').value;
//     const firstName = document.querySelector('create-first-name').value;
//     const lastName = document.querySelector('create-last-name').value;
//     signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {

//         console.log(userCredential.user + 'is signed in')
//     })//if this doesnt work add if after .then
//     .then((response) => {
//         response = fetch('/api/messages', {
//             method: 'POST',
//             body: JSON.stringify({ email, password, firstName, lastName }),
//             headers: { 'Content-Type': 'application/json' },
//         })
//         if (response.ok) {
//             document.location.replace("/");
//           }
//           else {
//             alert("Failed to log in.");
//           }
//     })

// const errorMessage = document.createElement('p').innerHTML = err.message
// password.appendChild(errorMessage);

// })

// // //logs u ser out
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
//           alert("Failed to log in.");
//         }
//   })
// })

// const displayName = document.getElementById('welcome').innerHTML = 'Welcome: ' + firstName.user;

// auth.onAuthStateChanged(user => {
//     console.log(user);
//     if (user) {
//         console.log(user + ' has signed in');
//     } else console.log(user + ' has signed out');
// })

// export async function addUser(firstName, lastName, email) {
//   e.preventDefault()
//     const email = document.getElementById('create-email').value;
//     const password = document.getElementById('create-pwd').value;
//     const firstName = document.getElementById('create-first-name').value;
//     const lastName = document.getElementById('create-last-name').value;
//     console.log(email, password, firstName, lastName)
//   try {
//     const docRef = await addDoc(collection(db, "users"), {
//       firstName,
//       lastName,
//       email,
//       password,
//     });
//     console.log("User created with ID: ", docRef.id);

//     return docRef;
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// }
// const signUpBtn = document.getElementById('create-btn')
// signUpBtn.addEventListener('click', addUser)
