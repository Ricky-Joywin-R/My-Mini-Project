import './MedicalFundRaise.css';
import { Link } from 'react-router-dom';
function MemorialFundRaise(){
    return(
        <div className="MF_page">
        <div className="cen">
        <h1>Step 1</h1>
        <form>
        <div className='txt'>
        <p>How is the dead person related to you?</p>
        <select>
        <option value="Mother">Mother</option>
        <option value="Father">Father</option>
        <option value="Son">Son</option>
        <option value="Daughter">Daughter</option>
        <option value="Friend">Friend</option>
        <option value="Relative">Relative</option>
        <option value="Other">Other</option>
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
       <Link to="/MemorialFundRaise1"> <input type="submit" value=" Next"></input></Link>
        </div>
        </form>
        </div>
        </div> 
        );
}
export default MemorialFundRaise;