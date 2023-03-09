// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8eSju_WIlvmgdWgEcsQa5JIBGgio_jog",
    authDomain: "authentication-3b0c8.firebaseapp.com",
    projectId: "authentication-3b0c8",
    storageBucket: "authentication-3b0c8.appspot.com",
    messagingSenderId: "145265341278",
    appId: "1:145265341278:web:45eb2e3c3db5b7b42215cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

document.getElementById('sign_up').addEventListener('click', (e) => {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value


    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...

            set(ref(database, 'users/' + user.uid), {
                email: email,
                password: password,
                // profile_picture: imageUrl
            })

                .then(() => {
                    // Data saved successfully!
                    alert("user created successfully")
                })
                .catch((error) => {
                    // The write failed...
                    alert("error")
                });


        })

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert("user not created" + errorMessage)
        });

})


