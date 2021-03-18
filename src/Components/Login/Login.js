import React from "react";
import "./login.css";
import { auth, provider } from "../../firebase/firebase";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlzhKvw4sZcK3t2ihfVuerdAu6mwBEHPS3rA&usqp=CAU"
          alt="imessage_img"
        />
        <h1>iMessage</h1>
      </div>
      <button onClick={signIn}>Sign In</button>
    </div>
  );
}

export default Login;
