import React from 'react';
import "./Card.css";
import FilterD1S1 from "./Filters/FilterD1S1"
import { Link } from "react-router-dom";



function Card() {
    

    return ( 
      <Link to="/Programmation">
      <div className='row  g-0 kard'>
        <div className="card  pb-0">
        <FilterD1S1 />
        </div>
       
      </div>
      </Link>
      )

}

export default Card;