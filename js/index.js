// Firebase SDK 라이브러리 가져오기
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


// $('#geonhui').click(async function(){
//     window.location.href="./geonhui.html"
// });


// $('#minyeong').click(async function(){
//     window.location.href="./minyeong.html"
// });


// $('#sehun').click(async function(){
//     window.location.href="./sehun.html"
// });

// $('#hyoil').click(async function(){
//     window.location.href="./hyoil.html"
// });
$(document).on("click", "#wanhui", function(){
    window.location.replace("./wanhui.html");
  });

$(document).on("click", "#hyoil", function(){
    window.location.replace("./hyoil.html");
  });
  $(document).on("click", "#minyeong", function(){
    window.location.replace("./minyeong.html");
  });
  $(document).on("click", "#sehun", function(){
    window.location.replace("./sehun.html");
  });
  $(document).on("click", "#geonhui", function(){
    window.location.replace("./geonhui.html");
  });
  $(document).on("click", "#wanhui", function(){
    window.location.replace("./login.html");
  });

  /*
  $("#loginbtn").click(async function () {
    // ID, PassWord 가져오기
    await addDoc(collection(db, "users"), doc);
    alert("회원이 등록되었습니다");
    console.log("작동 확인");
    window.location.reload();
  })
  */