
// import {useState, useEffect, useRef } from "react";




// const user_regex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
// const pwd_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*?]).{8,24}&/;



// const Register = () => {
//     const userRef = useRef();
//     const errRef = useRef();

//     const [user, setUser] = useState('');
//     const [validName, setValidName] = useState(false);
//     const [userFocus, setUserFocus] = useState(false);

//     const [pwd, setPwd] = useState('');
//     const [validPwd, setValidPwd] = useState(false);
//     const [pwdFocus, setPwdFocus] = useState(false);

//     const [matchPwd, setMatchPwd] = useState('');
//     const [validMatch, setValidMatch] = useState(false);
//     const [matchFocus, setMatchFocus] = useState(false);

//     const [errMsg, setErrMsg] = useState('');
//     const [success, setSuccess] = useState(false);

//      useEffect(() => {
//         userRef.current.focus();
//     }, [])

//     useEffect(() => {
//         setValidName(user_regex.test(user));
//     }, [user])

//     useEffect(() => {
//         setValidPwd(pwd_regex.test(pwd));
//         setValidMatch(pwd === matchPwd);
//     }, [pwd, matchPwd])

//     useEffect (() =>{
//         setErrMsg ('')
//     },[user, pwd, matchPwd])

//     return(
//         <section>
//             <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive" >{errMsg}</p>
//         </section>
//     )
// };

// export default Register