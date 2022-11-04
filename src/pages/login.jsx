import "../App.css";
import { login } from "../services/myApi";
import { User } from "../models/user";
import { useState, useEffect, useRef } from "react";

const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    login(new User(user, pwd))
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const userRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  return (
    <section id="log_in">
      <div className="logIn">
        <h3>Welcome back!</h3>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Username</p>
            <input
              autoComplete="off"
              ref={userRef}
              onChange={(e) => setUser(e.target.value)}
              className="inputU_P"
              type="text"
            />
          </label>
          <br />
          <label>
            <p>Password</p>
            <input
              autoComplete="off"
              onChange={(e) => setPwd(e.target.value)}
              className="inputU_P"
              type="password"
            />
          </label>
          <br />
          <div>
            <button className="btn_log_in" type="submit">
              Login
            </button>
          </div>
          <br />
        </form>
      </div>
    </section>
  );
};

export default Login;
