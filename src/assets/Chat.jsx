import React, { useState, useEffect } from "react";
import moment from "moment";
import Send from "./Send.png";
import { db } from "./firbase.config";
import { useLocation } from "react-router-dom";
import { addDoc, collection, query, where, onSnapshot } from "firebase/firestore";

const MessageCard = () => {
  const { state } = useLocation();
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "chat"),
      where(state.uid, "==", true),
      where(state.myuid, "==", true)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list = [];
      snapshot.forEach((doc) => {
        list.push(doc.data());
      });
      const sortedList = list.sort((a, b) => a.createdAt - b.createdAt);
      setChat(sortedList);
    });
    return unsubscribe;
  }, [state.uid, state.myuid]);

  const sendMessage = (e) => {
    e.preventDefault();
    addDoc(collection(db, "chat"), {
      message,
      [state.uid]: true,
      [state.myuid]: true,
      sender: state.myuid,
      createdAt: Date.now(),
    });

    setMessage("");
  };

  return (
    <div className="flex flex-col h-screen bg-blue-100 text-black">
      <div className="flex items-center p-3 bg-green-900 shadow-md">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <svg
            className="h-8 w-8 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4 21v-5.586L2.293 14.93A1 1 0 012 13.586V4a2 2 0 012-2h14a2 2 0 012 2v9a2 2 0 01-2 2h-6.586L6 19.586V21a1 1 0 01-2 0zM4 4v8.586l1.293 1.293A1 1 0 016 14.586L7.586 13H18V4H4z" />
          </svg>
          <span className="text-xl font-semibold text-white">
            {"<"}Chat with {state.name}{" />"}
          </span>
        </a>
      </div>
      <div className="flex-grow p-4 overflow-y-auto">
        {chat.map((item, index) => (
          <div
            key={index}
            className={`my-2 border-1 rounded-lg bg-blue-300  flex-col flex-wrap text-black flex max-w-[40%] p-3  ${
              item.sender === state.myuid
                ? "ml-auto text-right"
                : "mr-auto text-left"
            }`}
          >
            <p>{item.message}</p>
            <p className="text-gray-600 text-xs">
              {moment(item.createdAt).startOf('second').fromNow()}
            </p>
          </div>
        ))}
      </div>
      <form className="flex p-4 bg-white" onSubmit={sendMessage}>
        <input
          type="text"
          className="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
          placeholder="Type your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button className="ml-2">
          <img
            src={Send}
            alt="Send"
            className="w-8 h-8"
          />
        </button>
      </form>
    </div>
  );
};

export default MessageCard;
