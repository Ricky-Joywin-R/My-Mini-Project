import './MedicalFundRaise1.css';
import {Link} from 'react-router-dom';
function EducationFundRaise1(){
    return(
        <div className="MF1_page">
        <div className="cn">
        <h1>Step 2</h1>
        <form>
        <div className='tx'>
        <p>Explain in detail about the educational need of the Beneficiary</p>
        <textarea rows="12" cols="70" required></textarea>
        </div>
        <input type="file"  accept="image/*"  id="file" required>
        </input>
        <div className="file_label">
        <label for="file">Upload beneficiary photo and educational certificates </label>
        </div>
        <div className="Next_button1">
        <Link to="/AccountDetails"><input type="submit" value=" Next"></input></Link>
        </div>
        </form>
        </div>
        </div> 

    );
}
export default EducationFundRaise1;