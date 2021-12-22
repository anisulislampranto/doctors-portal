import React, { useContext } from "react";
import loginPageImage from "../../../images/loginPageImage.png";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";
import { UserContext } from "../../../App";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

initializeApp(firebaseConfig);



const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  console.log(loggedInUser)

  const { from } = location.state || { from: { pathname: "/" } };


  const handleGoogleSignIn = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const {displayName, email, photoURL} = result.user;
        const signedInUserInfo = {
          isSignedIn:true,
          displayName:displayName,
          email:email,
          photoUrl:photoURL

        }
        setLoggedInUser(signedInUserInfo)
        history.replace(from);

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
      <h1>{loggedInUser.displayName}</h1>
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
