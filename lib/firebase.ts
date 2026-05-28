import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "firebase/app-check";

const firebaseConfig = {
  apiKey: "AIzaSyBvXAKO_Pw3Wg9C6Jt5eYJd07VS6mNezHs",
  authDomain: "taxsnap-ai.firebaseapp.com",
  projectId: "taxsnap-ai",
  storageBucket: "taxsnap-ai.firebasestorage.app",
  messagingSenderId: "945016976887",
  appId: "1:945016976887:web:9b74ad6c05ba4d7af0aaf2",
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

if (typeof window !== "undefined") {
  initializeAppCheck(app, {
    provider: new ReCaptchaEnterpriseProvider("6Lfg-f8sAAAAAFchow8peqn6XTEkaFf5w7nUuDLj"),
    isTokenAutoRefreshEnabled: true,
  });
}

export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app);
export const googleProvider = new GoogleAuthProvider();
