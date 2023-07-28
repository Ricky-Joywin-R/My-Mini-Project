 import './SignUp.css';
 import { useState} from 'react';
//  import { faCheck,faTimes,faInfoCircle } from '@fortawesome/free-solid-svg-icons';
//  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import {Link} from 'react-router-dom';
 import axios from 'axios';
 import { useNavigate } from 'react-router-dom';
 import { caseSuccess } from './UseSlice';
 import { useDispatch } from 'react-redux';
function SignUp(){
  const[Name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[mobile,setMobile] = useState("");
  const[password,setPassword] = useState("");
  const dispatch = useDispatch();

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

    // const data={
    //   user_name:Name,
    //   user_email:email,
    //   user_mobile:mobile,
    //   user_password:password
    // }
    // const saved = axios.post("http://127.0.0.1:8080/register",data);
    // if(saved){
    //   navigate("/Homepage");
    //   console.log(data);
    // }
    const handleSignUp = async (e) => {
      e.preventDefault();

      dispatch(caseSuccess({
        "name" :Name,
        "email":email,
        "mobilenumber":mobile,
        "password":password,
      }))
  
      try { 
        const response = await axios.post('http://127.0.0.1:8181/api/v1/auth/register', {
          name :Name,
          email:email,
          mobilenumber:mobile,
          password:password,
        });
  
        if (response.status === 200) {
          // setPopupMessage('Registered Successfully');
          navigate('/Homepage');
          setName('');
          setMobile('');
          setPassword('');
          setEmail('');
        }
      } catch (error) {
        console.error('Error: ', error);
      }
  
    };
    return(
      <div className="S_page">
      <div className="center">
      <h1>SignUp</h1>
      <form method="post" onSubmit={handleSignUp}>
      <div className="txt_field">
      <input type="text" name="Name" autoComplete='off' required onChange={handleChangeName}></input>
      <span></span>
      <label>Name</label>
      </div>
      <div className='txt_field'>
      <input type="email" name="Email" value={email} autoComplete='off' required onChange={handleChangeEmail}></input>
      <span></span>
      <label>Email</label>
      </div>
      <div className='txt_field'>
      <input type="tel" name="phone" value={mobile} onChange={handleChangeMobile} required autoComplete='off' pattern="[0-9]{10}"></input>
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