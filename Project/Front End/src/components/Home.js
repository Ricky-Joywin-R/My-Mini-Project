import Layout from './Layout';
import './Home.css'
import {useEffect,useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
function Homepage(){
    const navigate=useNavigate();
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        // User is authenticated
        setAuthenticated(true);
      } else {
        // User is not authenticated
        setAuthenticated(false);
      }
    }, []);
  
    if (!authenticated) {
      // User is not authenticated, redirect to the login page
      navigate('/');
      return null; // Render nothing until the redirect happens
    }
return(
<Layout>
<div className="H_Page"> 
<div className="Card">
<h1>
"Donate or Raise Funds to help your Loved Ones!"
</h1>
<p>
Fura is a trusted Fundraising app where you can donate money to those who are in need or you can start your own fundraising campaign to help your well wisher.What are you waiting for.Donate or start a fundraising campaign to help others to save their life or improve their livelihood.
</p>
<img src="/images/Home Page img1.jpg" height="300px" width="400px"></img>
<Link to="/FundRaise"><button className="fund_button" type="submit">Start a Fundraiser for Free</button></Link>
</div>
<div className="Card2">
<h1>
"Giving is not just about making a donation.It is about making a difference"
</h1>
<p>
It's not about the amount you contribute but it's about the thought of yours to help others which shows your kindness towards humanity.Your small contribution can help a lot for the person in need. 
</p>
<img src="/images/Home Page img2.jpeg" height="300px" width="400px"></img>
<Link to="/Donate"><button className="donate_button" type="submit">Donate</button></Link>
</div>
<div className="Card3">
<h1>Causes you can raise funds for</h1>
<p>Be it for personal need,social cause or a creative idea-you can count on us for the project that you want to raise funds for. </p>
<div className="Images">
 <Link to="/MedicalFundRaise"><img  src="/images/medical.jpg" height="200px" width="200px"></img></Link>
 <Link to="/PetFundRaise"><img  src="/images/Pet.jpg" height="200px" width="200px"></img></Link>
 <Link to="/MemorialFundRaise"><img  src="/images/Memorial.jpg" height="200px" width="200px"></img></Link>
<Link to="/EducationFundRaise"><img  src="/images/Education.png" height="200px" width="200px"></img></Link>
</div>
</div>
</div>
</Layout>
);
}
export default Homepage;