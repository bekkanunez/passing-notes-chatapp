// // import { initializeApp } from "firebase/app";

// import { initializeApp } from require('firebase/app')

// //create firebase database//
// import {
//   getFirestore,
//   collection,
//   addDoc,
//   deleteUser,
//   updateUser,
//   getUserById,
//   deleteNoteGroup,
//   deleteNote,
//   serverTimestamp
// } from "firebase/firestore";

import { initializeApp } from require('firebase/app')

//create firebase database//
import {
  getFirestore,
  collection,
  addDoc,
  deleteUser,
  updateUser,
  getUserById,
  deleteNoteGroup,
  deleteNote,
  serverTimestamp
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
  measurementId: "G-F5LWHZ3LLV"
};

// export async function addUser(firstName, lastName, email) {
//   try {
//     const docRef = await addDoc(collection(db, "users"), {
//       firstName,
//       lastName,
//       email,
//     });
//     console.log("User created with ID: ", docRef);

//     return docRef;
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// }

export async function addUser(firstName, lastName, email) {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      firstName,
      lastName,
      email,
    });
    console.log("User created with ID: ", docRef);

    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function deleteTheUser(userId) {
  // TODO: delete user by id
    try {
      const deleteUserRef = await deleteUser(collection(db, "userId"), {
        userId
      });
      console.log("Deleted user by ID: ", deleteUserRef.id);
  
      return deleteUserRef;
    } catch (e) {
      console.error("Error deleting user: ", e);
    }
  }


async function updateTheUser(userId, body) {
//   // TODO: update a user by id with the body data
//   // body:
//   // {firstName, lastName, email}
  try {
      const updateUserRef = await updateUser(collection(db, "userId", "body"), {
        userId,
        body: {
        firstName,
        lastName,
        email}
      });
      console.log("Updated user by ID: ", updateUserRef.id, body);
  
      return updateUserRef;
    } catch (e) {
      console.error("Error updating user: ", e);
    }
}

async function getUserThenById(userId) {
//   // TODO: get a user doc by userId
  try {
    const getUserRef = await getUserById(collection(db, "userId"), {
      userId
    });
    console.log("Found user by ID: ", getUserRef.id);

    return docRef;
  } catch (e) {
    console.error("Error finding user: ", e);
  }
}

async function addNoteGroup(name) {
  try {
    const docRef = await addDoc(collection(db, "group"), {
      name
    });
    console.log("Group created with ID: ", docRef.id);

    return docRef;
  } catch (e) {
    console.error("Error adding group note: ", e);
  }
}

async function deleteTheNoteGroup(noteGroupId) {
//   // TODO: delete note group id
  try {
    const deleteNoteGroupRef = await deleteNoteGroup(collection(db, "noteGroupId"), {
      noteGroupId
    });
    console.log("Deleted note group with ID: ", deleteNoteGroupRef.id);

    return docRef;
  } catch (e) {
    console.error("Error deleting document: ", e);
  }

}

async function addNotes(type, groupId, userId, message) {
  try {
    const docRef = await addDoc(collection(db, "notes"), {
      type,
      groupId,
      userId,
      message,
      createdDate: serverTimestamp()
    });
    console.log("Note created with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function deleteTheNote(noteId) {
  // TODO: delete note
  try {
    const deleteNoteRef = await deleteNote(collection(db, "noteId"), {
      noteId
    });
    console.log("Deleted note with ID: ", deleteNoteRef.id);

    return docRef;
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
}


async function run() {
  const user = await addUser("Penelope2", "Leung2", "penguin812@gmail2.com");
  console.log('user', user)

  const bffGroup = await addNoteGroup('My BFF');
  const otherUserGroup = await addNoteGroup('Other User');
  const user2Group = await addNoteGroup('User 2');
  const cookingGroup = await addNoteGroup('Cooking');
  const codingGroup = await addNoteGroup('Coding');
  const puppiesGroup = await addNoteGroup('Puppies');
  const artGroup = await addNoteGroup('Art');
  const the90sGroup = await addNoteGroup('The 90s');
  const altRockGroup = await addNoteGroup('Alt Rook');


  await addNotes('private', otherUserGroup.id, user.id, "This is a private notes");
  await addNotes('private', bffGroup.id, user.id, "This is a private notes");
  await addNotes('private', user2Group.id, user.id, "This is a private notes");
  await addNotes('public', cookingGroup.id, user.id, "This is a public notes");
  await addNotes('public', codingGroup.id, user.id, "This is a public notes");
  await addNotes('public', puppiesGroup.id, user.id, "This is a public notes");
  await addNotes('public', artGroup.id, user.id, "This is a public notes");
  await addNotes('public', the90sGroup.id, user.id, "This is a public notes");
  await addNotes('public', altRockGroup.id, user.id, "This is a public notes");
  await deleteNote(note.id);
  await deleteTheUser(user.id);
  await updateTheUser(user.id, firstName.id, lastName.id, email.id);
  await getUserThenById(user.id);
  await deleteTheNoteGroup(noteGroup.id);
  await addUser(firstName.id, lastName.id, email.id);
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
// }

// async function addNoteGroup(name) {
//   try {
//     const docRef = await addDoc(collection(db, "group"), {
//       name
//     });
//     console.log("Group created with ID: ", docRef.id);

//     return docRef;
//   } catch (e) {
//     console.error("Error adding group note: ", e);
//   }
// }

// //last seen online time 

//     return docRef;
//   } catch (e) {
//     console.error("Error deleting document: ", e);
//   }

// }

// async function addNotes(type, groupId, userId, message) {
//   try {
//     const docRef = await addDoc(collection(db, "notes"), {
//       type,
//       groupId,
//       userId,
//       message,
//       createdDate: serverTimestamp()
//     });
//     console.log("Note created with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// }

// async function deleteTheNote(noteId) {
//   // TODO: delete note
//   try {
//     const deleteNoteRef = await deleteNote(collection(db, "noteId"), {
//       noteId
//     });
//     console.log("Deleted note with ID: ", deleteNoteRef.id);

//     return docRef;
//   } catch (e) {
//     console.error("Error deleting document: ", e);
//   }
// });