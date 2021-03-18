import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Imessage from "./Components/imessage/Imessage";
import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="App">
      {user ? <Imessage /> : <h2>You need to login</h2>}
    </div>
  );
}

export default App;
