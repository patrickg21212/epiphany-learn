import { initializeApp, getApps } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyABFsvbaV_qe-nctxGDPBmXO57cZPmiSgo",
  authDomain: "gen-lang-client-0690711044.firebaseapp.com",
  projectId: "gen-lang-client-0690711044",
  storageBucket: "gen-lang-client-0690711044.firebasestorage.app",
  messagingSenderId: "921162049132",
  appId: "1:921162049132:web:611360b8754bfad0419a49",
}

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]

export const auth = getAuth(app)
export const db = getFirestore(app)
