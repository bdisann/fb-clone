import React from "react";
import SidebarRow from "./SidebarRow";
import {
  Chat as ChatIcon,
  EmojiFlags as EmojiFlagsIcon,
  ExpandMoreOutlined as ExpandMoreOutlinedIcon,
  LocalHospital as LocalHospitalIcon,
  People as PeopleIcon,
  Storefront as StorefrontIcon,
  VideoLibrary as VideoLibraryIcon,
} from "@material-ui/icons";
import "../styles/Sidebar.css";
import { useStateValue } from "../contexts/StateProvider";

const Sidebar = () => {
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace" />
    </div>
  );
};

export default Sidebar;
