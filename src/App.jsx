import { BrowserRouter,Route,Routes } from "react-router-dom";
import Nana from "./assets/Nana";
import './App.css' 
import NotFound from "./NotFound";
import Sign from "./assets/Sign";
import Login from "./assets/Login";
import MessageCard from "./assets/Chat";
function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Nana />} />
        <Route path="/messgecard" element={<MessageCard />} />
        <Route path="/Sign" element={<Sign />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App