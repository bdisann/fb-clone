import React from "react";
import "../styles/Story.css";
import { Avatar } from "@material-ui/core";

const Story = ({ imageUrl, profileSrc, displayName }) => {
  return (
    <div style={{ backgroundImage: `url(${imageUrl})` }} className="story">
      <Avatar className="story__avatar" src={profileSrc} />
      <h4>{displayName}</h4>
    </div>
  );
};

export default Story;
