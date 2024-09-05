import React, { useEffect, useState } from "react";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import "./Chat.css";

function Chat(props) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    props.socket.on("chat message response", (data) =>
      setMessages([...messages, data])
    );
  }, [messages]);
  return (
    <div className="chatroom">
      <ChatBody messages={messages} />
      <ChatFooter socket={props.socket} />
    </div>
  );
}

export default Chat;
