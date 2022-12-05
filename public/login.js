import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from './firebaseConfig.js';

const email = document.getElementById('email');
var emailText = email.value;
const password = document.getElementById('password');
var passwordText = password.value;

const auth = getAuth(app)
function signIn() {
    if(emailText && passwordText) {
        signInWithEmailAndPassword(auth, emailText, passwordText)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
        console.log("here");
        window.location.href = "Profile_page.html";
    }
    else {
        console.log("email: (" + emailText + ") or password: (" + passwordText + ") not accepted");
    }


}

const loginButton = document.getElementById('login');
loginButton.addEventListener('submit', signIn);


