import './MedicalFundRaise1.css';
import {useState} from 'react';
import{useNavigate,useLocation} from 'react-router-dom'
function PetFundRaise1(){
    const[petStory,setPetStory]=useState('');
    const location=useLocation();
    const cause =  location.state.cause;
    const amount = location.state.amount;
    const title = location.state.title;
    const navigate = useNavigate();

    const handleChangePetStory=(e)=>{
        setPetStory(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();

        navigate('/AccountDetails1',{
            state:{
                cause,
                amount,
                title,
                petStory
            }
        })
    }
    return(
        <div className="MF1_page">
        <div className="cn">
        <h1>Step 2</h1>
        <form onSubmit={handleSubmit}>
        <div className='tx'>
        <p>What Happened to your pet?</p>
        <textarea rows="12" cols="70" required onChange={handleChangePetStory}></textarea>
        </div>
        <input type="file"  accept="image/*"  id="file">
        </input>
        <div className="file_label">
        <label for="file">Upload your pet photo</label>
        </div>
        <div className="Next_button1">
        <button type="submit">Next</button>
        </div>
        </form>
        </div>
        </div> 

    );
}
export default PetFundRaise1;