// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0LQ1T4PezunPfZD33LvhWzvhmqWXhFAk",
  authDomain: "adu-service.firebaseapp.com",
  projectId: "adu-service",
  storageBucket: "adu-service.appspot.com",
  messagingSenderId: "945616878232",
  appId: "1:945616878232:web:b7a3000f030c4b30816eed",
  measurementId: "G-QFC2RCMTVC"
};

// Initialize Firebase
initializeApp(firebaseConfig);

//fireauth
const auth = getAuth();

//firestore
import { doc, getFirestore, setDoc } from "firebase/firestore";
const db = getFirestore();

//other stuff
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Organization, UserInfo } from "../interfaces";

/*
authentication
signInWithFirebase, signUpWithFirebase, signOutWithFirebase
*/
export async function signInWithFirebase(
  email: string,
  password: string,
  successFunc: (user: UserInfo) => void,
  failFunc: (error: any) => void,
) {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      //console.log("success ->", user);
      successFunc({
        uid: user.uid,
        email: email,
        username: user.displayName || undefined,
        emailVerified: user.emailVerified,
        isAnonymous: user.isAnonymous,
        phoneNumber: user.phoneNumber || undefined,
        photoURL: user.photoURL || undefined
      })
    })
    .catch((error) => {
      //https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#signinwithemailandpassword
      /*
      Error Codes
        auth/invalid-email
          Thrown if the email address is not valid.
        auth/user-disabled
          Thrown if the user corresponding to the given email has been disabled.
        auth/user-not-found
          Thrown if there is no user corresponding to the given email.
        auth/wrong-password
          Thrown if the password is invalid for the given email, or the account corresponding to the email does not have a password set.
      */

      failFunc(error);
    });
}
export async function signUpWithFirebase(
  email: string,
  password: string,
  username: string,
  phoneNumber: string | undefined,
  successFunc: (user: UserInfo) => void,
  failFunc: (error: any) => void
) {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      successFunc({
        uid: user.uid,
        email,
        username: username,
        emailVerified: user.emailVerified,
        isAnonymous: user.isAnonymous,
        phoneNumber: phoneNumber,
        photoURL: user.photoURL || undefined,
      });
    })
    .catch((error) => {
      /*
      Error Codes
        auth/email-already-in-use
          Thrown if there already exists an account with the given email address.
        auth/invalid-email
          Thrown if the email address is not valid.
        auth/operation-not-allowed
          Thrown if email/password accounts are not enabled. Enable email/password accounts in the Firebase Console, under the Auth tab.
        auth/weak-password
          Thrown if the password is not strong enough.
      */
      failFunc(error);
    });

}

/*
firestore
newOrganization, 
newPerson, updatePerson
newProject,
*/
export async function newOrganization(
  org: Organization
) {
  await setDoc(doc(db, "organizations", org.uuid), org);
}
export async function newPerson(
  user: UserInfo
) {
  await setDoc(doc(db, "people", user.uid), user);
}
export async function newProject() {
  await setDoc(doc(db, "projects", "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
  });
}