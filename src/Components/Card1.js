import React from 'react';
import "./Card.css";


function Card() {

 
    

    return ( 
      <div class='row kard'>
      <div class="card mb-3 " >
  <div class="row g-0">
    <div class="col-3">
    <img src='../assets/vignette1.jpg' alt="vignette1" className="logoSizeM" />
      
    </div>
    <div class="col-9">
      <div class="card-body">
        <h5 class="card-title">Concert 1</h5>
        <p class="card-text">Scène principale</p>
        <p class="card-text"><small class="text-body-secondary">18:00 - 19:00</small></p>
      </div>
    </div>
  </div>
</div>
</div>
      )

}

export default Card;