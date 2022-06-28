import { firebaseApp } from "../lib/firebase";
import firebase from "firebase/compat/app";

const db = firebaseApp.firestore();
export const getFirebaseItems = async () => {
  try {
    const snapshot = await db.collection("todos").get();
    const items = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return items;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const addFirebaseItems = async (item) => {
  try {
    await db.collection("todos").add(item);
  } catch (error) {
    console.log(error);
  }
};

export const updateFirebaseItems = async (item) => {
  try {
    await db.collection("todos").doc(item.id).update(item);
  } catch (error) {
    console.log(error);
  }
};
export const deleteFirebaseItems = async (item) => {
  const todoRef = db.collection("todos").doc(item.id);
  await todoRef
    .delete()
    .then(function () {})
    .catch(function (err) {
      console.log(err);
    });
};
export const auth = firebaseApp.auth();
export const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

export const storeUserInfo = async (user) => {
  const { uid } = user;
  const userDoc = await db.collection("users").doc(uid).get();
  if (!userDoc.exists) {
    await db.collection("users").doc(uid).set({ name: user.displayName });
    return {
      name: user.displayName,
      id: uid,
    };
  } else {
    return {
      id: uid,
      ...userDoc.data(),
    };
  }
};

export const updateUser = async (user, image) => {
  try {
    const userDoc = await firebaseApp
      .firestore()
      .collection("users")
      .doc(user.id)
      .get();
    if (userDoc.exists) {
      await firebaseApp
        .firestore()
        .collection("users")
        .doc(user.id)
        .update({ ...userDoc.data(), image: image });
    }
  } catch (err) {
    console.log(err);
  }
};
