import { Avatar } from '@material-ui/core';
import React from 'react'
import "./sidebarChat.css";

function SidebarChat({id , chatName}) {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h3>{chatName}</h3>
                <p>Last message sent...</p>
                <small>Timestamp</small>
            </div>
        </div>
    );
}

export default SidebarChat;
