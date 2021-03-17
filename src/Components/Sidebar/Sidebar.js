import { Avatar, IconButton } from "@material-ui/core";
import RateReviewIcon from "@material-ui/icons/RateReview";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__inputs">
          <SearchIcon />
          <input placeholder="Search" />
        </div>

        <IconButton variant="outlined" className="sidebar__inputButton">
          <RateReviewIcon />
        </IconButton>
      </div>

      <div className="sidebar__chats"></div>
    </div>
  );
}

export default Sidebar;
