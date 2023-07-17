 import './Login.css';
 import {Link} from 'react-router-dom';
 function Login(){
    return(
      <div className="L_page">
      <div className="c">
      <h1> Login</h1>
      <form>
      <div className="text_field">
      <input type="email" name="e-mail" required></input>
      <span></span>
      <label>Your Email</label>
      </div>
      <div className="text_field">
      <input type="password" required ></input>
      <span></span>
      <label>Password</label>
      </div>
      <div className="pass">Forgot Password?</div>
      <div className="L_button">
      <Link to="/Homepage"><input type="submit" value="Login"></input></Link>
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