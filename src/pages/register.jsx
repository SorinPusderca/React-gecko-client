import { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { User } from "../models/user";
import { createUser } from "../services/myApi";
import "../App.css";
import { useNavigate } from "react-router-dom";
// import Login from "./logIn";

const user_regex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const pwd_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*?]).{8,24}&/;



const Register = () => {


  const navigate = useNavigate();

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);


  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(user_regex.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(pwd_regex.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    createUser(new User(user, pwd))
      .then(function (response) {
        navigate(`/login`);
        console.log(response);
      })
      .catch(function (sinerr) {
       sinerr("User already exists");
        // this.state.error = error;
        console.log("User already exists", sinerr);
      });
  };



  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>

      <h1>Register</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <br />
        <input
          placeholder="username"
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          required
          aria-invalid={validName ? "false" : "true"}
          aria-describedby="uidnote"
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />
        <p
          id="uidnote"
          className={
            userFocus && user && !validName ? "instructions" : "offscreen"
          }
        >
          {/* <fontAwesomeIcon icon={faInfoCircle}/> */}
          {/* '3 to 23 characters. Must begin with letter.' */}
        </p>

        <label htmlFor="password">Password</label>
        <br />
        <input
          autoComplete="off"
          placeholder="password"
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          required
          aria-invalid={validPwd ? "false" : "true"}
          aria-describedby="pwdnote"
          onFocus={() => setPwdFocus(true)}
          onBlur={() => setPwdFocus(false)}
        />
        <p
          id="pwdnote"
          className={
            pwdFocus && user && !validPwd ? "instructions" : "offscreen"
          }
        >
          {/* <fontAwesomeIcon icon={faInfoCircle}/> */}
          {/* '3 to 23 characters. Must begin with letter.' */}
        </p>

        <label htmlFor="confirm_password">Confirm Password</label>
        <br />
        <input
          autoComplete="off"
          placeholder="confirm password"
          type="password"
          id="confirm_password"
          onChange={(e) => setMatchPwd(e.target.value)}
          required
          aria-invalid={validMatch ? "false" : "true"}
          aria-describedby="confirmnote"
          onFocus={() => setMatchFocus(true)}
          onBlur={() => setMatchFocus(false)}
        />
        <p
          id="confirmnote"
          className={
            matchFocus && user && !validMatch ? "instructions" : "offscreen"
          }
        >
        </p>
        <button  type="submit">Sign in</button>
        {/* {this.state.error != null && <p>{this.state.error}</p>} */}
      </form>
    </section>
  );
};

export default Register;
