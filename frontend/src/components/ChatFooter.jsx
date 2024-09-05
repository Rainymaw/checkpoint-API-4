import { useState } from "react";
import "./Chat.css";

function ChatFooter({ socket }) {
  const [message, setMessage] = useState("");
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit("chat message", {
        text: message,
        name: localStorage.getItem("userName"),
        id: 1,
        socketID: socket.id,
      });
    }
    setMessage("");
  };
  return (
    <div className="chat-footer">
      <form onSubmit={(e) => handleSendMessage(e)}>
        <input
          type="text"
          placeholder="write message here"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input type="submit" value="SEND" className="send-button" />
      </form>
    </div>
  );
}

export default ChatFooter;
