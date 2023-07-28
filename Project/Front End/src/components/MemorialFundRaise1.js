import './MedicalFundRaise1.css';
import {useNavigate,useLocation} from 'react-router-dom';
import {useState} from 'react';
function MemorialFundRaise1(){
    const[story,setStory]=useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleChangeStory=(e)=>{
        setStory(e.target.value);
    }
    const deadPerson = location.state.deadPerson;
    const amount = location.state.amount;
    const  title =location.state.title;

    const handleSubmit=(e)=>{
        e.preventDefault();

        navigate('/AccountDetails2',
        {
            state:{
                deadPerson,
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
        <p>Describe your story in detail</p>
        <textarea rows="12" cols="70" required onChange={handleChangeStory} value={story}></textarea>
        </div>
        <input type="file"  accept="image/*"  id="file">
        </input>
        <div className="file_label">
        <label for="file">Upload Dead Person photo</label>
        </div>
        <div className="Next_button1">
        <button type="submit">Next</button>
        </div>
        </form>
        </div>
        </div> 

    );
}
export default MemorialFundRaise1;