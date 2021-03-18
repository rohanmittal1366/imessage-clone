import { IconButton } from "@material-ui/core";
import React , {useState} from "react";
import "./chat.css";
import MicNoneIcon from '@material-ui/icons/MicNone';
import Message from "../Messages/Message";



function Chat() {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();

    setInput("");
  };

  return (
    <div className="chat">
      {/* chatHeader */}
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">channel Name</span>
        </h4>
        <strong>Details</strong>
      </div>

      {/* chat messages */}

    <div className="chat__messages">
      <Message />
        
    </div>



      {/* chat inputs */}
      <div className="chat__input">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="imessage"
            type="text"
          />
          <button onClick={sendMessage}>Send Messages</button>
        </form>
        <IconButton>
            <MicNoneIcon />
        </IconButton>
        

      </div>
    </div>
  );
}

export default Chat;
