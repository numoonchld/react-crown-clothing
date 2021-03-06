import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyASTbO7VKwnEfddA-oaG0rPm_vFJTbH968",
    authDomain: "crown-db-59713.firebaseapp.com",
    projectId: "crown-db-59713",
    storageBucket: "crown-db-59713.appspot.com",
    messagingSenderId: "476477629681",
    appId: "1:476477629681:web:cbd76cf76dcd45f266f550"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const {displayName, email} = userAuth
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (error) {
            console.log(error.message)
        }
    }

    return userRef

}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase