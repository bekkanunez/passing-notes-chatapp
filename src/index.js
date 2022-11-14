

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


console.log(firebase);
// initialize firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const signUpBtn = document.querySelector("#create-btn");

//creats in new user
signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.querySelector("#create-email").value.trim();
  const password = document.querySelector("#create-pwd").value.trim();
  console.log(email, password)
  auth.createUserWithEmailAndPassword(email, password)
    .then(function(user) {
      //     Signed in
      console.log('signed in as' + user)
      // return user.updateProfile({
      //   displayName: document.getElementById("create-first-name").value
      // })
    })
    .catch((error) => {
      console.log(error.message)
      // ..
    });

});
//signs in existing user
const loginBtn = document.getElementById('login-btn')
loginBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-pwd').value;
    auth.signInWithEmailAndPassword(email, password)
    .then((user) => {

        console.log(user + ' is signed in')
    })
    .catch((error) => {
      console.log(error.message)
      // ..
    });
  })
//logs user out
  const logoutBtn = document.getElementById('logout')
  logoutBtn.addEventListener('click', (e) => {
    e.preventDefault()
    auth.signOut()
    .then(() => {
      console.log('signed out')
    })
    .catch ((error) => {
      console.log(error.message)
    })
  })

const db = firebase.firestore();

let fetchChat;
let unsubscribe;

const messages = document.querySelector('#messages')
//occurs if user is signed in
auth.onAuthStateChanged(user =>{
  if(user) {
    const messageBtn = document.querySelector('#message-Btn')
    messageBtn.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const messageInput = document.getElementById("create-message");
    //the message user inputs
    const message = messageInput.value;
    console.log(message);
    // clear the input box
    messageInput.value = "";
    
    //reference from the message collection
    fetchChat = db.collection('message');
    fetchChat.add ({
      uid: user.uid,
      message: message,
      email: email,
      createdAt: serverTimestamp()
    })
  })
  //stops the app from listening to realtime stream and reading and listening to documents not in use.
  unsubscribe = fetchChat
  //should add the messages frpm db and display them for each message in the db
  .where('uid', '==', user.uid).onSnapshot(querySnapshot => {
    const items = querySnapshot.docs.map(doc => {
      return `<li>${doc.data().email}</li>`
    })
    messages.innerHTML = items.join('')
  })
} else unsubscribe && unsubscribe();
})
  
  //   db.ref("messages/" + timestamp).set({
  //     username,
  //     message,
  //   });
  // const fetchChat = db.ref("message");
  // unsubscribe = fetchChat
 
//   async function getUsers(db) {
//     const userCol = collection(db, 'users');
//     const userSnapshot = await getDocs(userCol);
//     const userList = userSnapshot.docs.map(doc => doc.data());
//     console.log(userList);
// }
// async function getMessages(db) {
    // const messagesCol = collection(db, 'users');
    // const messagesSnapshot = await getDocs(messagesCol);
    // const messagesList = messagesSnapshot.docs.map(doc => doc.data());
//     console.log(messagesList);
// }



// async function getUserById(id) {
//   console.log('getting user by id - ', id)
//   const docRef = doc(db, "users", id);
//   const docSnap = await getDoc(docRef);

//   if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
//   } else {
//     // doc.data() will be undefined in this case
//     console.log("No such document!");
//   }
// }



