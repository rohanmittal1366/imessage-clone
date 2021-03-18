import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Imessage from "./Components/imessage/Imessage";
import { selectUser } from "./features/userSlice";
import Login from "./Components/Login/Login";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="App">
      {user ? <Imessage /> : <Login />}
    </div>
  );
}

export default App;
