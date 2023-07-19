import Layout from './Layout';
import './Donate.css';
const Donate=()=>{
    return(
        <Layout>
        <div className="Donate_Card">
<h1>
"Donate or Raise Funds to help your Loved Ones!"
</h1>
<img src="/images/Home Page img1.jpg" height="250px" width="250px"></img>
<p>
Fura is a trusted Fundraising app where you can donate money to those who are in need or you can start your own fundraising campaign to help your well wisher.What are you waiting for.Donate or start a fundraising campaign to help others to save their life or improve their livelihood.
</p>
<button className="fund_button" type="submit">Donate</button>
</div>
</Layout>
    );
}
export default Donate ;