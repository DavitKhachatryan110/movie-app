import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCTtC5_XMn6Hi4XxE0INv1wZSP61AUpDMM",
    authDomain: "movieapp-9602f.firebaseapp.com",
    databaseURL: "https://movieapp-9602f.firebaseio.com",
    projectId: "movieapp-9602f",
    storageBucket: "movieapp-9602f.appspot.com",
    messagingSenderId: "420873323194",
    appId: "1:420873323194:web:d68aba5f55debf8e24b883",
    measurementId: "G-V5T23NL1CH"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;