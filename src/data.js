import { initializeApp } from "firebase/app";

//create firebase database//
import {
  getDatabase,
  onChildAdded,
  onChildChanged,
  deleteComment,
  ref,
  set,
  onValue,
  child, 
  push, 
  update,
  onDisconnect,
  serverTimestamp
} from "firebase/database";

//import other Firebase services
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebase = getFirestore(app);

//Get database reference
const database = getDatabase(app);


// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}

//Firbase configuration, returns a firebase app instance which allows the firebase sdk to connect to our specific firebase backend//
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

//write data and save specific existing data
function writeUserData(userId, name, email, imageUrl) {

const db = getDatabase();
const reference = ref(db, "users/" + userId);
set(reference, {
  username: name,
  email: email,
  profile_picture: imageUrl,
});
}

//example data
writeUserData("Penelope Leung", "pl", "penguin812@gmail.com", "userImageUrl");

//Read data at a path and listen for changes
const starCountRef = ref(db, 'posts/' + postId + '/starCount');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  updateStarCount(postElement, data);
});

//Update data
function writeNewPost(uid, username, picture, title, body) {
   
    // A post entry.
    const postData = {
      author: username,
      uid: uid,
      body: body,
      title: title,
      starCount: 0,
      authorPic: picture
    };
  
    // Get a key for a new Post.
    const newPostKey = push(child(ref(db), 'posts')).key;
  
    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + uid + '/' + newPostKey] = postData;
  
    return update(ref(db), updates);
  }
  writeNewPost();

  //Callback function

set(ref(db, 'users/' + userId), {
  username: name,
  email: email,
  profile_picture : imageUrl
})
.then(() => {
  // Data saved successfully!
})
.catch((err) => {
  // The write failed...
});

  //Reading and Writing lists
  const postListRef = ref(db, "post-comments/" + postId);
  const newPostRef = push(postListRef);
  set(newPostRef, {});

  //add other comments on the post
  const addCommentsRef = ref(db, "post-comments/" + postId);
  onChildAdded(commentsRef, (data) => {
    addCommentElement(postElement, data.key, dataVal().text, data.val().author);
    set(addCommentsRef, {});
  });

  //change comments on the post
  const changeCommentsRef = ref(db, "post-comments/" + postId);
  onChildChanged(commentsRef, (data) => {
    addCommentValues(postElement, data.key, dataVal().text, data.val().author);
    set(changeCommentsRef, {});
  });

  //Remove comments on the post
  const deleteCommentsRef = ref(db, "post-comments/" + postId);
  onChildRemoved(commentsRef, (data) => {
    deleteComment(postElement, data.key, dataVal().text, data.val().author);
    set(deleteCommentsRef, {});
  });

//if receive an offline message
const presenceRef = ref(db, "disconnectmessage");
// Write a string when this client loses connection
onDisconnect(presenceRef).set("I disconnected!");
//make sure the operation is still valid
onDisconnect(presenceRef).remove().catch((err) => {
    if (err) {
      console.error("could not establish onDisconnect event", err);
    }
  });
  
  //Detecting Connection State
  const connectedRef = ref(db, ".info/connected");
onValue(connectedRef, (snap) => {
  if (snap.val() === true) {
    console.log("connected");
  } else {
    console.log("not connected");
  }
});

//Server Timestamps (last online reference)
const userLastOnlineRef = ref(db, "users/joe/lastOnline");
onDisconnect(userLastOnlineRef).set(serverTimestamp());

//local reported time
const offsetRef = ref(db, ".info/serverTimeOffset");
onValue(offsetRef, (snap) => {
  const offset = snap.val();
  const estimatedServerTimeMs = new Date().getTime() + offset;
    return estimatedServerTimeMs;
});

//last seen online time 

// Since I can connect from multiple devices or browser tabs, we store each connection instance separately
// any time that connectionsRef's value is null (i.e. has no children) I am offline
const myConnectionsRef = ref(db, 'users/joe/connections');

// stores the timestamp of my last disconnect (the last time I was seen online)
const lastOnlineRef = ref(db, 'users/joe/lastOnline');

onValue(connectedRef, (snap) => {
  if (snap.val() === true) {
    // We're connected (or reconnected)! Do anything here that should happen only if online (or on reconnect)
    const con = push(myConnectionsRef);

    // When I disconnect, remove this device
    onDisconnect(con).remove();

    // Add this device to my connections list
    // this value could contain info about the device or a timestamp too
    set(con, true);

    // When I disconnect, update the last time I was seen online
    onDisconnect(lastOnlineRef).set(serverTimestamp());
  }
});