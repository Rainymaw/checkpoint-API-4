import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../components/Header";
import Rooms from "../components/Rooms";
import Chat from "../components/Chat";

import "./Chatrooms.css";
function Chatrooms({ socket }) {
  const [chatrooms, setChatrooms] = useState("");

  return (
    <div className="chatrooms">
      <Header />
      <div className="chatrooms-main">
        <Rooms />
        <Chat socket={socket} />
      </div>
    </div>
  );
}

export default Chatrooms;
