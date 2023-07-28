import Layout from "./Layout";
import './About.css';
function About(){
    return(
<Layout>
<div className="About">
<h1>About FURA</h1>
<p>Fura is a fund raising platform which has been helping people in distress and need for the past 10 years.
Our main aim is to save collect funds from people for the needy.
We don't do this as a business but as a service to the humanity.
We are very proud that many people's life has been saved because of our platform.</p>
<div className="About_Images">
<img src="/images/About1.jpg" height="300px" width="400px"></img>
<img src="/images/About2.jpg" height="300px" width="400px"></img>
<img src="/images/About3.jpg" height="300px" width="400px"></img>
</div>
</div>
</Layout>
    );
}
export default About;