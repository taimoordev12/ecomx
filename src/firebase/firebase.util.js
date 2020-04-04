import  firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAGuEHgMZ09TZMEQlcD7tc04Kevstniwg4",
    authDomain: "ecomx-auth.firebaseapp.com",
    databaseURL: "https://ecomx-auth.firebaseio.com",
    projectId: "ecomx-auth",
    storageBucket: "ecomx-auth.appspot.com",
    messagingSenderId: "637664992828",
    appId: "1:637664992828:web:7b4e96f45ef56b8f662d39"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//getting user from google auth and placing in databasek
  export const createUserProfileDocument = async (authuser,otherdata)=>{
  if(!authuser)  return;
   
      const useref =firestore.doc(`users/${authuser.uid}`);
      const snapshot = useref.get();
      if (!snapshot.exists){
        const {displayName,email}= authuser;
        const createdAt = new Date();
        try {
            useref.set({displayName,email,createdAt,...otherdata})
        } catch (error){
         console.log('error created'+error.message);
        }
      }
   return useref;
  }

   export const firebaseAppAuth = firebase.auth();
   export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const SignInWithGoogle =()=> firebaseAppAuth.signInWithPopup(provider);

export default firebase;
