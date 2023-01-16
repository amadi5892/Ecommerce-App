import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
    } from 'firebase/auth'

    import {
        getFirestore,
        doc,
        getDoc,
        setDoc
    } from 'firebase/firestore'

// firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXK5Yx5eDpPwXSiXZdEy5CIo1L8u7ntGw",
    authDomain: "sharp-fragrance-demo.firebaseapp.com",
    projectId: "sharp-fragrance-demo",
    storageBucket: "sharp-fragrance-demo.appspot.com",
    messagingSenderId: "340100855619",
    appId: "1:340100855619:web:325b8bed8ea530e836e1f6"
  };

  // initialize firebase
  const firebaseApp =  initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: "select_account",
  });

  export const auth = getAuth(firebaseApp);
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch(error) {
            console.log('error creating the user', error.message);
        }
    }
  }