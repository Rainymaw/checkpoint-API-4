import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ socket }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const handleSignIn = () => {
    localStorage.setItem("userName", name);
    socket.emit("new user", { name, socketID: socket.id });
    navigate("/chatrooms");
  };
  return (
    <form action="" className="login-form">
      <label htmlFor="pseudo">Nickname</label>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        name=""
        id=""
      />
      <label htmlFor="password">password</label>
      <input
        type={showPwd ? "text" : "password"}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        name=""
        id=""
      />
      <input type="button" value="hide" onClick={() => setShowPwd(!showPwd)} />
      <input type="button" value="sign in" onClick={() => handleSignIn()} />
    </form>
  );
}

export default Login;
