 import './Login.css'; 
 import {Link,useNavigate} from 'react-router-dom';
 import {useState} from 'react';
 import axios from 'axios';

 function Login(){
  const[email,SetEmail] = useState("");
  const[password,SetPassword] = useState("");
  const navigate = useNavigate();


  const handleChangeMail=(e)=>{
    const value = e.target.value;
    SetEmail(value);
  }
  const handleChangePass=(e)=>{
    const value = e.target.value;
    SetPassword(value);
  }
  
  
  // const handleSubmit=(e)=>{
  //   e.preventDefault();
    
  //   if(email.trim()===""||password.trim()===""){
  //     alert("Please enter both email and password");
  //     return;
  //   }
    
  //   const User = details.some(User=>User.user_email === email && User.user_password === password);
    
  //   if(User){
  //     navigate("/Homepage");
  // } 
  //   else{
  //     alert("User not found,Please check your credentials.");
  //   }
  // }
  const handleSignIn = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://127.0.0.1:8181/api/v1/auth/authenticate', {
        email: email,
        password: password,
      });
  
      let token = response.data.token;
      let user = response.data.userResponse;
      localStorage.setItem('token', token);
      // localStorage.setItem('user', JSON.stringify(user));
  
      navigate('/Homepage');
    } catch (error) {
      console.error('Error: ', error);
    }
  };
  return(
    <div className="L_page">
      <div className="c">
      <h1> Login</h1>
      <form onSubmit={handleSignIn}>
      <div className="text_field">
      <input type="email" name="e-mail" value={email} onChange={handleChangeMail} required></input>
      <span></span>
      <label>Your Email</label>
      </div>
      <div className="text_field">
      <input type="password" value={password} onChange={handleChangePass} required ></input>
      <span></span>
      <label>Password</label>
      </div>
      <div className="pass">Forgot Password?</div>
      <div className="L_button">
      <button type="submit" >Login</button>
      </div>
      <div className="signup_link">
      Not a member? <Link to="/SignUp">SignUp</Link>
      </div>
      </form>
      </div>
      </div> 
      );
    }
 export default Login;