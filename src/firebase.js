import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBx-b4rvwDFh5cHzPuWzl-x-nktoJp7cww",
    authDomain: "ecommerce-react-dc772.firebaseapp.com",
    projectId: "ecommerce-react-dc772",
    storageBucket: "ecommerce-react-dc772.appspot.com",
    messagingSenderId: "101094245362",
    appId: "1:101094245362:web:9166654d4bc97a6677e16b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};