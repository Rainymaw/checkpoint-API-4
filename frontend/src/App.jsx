import { useState } from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import { useEffect } from "react";

import "./App.css";
import Homepage from "./pages/Homepage";
import Chatrooms from "./pages/Chatrooms";
import socketIO from "socket.io-client";

function App() {
  const socket = socketIO.connect("http://localhost:8001");
  return (
    <>
      <BrowserRouter>
        <nav className="navbar">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/chatrooms">
            Chatrooms
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Homepage socket={socket} />} />
          <Route path="/chatrooms" element={<Chatrooms socket={socket} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
