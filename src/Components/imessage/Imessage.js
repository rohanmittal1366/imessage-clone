import React from "react";
import Chat from "../Chat/Chat";
import Sidebar from "../Sidebar/Sidebar";
import "./imessage.css";

function Imessage() {
  return (
    <div className="imessage">
      {/* Sidebar  */}
      
      <Sidebar />
      {/* chat */}
      <Chat />
    </div>
  );
}

export default Imessage;
