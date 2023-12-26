/*// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Firebase 구성 정보 설정
const firebaseConfig = {
    apiKey: "AIzaSyDC9Guym3mn-3mQMRJDebN9er2DwiPL33g",
    authDomain: "team2-ba7e9.firebaseapp.com",
    projectId: "team2-ba7e9",
    storageBucket: "team2-ba7e9.appspot.com",
    messagingSenderId: "798914185751",
    appId: "1:798914185751:web:22bdbfe6a0024672e26a52",
    measurementId: "G-VZJX8QCHMX"
};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log('hi!1');

$("#checkingbtn").click(async function () {
    console.log('hi!2');
})


$("#checkingbtn").click(async function () {
    let docs = await getDocs(collection(db, "users"));
    let user1 = $('#ID').val();
    console.log(user1);
    docs.forEach((doc) => {
        let user2 = doc.data();
        console.log(user2);

        /*내가 입력한 값과 db에서 가져온 값을 if로 비교 
        if (user1 == user2) {
            alert('로그인 가능한 회원입니다.');
        } else {
            alert('일치하는 유저가 없습니다.');
        }

    });
});
*/
