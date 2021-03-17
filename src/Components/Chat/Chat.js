import React , {useState} from "react";
import "./chat.css";

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
      </div>
    </div>
  );
}

export default Chat;
