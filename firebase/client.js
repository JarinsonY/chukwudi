// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Firebase products 
import {
    createUserWithEmailAndPassword,
    FacebookAuthProvider,
    getAuth,
    GithubAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC8zhMGLg0JwbBq86MQLr8QD9YK7eSnQ-A",
    authDomain: "chukwudi-d946d.firebaseapp.com",
    projectId: "chukwudi-d946d",
    storageBucket: "chukwudi-d946d.appspot.com",
    messagingSenderId: "324396877331",
    appId: "1:324396877331:web:3da1aab7ee99acc390e1e6",
    measurementId: "G-L3EKGC5SW4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* const analytics = getAnalytics(app); */

const auth = getAuth();

export const changesAuthStates = (onChange) => {
    return onAuthStateChanged(auth, (user) => {
        if (user && !user.isAnonymous) {
            console.log('Logged in');
            onChange({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                avatar: user.photoURL
            });
        } else {
            console.log('You are not logged in');
            onChange(null);
        }
    });
}

export const signInGoogle = () => {
    const googleProvider = new GoogleAuthProvider()

    return signInWithPopup(auth, googleProvider)
        .then((userCredential) => {
            console.log(userCredential)
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(userCredential);
            const token = credential.accessToken;
            // The signed-in user info.
            const userR = userCredential.user;
            updateProfile(auth.currentUser, {
                avatar: userR.photoURL,
            })

            /* window.location.assign("/test") */
        }).catch(e => {
            alert('Ocurrió un error intenta de nuevo.')
            console.log(e);

            // Handle Errors here.
            const errorCode = e.code;
            const errorMessage = e.message;
            // The email of the user's account used.
            const email = e.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(e);
            // ...
            console.log('errorCode: ', errorCode)
            console.log('errorMessage: ', errorMessage)
            console.log('email: ', email)
            console.log('credential: ', credential)
        });
}

export const signInFacebook = () => {
    const providerFacebook = new FacebookAuthProvider();

    return signInWithPopup(auth, providerFacebook)
        .then((userCredential) => {
            console.log(userCredential)
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = FacebookAuthProvider.credentialFromResult(userCredential);
            const token = credential.accessToken;
            // The signed-in user info.
            const userR = userCredential.user;
            console.log('userCredential: ', userR)
            /* window.location.assign("/test") */
        }).catch(e => {
            alert('Ocurrió un error intenta de nuevo.')
            console.log(e);

            // Handle Errors here.
            const errorCode = e.code;
            const errorMessage = e.message;
            // The email of the user's account used.
            const email = e.email;
            // The AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(e);
            // ...
            console.log('errorCode: ', errorCode)
            console.log('errorMessage: ', errorMessage)
            console.log('email: ', email)
            console.log('credential: ', credential)
        });
}

export const signInGithub = () => {
    const providerGithub = new GithubAuthProvider();

    return signInWithPopup(auth, providerGithub)
        .then((userCredential) => {
            console.log(userCredential)
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            const credential = GithubAuthProvider.credentialFromResult(userCredential);
            const token = credential.accessToken;
            // The signed-in user info.
            const userR = userCredential.user;
            console.log('userCredential: ', userR)
            /* window.location.assign("/test") */
        }).catch(e => {
            alert('Ocurrió un error intenta de nuevo.')
            console.log(e);
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GithubAuthProvider.credentialFromError(error);
            // ...
            console.log('errorCode: ', errorCode)
            console.log('errorMessage: ', errorMessage)
            console.log('email: ', email)
            console.log('credential: ', credential)
        });
}
