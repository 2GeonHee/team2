// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

async function getdata(){
// Firebase 구성 정보 설정
const firebaseConfig = {
    apiKey: "AIzaSyCnWzN5W6X8uCEa8kDshO7yFHMmPlyK2Bw",
    authDomain: "sparta-b8ff7.firebaseapp.com",
    projectId: "sparta-b8ff7",
    storageBucket: "sparta-b8ff7.appspot.com",
    messagingSenderId: "382464668576",
    appId: "1:382464668576:web:82e59da68a7a5b9aecaac5",
    measurementId: "G-9S7MFN1FS9",
  };
  // Firebase 인스턴스 초기화
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  /////getting the code from firebase
  let docs = await getDocs(collection(db, "Sehun"));
  docs.forEach((doc) => {
  let row = doc.data();
  console.log(row);
    let question = row["question"];
    let temp_html = `
              <h3>${question}</h3>
  `;
    $(`#questions`).append(temp_html);
  }); 
}
export {getdata}