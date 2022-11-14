// console.log(firebase);

// const firebaseConfig = {
//   apiKey: "AIzaSyCs1cBiUxFFoG5NS-Cx7x0hfnZui0F32UU",
//   authDomain: "passing-notes-29428.firebaseapp.com",
//   databaseURL: "https://passing-notes-29428-default-rtdb.firebaseio.com",
//   projectId: "passing-notes-29428",
//   storageBucket: "passing-notes-29428.appspot.com",
//   messagingSenderId: "673359625270",
//   appId: "1:673359625270:web:8389ceb82a4d5633d3ac97",
//   measurementId: "G-F5LWHZ3LLV",
// };

// firebase.initializeApp(firebaseConfig);

// const db = firebase.database();

// const username = prompt("Please Tell Us Your Name");

// function sendMessage(e) {
//   e.preventDefault();

//   // get values to be submitted
//   const timestamp = Date.now();
//   const messageInput = document.getElementById("message-input");
//   const message = messageInput.value;

//   // clear the input box
//   messageInput.value = "";

//   //auto scroll to bottom
//   document
//     .getElementById("messages")
//     .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

//   // create db collection and send in the data
//   db.ref("messages/" + timestamp).set({
//     username,
//     message,
//   });
// }

// const fetchChat = db.ref("messages/");

// fetchChat.on("child_added", function (snapshot) {
//   const messages = snapshot.val();
//   const message = `<li class=${
//     username === messages.username ? "sent" : "receive"
//   }><span>${messages.username}: </span>${messages.message}</li>`;
//   // append the message on the page
//   document.getElementById("messages").innerHTML += message;
// });
