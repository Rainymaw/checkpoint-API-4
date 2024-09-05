import React from "react";
import "./Chat.css";

function ChatBody({ messages }) {
  return (
    <>
      <div className="chat-container">
        {messages.map((message, index) =>
          message.name === localStorage.getItem("userName") ? (
            <div key={index} className="chat-message">
              <div className="sender-name">{message.name}</div>
              <div className="sender-message">{message.text}</div>
            </div>
          ) : (
            <div key={index} className="chat-message">
              <div className="recipient-name">{message.name}</div>
              <div className="recipient-message">{message.text}</div>
            </div>
          )
        )}
      </div>
    </>
  );
}

export default ChatBody;
