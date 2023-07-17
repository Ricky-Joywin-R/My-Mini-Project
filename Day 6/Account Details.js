import './AccountDetails.css';
import {Link} from 'react-router-dom';
function AccountDetails(){
   return(
     <div className="A_page">
     <div className="ct">
     <h1>Account Details</h1>
     <form method="post">
     <div className="tf">
     <input type="text" name="Name" style={{color:'white'}} required></input>
     <span></span>
     <label>Account Holder Name</label>
     </div>
     <div className='tf'>
     <input type="text" name="account_number" style={{color:'white'}} required></input>
     <span></span>
     <label>Account Number</label>
     </div>
     <div className='tf'>
     <input type="text" name="ifsc" style={{color:'white'}} required></input>
     <span></span>
     <label>IFSC Code</label>
     </div>
     <div className='tf'>
        <p>Bank Details</p>
        <textarea rows="8" cols="70" required></textarea>
        </div>
     <div className="A_button">
     <input type="submit" value="Create "></input>
     </div>
     </form>
     </div>
     </div> 

   );
}
export default AccountDetails;