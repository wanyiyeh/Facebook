import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Home from "../pages/home/Home";
import Profile from "../pages/home/profile/Profile";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import Messenger from "../pages/messenger/Messenger";

export default function Router() {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      <Route element={user ? <Home /> : <Login />} path="/" />
      <Route element={<Register />} path="/register" />
      <Route element={<Home />} path="/Home" />
      <Route element={<Profile />} path="/profile" />
      <Route element={<Messenger />} path="/messanger" />
    </Routes>
  );
}
