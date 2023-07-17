import './MedicalFundRaise1.css';
import {Link} from 'react-router-dom';
function MedicalFundRaise1(){
    return(
        <div className="MF1_page">
        <div className="cn">
        <h1>Step 2</h1>
        <form>
        <div className='tx'>
        <p>What Happened to the patient?</p>
        <textarea rows="12" cols="70" required></textarea>
        </div>
        <input type="file"  accept="image/*"  id="file" required>
        </input>
        <div className="file_label">
        <label for="file">Upload patient photo</label>
        </div>
        <div className="Next_button1">
        <Link to="/AccountDetails"><input type="submit" value=" Next"></input></Link>
        </div>
        </form>
        </div>
        </div> 

    );
}
export default MedicalFundRaise1;