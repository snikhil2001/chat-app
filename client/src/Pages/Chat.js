import React, { useEffect, useState } from "react";
import axios from "axios";

const Chat = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const { data } = await axios.get("http://localhost:8080/api/chat");
    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((el) => {
        return <div key={el._id}>{el.chatName}</div>;
      })}
    </div>
  );
};

export default Chat;
