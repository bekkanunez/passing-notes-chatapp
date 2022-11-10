// import { initializeApp } from "firebase/app";

import { initializeApp } from "firebase/app";

//create firebase database//
import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  serverTimestamp,
} from "firebase/firestore";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// // Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, "cities");
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map((doc) => doc.data());
//   return cityList;
// }

export async function addUser(firstName, lastName, email) {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      firstName,
      lastName,
      email,
    });
    console.log("User created with ID: ", docRef.id);

    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function deleteTheUser(userId) {
  try {
    await deleteDoc(doc(db, "users", userId));

    console.log(`User ${userId} deleted`);
  } catch (e) {
    console.error("Error deleting user: ", e);
  }
}

async function updateTheUser(userId, body) {
  //   // body:
  //   // {firstName, lastName, email}
  try {
    const updateUserRef = await doc(db, "users", userId);

    await updateDoc(updateUserRef, body);
    console.log(`Updated user ${userId}`, body);

    // return updateUserRef;
  } catch (e) {
    console.error("Error updating user: ", e);
  }
}

async function getUserById(id) {
  console.log('getting user by id - ', id)
  const docRef = doc(db, "users", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

async function getUserByEmail(email) {
  try {
    const q = query(collection(db, "users"), where("email", "==", email));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  } catch (e) {
    console.error("Error finding user: ", e);
  }
}

async function addNoteGroup(name) {
  try {
    const docRef = await addDoc(collection(db, "group"), {
      name,
    });
    console.log("Group created with ID: ", docRef.id);

    return docRef;
  } catch (e) {
    console.error("Error adding group note: ", e);
  }
}

async function deleteTheNoteGroup(noteGroupId) {
   try {
    await deleteDoc(doc(db, "group", noteGroupId));

    console.log(`The note group ${noteGroupId} deleted`);
  } catch (e) {
    console.error("Error deleting the note group: ", e);
  }
}

async function addNotes(type, groupId, userId, message) {
  try {
    const docRef = await addDoc(collection(db, "notes"), {
      type,
      groupId,
      userId,
      message,
      createdDate: serverTimestamp(),
    });
    console.log("Note created with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function deleteTheNote(noteId) {
  try {
    await deleteDoc(doc(db, "notes", noteId));

    console.log(`The note ${noteId} deleted`);
  } catch (e) {
    console.error("Error deleting the note: ", e);
  }
}

async function run() {
  const user = await addUser(firstName, lastName, email);

  const bffGroup = await addNoteGroup('My BFF');
  const otherUserGroup = await addNoteGroup('Other User');
  const user2Group = await addNoteGroup('User 2');
  const cookingGroup = await addNoteGroup('Cooking');
  const codingGroup = await addNoteGroup('Coding');
  const puppiesGroup = await addNoteGroup('Puppies');
  const artGroup = await addNoteGroup('Art');
  const the90sGroup = await addNoteGroup('The 90s');
  const altRockGroup = await addNoteGroup('Alt Rook');

  await addNotes('private', otherUserGroup.id, user.id, "Other User Group");
  await addNotes('private', bffGroup.id, user.id, "BFF Group");
  await addNotes('private', user2Group.id, user.id, "User2 Group Note");
  await addNotes('public', cookingGroup.id, user.id, "Cooking Group Note");
  await addNotes('public', codingGroup.id, user.id, "Coding Group Note");
  await addNotes('public', puppiesGroup.id, user.id, "Puppies Group Note");
  await addNotes('public', artGroup.id, user.id, "Art Group Note");
  await addNotes('public', the90sGroup.id, user.id, "The 90s Group Note");
  await addNotes('public', altRockGroup.id, user.id, "Alt Rock Group Note");
  await deleteNote(note.id);
  await updateTheUser(user.id, {firstName: 'first', lastName: 'last'});
  await deleteTheUser(user.id);
  await getUserByEmail(email);
  await getUserById(user.id);
  await deleteTheNote(noteGroup.id);
  await deleteTheNoteGroup(notes.id);
  await addNoteGroup(name.id);
}

run();

// //Read data at a path and listen for changes
// const starCountRef = ref(db, 'posts/' + postId + '/starCount');
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });

//   //Callback function

// set(ref(db, 'users/' + userId), {
//   username: name,
//   email: email,
//   profile_picture : imageUrl
// })
// .then(() => {
//   // Data saved successfully!
//   console.log("Saved Succesfully!")
// })
// .catch((err) => {
//   // The write failed...
//   console.log(err)
// });

// //if receive an offline message
// const presenceRef = ref(db, "disconnectmessage");
// // Write a string when this client loses connection
// onDisconnect(presenceRef).set("I disconnected!");
// //make sure the operation is still valid
// onDisconnect(presenceRef).remove().catch((err) => {
//     if (err) {
//       console.error("could not establish onDisconnect event", err);
//     }
//   });

//   //Detecting Connection State
//   const connectedRef = ref(db, ".info/connected");
// onValue(connectedRef, (snap) => {
//   if (snap.val() === true) {
//     console.log("connected");
//   } else {
//     console.log("not connected");
//   }
// });

// //Server Timestamps (last online reference)
// const userLastOnlineRef = ref(db, "users/joe/lastOnline");
// onDisconnect(userLastOnlineRef).set(serverTimestamp());

// //local reported time
// const offsetRef = ref(db, ".info/serverTimeOffset");
// onValue(offsetRef, (snap) => {
//   const offset = snap.val();
//   const estimatedServerTimeMs = new Date().getTime() + offset;
//     return estimatedServerTimeMs;
// });

// //last seen online time

// // Since I can connect from multiple devices or browser tabs, we store each connection instance separately
// // any time that connectionsRef's value is null (i.e. has no children) I am offline
// const myConnectionsRef = ref(db, 'users/joe/connections');

// // stores the timestamp of my last disconnect (the last time I was seen online)
// const lastOnlineRef = ref(db, 'users/joe/lastOnline');

// onValue(connectedRef, (snap) => {
//   if (snap.val() === true) {
//     // We're connected (or reconnected)! Do anything here that should happen only if online (or on reconnect)
//     const con = push(myConnectionsRef);

//     // When I disconnect, remove this device
//     onDisconnect(con).remove();

//     // Add this device to my connections list
//     // this value could contain info about the device or a timestamp too
//     set(con, true);

//     // When I disconnect, update the last time I was seen online
//     onDisconnect(lastOnlineRef).set(serverTimestamp());
//   }
// });
