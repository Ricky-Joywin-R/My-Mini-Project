import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Homepage from './components/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import About from './components/About';
import FundRaise from './components/FundRaise';
import Donate from './components/Donate';
import MedicalFundRaise from './components/MedicalFundRaise';
import MedicalFundRaise1 from './components/MedicalFundRaise1';
import AccountDetails from './components/Account Details';
import PetFundRaise from './components/PetFundRaise';
import PetFundRaise1 from './components/PetFundRaise1';
import MemorialFundRaise from './components/MemorialFundRaise';
import MemorialFundRaise1 from './components/MemorialFundRaise1';
import EducationFundRaise from './components/EducationFundRaise';
import EducationFundRaise1 from './components/EducationFundRaise1';
function App() {
  return (
   <div>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Login/>}/>
   <Route path="/SignUp" element={<SignUp/>}/>
   <Route path="/Homepage" element={<Homepage/>}/>
   <Route path="/about" element={<About/>}/>
   <Route path="/FundRaise" element={<FundRaise/>}/>
   <Route path="/Donate" element={<Donate/>}/>
   <Route path="/MedicalFundRaise" element={<MedicalFundRaise/>}/>
   <Route path="/MedicalFundRaise1" element={<MedicalFundRaise1/>}/>
   <Route path="/AccountDetails" element={<AccountDetails/>}/>
   <Route path="/PetFundRaise" element={<PetFundRaise/>}/>
   <Route path="/PetFundRaise1" element={<PetFundRaise1/>}/> 
   <Route path="/MemorialFundRaise" element={<MemorialFundRaise/>}/> 
   <Route path="/MemorialFundRaise1" element={<MemorialFundRaise1/>}/> 
   <Route path="/EducationFundRaise" element={<EducationFundRaise/>}/> 
   <Route path="/EducationFundRaise1" element={<EducationFundRaise1/>}/> 

   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
