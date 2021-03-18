import { IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./chat.css";
import MicNoneIcon from "@material-ui/icons/MicNone";
import Message from "../Messages/Message";
import { useSelector } from "react-redux";
import { selectChatId, selectChatName } from "../../features/chatSlice";
import db from "../../firebase/firebase";
import firebase from "firebase";
import { selectUser } from "../../features/userSlice";

function Chat() {
  const [input, setInput] = useState("");
  const user = useSelector(selectUser);
  const chatName = useSelector(selectChatName);
  const [messages, setMessages] = useState([]);
  const chatId = useSelector(selectChatId);

  useEffect(() => {
    if (chatId) {
      db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  }, [chatId]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("chats").doc(chatId).collection("messages").add({
      
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      uid: user.uid,
      photo: user.photo,
      email: user.email,
      displayName: user.displayName,
    });
    setInput(" ");
  };

  return (
    <div className="chat">
      {/* chatHeader */}
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">{chatName}</span>
        </h4>
        <strong>Details</strong>
      </div>

      {/* chat messages */}

      <div className="chat__messages">
        {messages.map(({ id, data }) => (
          <Message key={id} contents={data} />
        ))}
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
