import Home from "./pages/home/Home";
import Profile from "./pages/home/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Route, Routes } from "react-router-dom";
import Router from "./Routes/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
