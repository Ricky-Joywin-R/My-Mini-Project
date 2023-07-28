import './MedicalFundRaise.css';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
function MedicalFundRaise(props){
  
     const[relation,setRelation]=useState('');
    const[amount,setAmount]=useState('');
    const[fundTitle,setFundTitle]=useState('');

    const navigate = useNavigate();

  const handleChangeRelation=(e)=>{
      setRelation(e.target.value);
   
  };
  const handleChangeAmount=(e)=>{
    setAmount(e.target.value);
    
  };
  const handleChangeFundTitle=(e)=>{
    setFundTitle(e.target.value);
    
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate("/MedicalFundRaise1", {
      state: {
         relation,
         amount,
         fundTitle
      },
    });

  }

    return(
        <div className="MF_page">
        <div className="cen">
        <h1>Step 1</h1>
        <form onSubmit={handleSubmit}>
        <div className='txt'>
        <p>How is the patient related to you?</p>
        <select onChange={handleChangeRelation}   type="text">
        <option value="Mother">Mother</option>
        <option value="Father">Father</option>
        <option value="Son">Son</option>
        <option value="Daughter">Daughter</option>
        <option value="Friend">Friend</option>
        <option value="Relative">Relative</option>
        <option value="Myself">Myself</option>
        <option value="Other">Other</option>
        </select>
        </div>
        <div className="txt">
        <input type="number" name="amount" style={{color:'white'}} required min="5000" step="3000"  max ="50000000" onChange={handleChangeAmount} value={amount}></input>
        <span></span>
        <label>Amount you want to raise</label>
        </div>
        <div className='txt'>
        <input type="text" name="Title" style={{color:'white'}} required onChange={handleChangeFundTitle} value={fundTitle}></input>
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

export default MedicalFundRaise;
