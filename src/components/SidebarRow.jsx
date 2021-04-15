import { Avatar } from "@material-ui/core";
import React from "react";
import "../styles/SidebarRow.css";

const SidebarRow = ({ src, title, Icon }) => {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4 className="sidebarRow__title">{title}</h4>
    </div>
  );
};

export default SidebarRow;
