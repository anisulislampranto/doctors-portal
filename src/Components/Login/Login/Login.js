import React, { useContext } from "react";
import loginPageImage from "../../../images/loginPageImage.png";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";
import { UserContext } from "../../../App";

initializeApp(firebaseConfig);



const Login = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser)


  const handleGoogleSignIn = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const {displayName, email, photoURL} = result.user;
        const signedInUserInfo = {
          isSignedIn:true,
          displayName:displayName,
          email:email,
          photoUrl:photoURL

        }
        setLoggedInUser(signedInUserInfo)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode)
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(email, credential)
        // ...
      });
  }

  return (
    <section className="row align-items-center">
      <div className="col-md-6">
        <div className="text-center">
          <button onClick={handleGoogleSignIn}>Google Log In</button>
        </div>
      </div>
      <div className="col-md-6 ">
        <img
          style={{ width: "550px", marginTop: "30px" }}
          src={loginPageImage}
          alt=""
        />
      </div>
    </section>
  );
};

export default Login;
