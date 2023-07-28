import './MedicalFundRaise.css';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
function PetFundRaise(){
const[cause,setCause]=useState('');
const[amount,setAmount]=useState('');
const[title,setTitle]=useState('');
const navigate = useNavigate();

const handleChangeCause=(e)=>{
    setCause(e.target.value);
}
const handleChangeAmount=(e)=>{
    setAmount(e.target.value);
}
const handleChangeTitle=(e)=>{
    setTitle(e.target.value);
}

const handleSubmit=(e)=>{
    e.preventDefault();
    navigate('/PetFundRaise1',{

        state:
        {
           cause,
           amount,
           title
            
        }
        })
}
    return(
        <div className="MF_page">
        <div className="cen">
        <h1>Step 1</h1>
        <form onSubmit={handleSubmit}>
        <div className='txt'>
        <p>Is it your personal pet or for common cause?</p>
        <select  onChange={handleChangeCause}  type="text">
        <option value="Personal pet">Personal pet</option>
        <option value="Common Cause">Common cause</option>
        </select>
        </div>
        <div className="txt">
        <input type="number" name="amount" style={{color:'white'}} required min="100" step="50" value={amount} onChange={handleChangeAmount}></input>
        <span></span>
        <label>Amount you want to raise</label>
        </div>
        <div className='txt'>
        <input type="text" name="Title" style={{color:'white'}} required value={title} onChange={handleChangeTitle}></input>
        <span></span>
        <label>Fundraiser Title </label>
        </div>
        <div className="Next_button">
         <button type="submit">Next</button>
        </div>
        </form>
        </div>
        </div> 
        );
}
export default PetFundRaise;