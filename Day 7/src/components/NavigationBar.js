import './NvigationBar.css';
import {Link} from 'react-router-dom';
const Navbar=()=>{
    return(
        <nav className="navbar">
        <ul className="navbar-items">
        <li><Link to="/Homepage">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/FundRaise">FundRaise</Link></li>
        <li><Link to="/Donate">Donate</Link></li>
        </ul>
        </nav>
    );
};
export default Navbar;