import { Avatar } from "@material-ui/core";
import React from "react";
import { selectUser } from "../../features/userSlice";
import "./message.css";
import { useSelector } from "react-redux";

const Message = ({
  id,
  contents: { timestamp, displayName, email, message, photo, uid },
}) => {
  const user = useSelector(selectUser);
  return (
    <div className={`message ${user.email == email && "message__sender"}`}>
      <Avatar src={photo} />
      <p>{message}</p>
      <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
    </div>
  );
}

export default Message;
