import Layout from './Layout';
import './FundRaise.css';
import {Link} from 'react-router-dom';
const FundRaise=()=>{
    return(
        <Layout>
        <div className="Fund_page">
<h1>Causes you can raise funds for</h1>
<p>Be it for personal need,social cause or a creative idea-you can count on us for the project that you want to raise funds for. </p>
<div className="Fund_Images">
<Link to="/MedicalFundRaise"><img  src="/images/medical.jpg" height="200px" width="200px"></img></Link> 
<Link to="/PetFundRaise"> <img  src="/images/Pet.jpg" height="200px" width="200px"></img></Link>
<Link to="/MemorialFundRaise"><img  src="/images/Memorial.jpg" height="200px" width="200px"></img></Link>
<Link to="/EducationFundRaise"><img  src="/images/Education.png" height="200px" width="200px"></img></Link>
</div>
</div>
        </Layout>
    );
}
export default FundRaise;