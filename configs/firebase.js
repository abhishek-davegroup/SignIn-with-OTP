//This file is based on Firebase SDK and FirebaseConfig file

const express = require('express') 

import {initializeApp} from 'firebase/app'
import { getAnalytics } from "firebase/analytics"

// Add Firebase SDK 
    <script src="https://www.gstatic.com/firebasejs/6.0.2/firebase.js"></script>

     // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyDaaAMYV01Kg-VXmFC8j1YRrRVcdoPRGnI",
        authDomain: "signup-with-otp.firebaseapp.com",
        projectId: "signup-with-otp",
        storageBucket: "signup-with-otp.appspot.com",
        messagingSenderId: "1044033858757",
        appId: "1:1044033858757:web:b8ed69f43566a37c9b54ac",
        measurementId: "G-F3HHK3M94Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);