import './MedicalFundRaise1.css';
import {useNavigate,useLocation} from 'react-router-dom';
import {useState} from 'react';
function MedicalFundRaise1(props){
    const[story,setStory]=useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const relation = location.state.relation;
    const amount = location.state.amount;
    const fundTitle = location.state.fundTitle;

    const handleChangeStory=(e)=>{
        setStory(e.target.value);
    }
    const handleSubmit = (e) => {
      e.preventDefault();
  
        navigate("/AccountDetails", {
          state: {
             relation,
             amount,
             fundTitle,
             story
          },
        });
      
    };
  
    return(
        <div className="MF1_page">
        <div className="cn">
        <h1>Step 2</h1>
        <form onSubmit={handleSubmit}>
        <div className='tx'>
        <p>What Happened to the patient?</p>
        <textarea rows="12" cols="70" required onChange={handleChangeStory}></textarea>
         </div>
         <input type="file"  accept="image/*"  id="file" >
         </input>
         <div className="file_label">
        <label for="file">Upload patient photo</label>
        </div>
        <div className="Next_button1">
       <button>Next</button>
        </div>
        </form>
        </div>
        </div> 

    );
}


export default MedicalFundRaise1;