import{Link} from'react-router-dom';
import './Success.css';
function Success(){
    return(
        <div className="Success">
        <h1>FundRaiser Created Successfully</h1>
        <Link to="/Homepage"><button type="submit">Back to Home</button></Link>
        </div>
    )
}
export default Success;