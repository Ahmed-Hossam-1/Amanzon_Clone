import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "../style/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signIn = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const register = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login-inner">
        <Link to="/">
          <img
            className="login-logo"
            src="../images/login-logo.png"
            alt="logo-img"
          />
        </Link>
        <div className="login-container">
          <h1>Sign in</h1>
          <form>
            <h5>Email</h5>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login-signInBtn" type="submit" onClick={signIn}>
              Sign in
            </button>
            <p>
              By continuing, you agree to Amazon's Fake Clone Conditions of Use
              and Privacy Notice.
            </p>
            <button className="login-registerBtn" onClick={register}>
              Create your Amazon Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
