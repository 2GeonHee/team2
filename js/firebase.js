    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
    import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
    import {
      collection,
      addDoc,
    } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
    async function Firebase() {
    //import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
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
    //
    
    // 넣기
    $("#savebtn").click(async function () {
      let question = $("#question").val();
      //let name = $("#name").val();
    let doc = {
    'question':question,
    //'name':name,
    };
    await addDoc(collection(db, "Sehun"), doc);
    alert("댓글이 작성되었습니다");
    console.log("작동 확인");
    window.location.reload();
    })
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
export {Firebase};