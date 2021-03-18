import { Avatar } from "@material-ui/core";
import React from "react";
import "./message.css";

function Message({
  id,
  contents: { timestamp, displayName, email, message, photo, uid },
}) {
  return (
    <div className="message">
      <Avatar src={photo} />
      <p>{message}</p>
      <small>{new Date(timestamp?.toDate()).toUTCString()}</small>
    </div>
  );
}

export default Message;
