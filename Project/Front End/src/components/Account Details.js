import './AccountDetails.css';
import {useNavigate,useLocation} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';

function AccountDetails(props){

      
   const[accountHolderName,setAccountHolderName]=useState('');
   const[accountNumber,setAccountNumber]=useState('');
   const[ifsc,setIfsc]=useState('');
   const[bankDetails,setBankDetails]=useState('');
   const navigate=useNavigate();
   const location = useLocation();

   const handleChangeAccountHolderName=(e)=>{
         setAccountHolderName(e.target.value);
   }
   const handleChangeAccountNumber=(e)=>{
         setAccountNumber(e.target.value);
   }
   const handleChangeIfsc=(e)=>{
         setIfsc(e.target.value);
   }
   const handleChangeBankDetails=(e)=>{
         setBankDetails(e.target.value);
   }

  const handleSubmit=(e)=>{
      e.preventDefault();

      const data = {
         relation:location.state.relation,
         raise_amount: location.state.amount,
         fund_title: location.state.fundTitle,
         patient_story:location.state.story,
         account_holder_name:accountHolderName,
         account_number:accountNumber,
         ifsc_code:ifsc,
         bank_details:bankDetails
       };
       const saved = axios.post("http://127.0.0.1:8080/medfund", data);
       if (saved) {
         navigate("/Success");
         console.log(data);
       }
   }

   return(
     <div className="A_page">
     <div className="ct">
     <h1>Account Details</h1>
     <form onSubmit={handleSubmit}>
     <div className="tf">
     <input type="text" name="Name" style={{color:'white'}} required onChange={handleChangeAccountHolderName} value={accountHolderName}></input>
     <span></span>
     <label>Account Holder Name</label>
     </div>
     <div className='tf'>
     <input type="text" name="account_number" style={{color:'white'}} required onChange={handleChangeAccountNumber} value={accountNumber}></input>
     <span></span>
     <label>Account Number</label>
     </div>
     <div className='tf'>
     <input type="text" name="ifsc" style={{color:'white'}} required onChange={handleChangeIfsc} value={ifsc}></input>
     <span></span>
     <label>IFSC Code</label>
     </div>
     <div className='tf'>
        <p>Bank Details</p>
        <textarea rows="8" cols="70" required onChange={handleChangeBankDetails} value={bankDetails}></textarea>
        </div>
     <div className="A_button">
    <button type='submit'>Create</button>
     </div>
     </form>
     </div>
     </div> 

   );
}

    
    export default AccountDetails;