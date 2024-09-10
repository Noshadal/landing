import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import contact from "./contact.png";


import { useEffect } from "react";
import { db } from "./firbase.config";
import { collection, getDocs } from "firebase/firestore";
const Home = () => {
  const [user, setuser] = useState([]);
  const [myuid, setuid] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    getusers();
  }, []);

  const getusers = async () => {
    let cid = localStorage.getItem('uid')
    setuid(cid)
    const list = [];
    const sanaplist = await getDocs(collection(db, "users"));
    sanaplist.forEach((item) => {
      list.push(item.data());
    });
    setuser(list);
  };

  return (
    <>
      {user.map((item) => (
        <div className="flex justify-between m-4 cursor-pointer border-2 p-2" onClick={() => navigate("/messgecard", {state:{...item, myuid} })}>
          <div className="flex justify-center items-center h p-2 ">
          <img
              src={contact}
              alt="Send"
              className="w-15 flex justify-center items-center h-16 m-2" 
            />
          
          {item.name}
          <br />
          {item.email}
          </div>
          <button>meeege</button>
        </div>
      ))}
          
    </>
  );
};

export default Home;
