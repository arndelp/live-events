import "./Billet.css";
import {Link } from "react-router-dom";



function Billet() {   
  return ( 
        
    <div className='col'>
      <Link to="/Billetterie">
        <button className="billet"><span className="blink">BILLETTERIE</span></button>
      </Link>
    </div>

      )
}

export default Billet;