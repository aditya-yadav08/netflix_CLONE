import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBESuc9hncm100BCyUked5-wR9NIC0wTyM",
    authDomain: "netflix-a6cb3.firebaseapp.com",
    projectId: "netflix-a6cb3",
    storageBucket: "netflix-a6cb3.appspot.com",
    messagingSenderId: "382838216874",
    appId: "1:382838216874:web:d1ca92000ac810a41758d3"
};

const firebase = Firebase.initializeApp(config);

export { firebase }; 