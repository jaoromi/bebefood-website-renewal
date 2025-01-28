// app/firebase.ts (혹은 lib/firebase.ts)
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// 아래 config는 Firebase 콘솔에서 복사해온 값을 그대로 삽입
const firebaseConfig = {
  apiKey: "AIzaSyA__V4X6YmSJbbS5Ephz10eWicvS4FD4Y0",
  authDomain: "bebefood-renewal.firebaseapp.com",
  projectId: "bebefood-renewal",
  storageBucket: "bebefood-renewal.firebasestorage.app",
  messagingSenderId: "360988846796",
  appId: "1:360988846796:web:d6067f51e5f937ec647069",
  measurementId: "G-2ZLD571G8H"
};

// 중복 초기화를 막기 위해 getApps()로 체크
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
