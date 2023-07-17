import './MedicalFundRaise.css';
import { Link } from 'react-router-dom';
function PetFundRaise(){
    return(
        <div className="MF_page">
        <div className="cen">
        <h1>Step 1</h1>
        <form>
        <div className='txt'>
        <p>Is it your personal pet or for common cause?</p>
        <select>
        <option value="Mother">Personal pet</option>
        <option value="Father">Common cause</option>
        </select>
        </div>
        <div className="txt">
        <input type="number" name="amount" style={{color:'white'}} required min="100" step="50"></input>
        <span></span>
        <label>Amount you want to raise</label>
        </div>
        <div className='txt'>
        <input type="text" name="Title" style={{color:'white'}} required></input>
        <span></span>
        <label>Fundraiser Title </label>
        </div>
        <div className="Next_button">
       <Link to="/PetFundRaise1"> <input type="submit" value=" Next"></input></Link>
        </div>
        </form>
        </div>
        </div> 
        );
}
export default PetFundRaise;