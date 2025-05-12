import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from './pages/Login/Login'
import Player from "./pages/Player/Player";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { ToastContainer } from 'react-toastify';

function App() {
  const navigate = useNavigate();

  useEffect(() => { 
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // console.log('Logged In');
        navigate('/');
      } else {
        // console.log('Logged Out');
        navigate('/login');
      }
    })
  }, [])

  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
}

export default App;