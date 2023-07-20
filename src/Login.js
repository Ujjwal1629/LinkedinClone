import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Login.css";
import login from "./features/userSlice";
import logo from ".//images/logo.png";
import { auth } from "./Firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const dispatch = useDispatch();
  const loginApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
        })
      );
    });
  };
  const registerApp = () => {
    if (!name) {
      return alert("Please enter your name");
    }
    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user
        .updateProfile({
          displayName: name,
        })
        .then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
            })
          );
        });
    });
  };
  return (
    <div className="login">
      <div className="loginPage">
        <img src={logo} className="login__logo" alt="" />
        <h2>Welcome to your professional community</h2>
        <div action="" className="login__form">
          <label>Email or Phone</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Joining?</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="(Full Name, required only if Joining)"
          />
          <label>Photo Url</label>
          <input
            type="text"
            placeholder="(Optional)"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
          <p className="login__forgot">Forgot password?</p>
          <button className="login__button" onClick={loginApp}>
            Sign In
          </button>
          <p>or</p>
          <button className="login__button" onClick={registerApp}>
            New to LinkedIn? Join Now
          </button>
        </div>
      </div>
    </div>
  );
}
