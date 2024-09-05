const express = require("express");
const { connectToDb, getDb } = require("./database/database");
const dotenv = require("dotenv");
const app = express();
const socketIo = require("socket.io");
const cors = require("cors");

//Importer les routes userRoutes
const userRoutes = require("./routes/usersRoutes");

dotenv.config();
app.set("view engine", "ejs");

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json({ urlencoded: true }));
app.use(express.urlencoded());

const PORT = process.env.PORT || 8000;
connectToDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT, () => {
      console.log(PORT);
      console.log("Listening to the server");
    });
  }
  let database = getDb();
});
app.use("/api/users", userRoutes);

const http = require("http");
const server = http.Server(app);

server.listen(8001, () => {
  console.log("Listening");
});
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

let users = [];

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("chat message", (msg) => {
    console.log(msg);
    io.emit("chat message response", msg);
  });
  socket.on("new user", (data) => {
    users.push(data);
    io.emit("new user response");
  });
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});
