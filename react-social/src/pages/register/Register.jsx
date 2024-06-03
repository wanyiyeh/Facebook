import "./register.css";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        const res = await axios.post("/auth/register", user);
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              className="loginInput"
              ref={username}
              required
            />
            <input
              placeholder="Email"
              className="loginInput"
              ref={email}
              required
              type="email"
            />
            <input
              placeholder="Password"
              className="loginInput"
              ref={password}
              type="password"
              required
              minLength="6"
            />
            <input
              placeholder="Password Again"
              className="loginInput"
              ref={passwordAgain}
              required
              type="password"
              minLength="6"
            />
            <button className="loginButton">Sign Up</button>
            <span className="loginForgot">Forgot Password ?</span>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
