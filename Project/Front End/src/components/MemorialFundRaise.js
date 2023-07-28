import './MedicalFundRaise.css';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
function MemorialFundRaise(){
    const[deadPerson,setDeadPerson]=useState('');
    const[amount,setAmount]=useState('');
    const[title,setTitle]=useState('');
    const navigate = useNavigate();

    const handleChangeDeadPerson=(e)=>{
        setDeadPerson(e.target.value);
    }
    const handleChangeAmount=(e)=>{
        setAmount(e.target.value);
    }
    const handleChangeTitle=(e)=>{
        setTitle(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
          
        navigate("/MemorialFundRaise1",{

            state:{
                deadPerson,
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
        <p>How is the dead person related to you?</p>
        <select onChange={handleChangeDeadPerson} type="text" value={deadPerson}>
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
        <input type="number" name="amount" style={{color:'white'}} required min="100" step="50" onChange={handleChangeAmount} value={amount}></input>
        <span></span>
        <label>Amount you want to raise</label>
        </div>
        <div className='txt'>
        <input type="text" name="Title" style={{color:'white'}} required onChange={handleChangeTitle} value={title}></input>
        <span></span>
        <label>Fundraiser Title </label>
        </div>
        <div className="Next_button">
      <button value="submit">Next</button>
        </div>
        </form>
        </div>
        </div> 
        );
}
export default MemorialFundRaise;