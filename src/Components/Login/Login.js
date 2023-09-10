import React, { useState, useContext } from "react";
import { FirebaseContext } from "../../store/firebaseContext";
import Logo from "../../olx-logo.png";
import "./Login.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { firebase } = useContext(FirebaseContext);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === null || email === "") {
      alert("Email must be needed");
    } else if (password === null || password === "") {
      alert("Password must be needed");
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            id="fname"
            name="email"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            id="lname"
            name="password"
          />
          <br />
          <br />
          <button
            onClick={() => {
              history.push("/login");
            }}
          >
            Login
          </button>
        </form>
        <a
          onClick={() => {
            history.push("/signup");
          }}
        >
          Signup
        </a>
      </div>
    </div>
  );
}

export default Login;
