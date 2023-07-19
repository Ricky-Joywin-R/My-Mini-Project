 import './SignUp.css';
 import { useState,useRef,useEffect} from 'react';
 import { faCheck,faTimes,faInfoCircle } from '@fortawesome/free-solid-svg-icons';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import {Link} from 'react-router-dom';
 import axios from 'axios';
 import { useNavigate } from 'react-router-dom';
 const NAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
 const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?.=*[!@#$%]).{8,23}$/;
 const EMAIL_REGEX = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
 const MOBILE_REGEX = /^[0-9]{10}$/
function SignUp(){
  const userRef = useRef();
  const errRef = useRef();

  const[Name,setName] = useState("");
  const[validName,setValidName] = useState(false);
  const[nameFocus,setNameFocus] = useState(false);

  const[email,setEmail] = useState("");
  const[validEmail,setValidEmail] = useState(false);
  const[emailFocus,setEmailFocus] = useState(false);

  const[mobile,setMobile] = useState("");
  const[validMobile,setValidMobile]=useState(false);
  const[mobileFocus,setMobileFocus] = useState(false);

  const[password,setPassword] = useState("");
  const[validPassword,setValidPassword] = useState(false);
  const[passwordFocus,setPasswordFocus] = useState(false);

const[errMsg,setErrMsg] = useState("");
const[success,setSuccess] = useState(false);

useEffect(()=>{
  userRef.current.focus();
},[]);

useEffect(()=>{
  const result = NAME_REGEX.test(Name);
  console.log(result);
  console.log(Name);
  setValidName(result);
},[Name]);

useEffect(()=>{
  const result = EMAIL_REGEX.test(email);
  console.log(result);
  console.log(email);
  setValidEmail(result);
},[email]);

useEffect(()=>{
  const result = PWD_REGEX.test(password);
  console.log(result);
  console.log(password);
  setValidPassword(result);
},[password]);

useEffect(()=>{
  const result = MOBILE_REGEX.test(mobile);
  console.log(result);
  console.log(mobile);
  setValidMobile(result);
},[mobile]);

useEffect(()=>{
  setErrMsg('');
},[Name,email,password,mobile]);

  const navigate = useNavigate();

  const handleChangeName=(e)=>{
    setName(e.target.value);
  };
  const handleChangeEmail=(e)=>{
    setEmail(e.target.value);
  };
  const handleChangeMobile=(e)=>{
    setMobile(e.target.value);
  };
  const handleChangePassword=(e)=>{
    setPassword(e.target.value);
  };
  const handleSubmit=(e)=> {
    e.preventDefault();
    const data={
      user_name:Name,
      user_email:email,
      user_mobile:mobile,
      user_password:password
    }
    const saved = axios.post("http://127.0.0.1:8080/save",data);
    if(saved){
      navigate("/Homepage");
      console.log(data);
    }
  }
    return(
      <div className="S_page">
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live='assertive'>{errMsg}</p>
      <div className="center">
      <h1>SignUp</h1>
      <form method="post" onSubmit={handleSubmit}>
      <div className="txt_field">
      <input type="text" name="Name" ref={userRef}  autoComplete='off'  value={Name} onChange={handleChangeName}  required aria-invalid={validName ? "false" : "true"} aria-describedby='uidnote' onFocus={()=>setNameFocus(true)} onBlur={()=>setNameFocus(false)}></input>
      <span></span>
      <label>Name
      <span className={validName ? "valid" : "hide"}>
      <FontAwesomeIcon icon={faCheck}/>
      </span>
      <span className={validName || !Name ? "hide" : "invalid"}>
      <FontAwesomeIcon icon={faTimes}/>
      </span>
      </label>
      <p id="uidnote" className={nameFocus && Name && !validName ? "instructions" : "offscreen"}>
      <FontAwesomeIcon icon={faInfoCircle}/>
      4 to 24 charcters.<br/>
      Must begin with a letter.<br/>
      Letters,numbers,underscores,hyphens allowed.
      </p>
      </div>
      <div className='txt_field'>
      <input type="email" name="Email" value={email} ref={userRef} autoComplete='off' onChange={handleChangeEmail}  required aria-invalid={validEmail ? "false" : "true"} aria-describedby='emailnote' onFocus={()=>setEmailFocus(true)} onBlur={()=>setEmailFocus(false)}></input>
      <span></span>
      <label>Email
      <span className={validEmail ? "valid" : "hide"}>
      <FontAwesomeIcon icon={faCheck}/>
      </span>
      <span className={validEmail || !email ? "hide" : "invalid"}>
      <FontAwesomeIcon icon={faTimes}/>
      </span>
      </label>
      <p id="emailnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
      <FontAwesomeIcon icon={faInfoCircle}/>
      there should be @ symbol.<br/>
      Letters,numbers,underscores,hyphens allowed.
      </p>
      </div>
      <div className='txt_field'>
      <input type="tel" name="phone" value={mobile} onChange={handleChangeMobile}  ref={userRef} autoComplete='off'   required aria-invalid={validMobile ? "false" : "true"} aria-describedby='mobilenote' onFocus={()=>setMobileFocus(true)} onBlur={()=>setMobileFocus(false)}></input>
      <span></span>
      <label>Mobile</label>
      </div>
      <div className="txt_field">
      <input type="password" name="pass" value={password}  onChange={handleChangePassword} required></input>
      <span></span>
      <label>Password</label>
      </div>
      <div className="S_button">
      <button type="submit">SignUp</button>
      </div>
      <div className="login_link">
      Already a member? <Link to="/">Login</Link>
      </div>
      </form>
      </div>
      </div> 

    );
}
export default SignUp;