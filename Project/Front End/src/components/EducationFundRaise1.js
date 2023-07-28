import './MedicalFundRaise1.css';
import {useLocation,useNavigate} from 'react-router-dom';
import{useState} from 'react';
function EducationFundRaise1(){
    const[story,setStory] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const cause = location.state.cause;
    const amount = location.state.amount;
    const title = location.state.title;

    const handleChangeStory=(e)=>{
        setStory(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        navigate("/AccountDetails3",{
            state:{
                cause,
                amount,
                title,
                story
            }
        })
    }
    return(
        <div className="MF1_page">
        <div className="cn">
        <h1>Step 2</h1>
        <form onSubmit={handleSubmit}>
        <div className='tx'>
        <p>Explain in detail about the educational need of the Beneficiary</p>
        <textarea rows="12" cols="70" required onChange={handleChangeStory} value={story} type="text"></textarea>
        </div>
        <input type="file"  accept="image/*"  id="file">
        </input>
        <div className="file_label">
        <label for="file">Upload beneficiary photo </label>
        </div>
        <div className="Next_button1">
        <button type="submit">Next</button>
        </div>
        </form>
        </div>
        </div> 

    );
}
export default EducationFundRaise1;