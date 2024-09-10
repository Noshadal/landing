import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./assets/Home";
import NotFound from "./NotFound";
import Sign from "./assets/Sign";
import Login from "./assets/Login";
import MessageCard from "./assets/Chat";
import Loasing from "./assets/Loading"
import './App.css' 

function App() {
  
  return (
    
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Loasing />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/messgecard" element={<MessageCard />} />
      <Route path="/Sign" element={<Sign />} />
      <Route path="/Login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  
  );
}

export default App