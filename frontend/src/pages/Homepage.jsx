import React, { useState } from "react";
import "./homepage.css";
import Login from "../components/Login";
import Signin from "../components/Signin";

function Homepage({ socket }) {
  const [login, setLogin] = useState(true);
  return (
    <div className="homepage">
      <div className="homepage-title">WATAP</div>
      <div className="login-signin">
        <input
          type="button"
          className="login-toggle"
          value="Login form"
          onClick={() => setLogin(true)}
        />
        <input
          type="button"
          className="signin-toggle"
          value="Signin form"
          onClick={() => setLogin(false)}
        />
      </div>
      {login ? <Login socket={socket} /> : <Signin />}
    </div>
  );
}

export default Homepage;
