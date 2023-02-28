const express = require("express");
require("dotenv").config();
const cors = require("cors");
const chats = require("./dummyData/data");
const PORT = process.env.PORT || 5050;

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  return res.send("API is running");
});

app.get("/api/chat", (req, res) => {
  return res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c.id === req.params.id);
  return res.send(singleChat);
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
