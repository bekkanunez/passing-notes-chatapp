
//create firebase database//
import { getDatabase, onChildAdded, onChildChanged, deleteComment, ref, set } from "firebase/database";



// Initialize Firebase
const app = initializeApp(firebaseConfig);

//firbase configuration, returns a firebase app instance which allows the firebase sdk to connect to our specific firebase backend//
const firebaseConfig = {
  //config object goes here {
  apiKey: "AIzaSyCs1cBiUxFFoG5NS-Cx7x0hfnZui0F32UU",
  authDomain: "passing-notes-29428.firebaseapp.com",
  databaseURL: "https://passing-notes-29428-default-rtdb.firebaseio.com",
  projectId: "passing-notes-29428",
  storageBucket: "passing-notes-29428.appspot.com",
  messagingSenderId: "673359625270",
  appId: "1:673359625270:web:8389ceb82a4d5633d3ac97",
  measurementId: "G-F5LWHZ3LLV",
};
function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  const reference = ref(db, "users/" + userId);
  
  //list post: show same messages on diff devices
//   const postListRef = ref(db, 'post-comments/' + postId);
//   const newPostRef = push(postListRef);
//   set(newPostRef, {}
//   )

//add other comments on the post
// const commentsRef = ref(db, 'post-comments/' + postId);
// onChildAdded(commentsRef, (data) => {
//     addCommentElement(postElement, data.key, dataVal().text, data.val().author);
// });

//change comments on the post
// const commentsRef = ref(db, 'post-comments/' + postId);
// onChildChanged(commentsRef, (data) => {
//     addCommentValues(postElement, data.key, dataVal().text, data.val().author);
// });

//Remove comments on the post
// const commentsRef = ref(db, 'post-comments/' + postId);
// onChildRemoved(commentsRef, (data) => {
//     deleteComment(postElement, data.key, dataVal().text, data.val().author);
// });

  //add user
  set(reference, {
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
}

writeUserData("Penelope Leung", "pl", "penguin812@gmail.com", "userImageUrl");
