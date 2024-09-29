import React from "react";
import { getImageUrl } from "./getImageUrl.js";
import "./Card.css";
import Details from "./Details.js"

 
const Card = ({ item }) => {            
          
  return (
    
    <div className="row  g-0 kard">
        <div  className="card pb-0" >
            {item.map((Val) => {
                return (         
                  
                  <Details  name= {Val.name} location ={Val.location} day ={Val.day} schedule = {Val.schedule} imageId= {Val.imageId }/>
              
            );
          })}
        </div>
    </div>    
  );
}
 
export default Card;