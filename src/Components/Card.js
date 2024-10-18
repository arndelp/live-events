import React from "react";
import "../style/Card.css";
import Details from "./Details.js"

{/*Utilisation de la méthode map() pour transformer les donnée de {item} en tableau [Val] */}
const Card = ({ item }) => {            
          
  return (
    
    <div className="row  g-0 kard">
        <div  className="cardProg pb-0" >
            {item.map((Val) => {
                return (   
                        
   /*Appel du composant Details avec ses props */               
                  <Details  name= {Val.name} 
                            location ={Val.location} 
                            day ={Val.day} 
                            schedule = {Val.schedule} 
                            imageId= {Val.imageId }/>                 
              
            );
          })}
        </div>
    </div>    
  );
}
 
export default Card;