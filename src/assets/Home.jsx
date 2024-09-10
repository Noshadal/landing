import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import contact from "./contact.png";


import { useEffect } from "react";
import { db } from "./firbase.config";
import NavBar from "./Navebar";
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
    <NavBar/>
      <div  className="mt-[15vh]"></div>
      {user.map((item) => (
        <div key={item.uid} className="flex justify-between m-4 p-4 border-2 flex-wrap cursor-pointer hover:border-gray-700 " onClick={() => navigate("/messgecard", {state:{...item, myuid} })}>
          <div  className="flex justify-center items-center p-2">
          <img
              src={contact}
              alt="Send"
              className="w-15 flex justify-center items-center h-16 m-2 medeam" 
            />
          
          {item.name}
          <br />
          {item.email}
          </div>
          <button className="text-gray-800 font-bold text-[16px] w-32">Meeege</button>
        </div>
      ))}
          
    </>
  );
};

export default Home;
