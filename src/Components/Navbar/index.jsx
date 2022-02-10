import { Link } from "react-router-dom";
import Theme from "../Theme";
import './navbar.css';


function Navbar() {
  
    return (
    <nav>
        <div className="link-nav">
           <Link to="/" className='link'> Home</Link>
        </div>
        <div className="link-nav">
           <Link to="/about" className='link'> L'agence</Link>
        </div>
        <div className="link-nav">
          <Link to="/works" className='link'> Projets</Link>
        </div>
        <div className="link-nav">
          <Theme/>
        </div>
    </nav>
    )
}

export default Navbar;