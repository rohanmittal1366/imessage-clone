import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="login">
      
      <div className="login__logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlzhKvw4sZcK3t2ihfVuerdAu6mwBEHPS3rA&usqp=CAU"
          alt="imessage_img"
        />
        <h1>iMessage</h1>
      </div>
      <button>Sign In</button>
    </div>
  );
}

export default Login;
