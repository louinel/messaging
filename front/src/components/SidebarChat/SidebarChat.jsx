import { useState, useEffect } from "react";
import "./SidebarChat.css";
import { Avatar } from "@mui/material";

const SidebarChat = () => {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="sidebarChat">
      <Avatar src={`https://api.dicebear.com/8.x/lorelei/svg?seed={seed}`} />
      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>Last message...</p>
      </div>
    </div>
  );
};

export default SidebarChat;
