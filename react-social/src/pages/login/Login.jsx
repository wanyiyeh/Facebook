import "./login.css";
import { useRef, useContext } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user);
  // console.log(email.current.value);
  // console.log(password.current.value);
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
              placeholder="Email"
              className="loginInput"
              ref={email}
              type="email"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
              ref={password}
              minLength="6"
              required
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress
                  style={{ color: "white", fontSize: "20px" }}
                />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password ?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress
                  style={{ color: "white", fontSize: "20px" }}
                />
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
