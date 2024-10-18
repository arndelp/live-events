import React from "react";
import { useState, useEffect } from "react";
import "../style/Buttons.css";

{/** FIltre des données */}
const Buttons = ({ filterItemLoc,filterItemDay,filterItemSch, setItem, dayItems, locItems, schItems  }) => {
  {/*concerts est initialement vide*/}
  const [concerts, setConcerts] = useState([])
{/*envoi une requête et récupération des données dans 'dataConcerts.json' puis les stockent dans concerts avec setConcerts*/}
  useEffect(()=>{
    fetch('dataConcerts.json')
    .then(response=>response.json())
    .then(data=>setConcerts(data.concerts))
    .catch(error => console.log(error))
  },[]);

  return (

    <>

    {/**MEnu déroulant filtrant le jour du concert */}
    <div  className=" row">
      <div className="col-lg-2 offset-lg-5" >
        <h6>Filtrer par date:</h6>
      </div>
      <div className="col-1 Drop">
        <select>         
          {dayItems.map((Val, id) => {          
            
            return (
              <option
                className="btn-white text-black p-1 px-2 mx-5 btn fw-bold" 
                /*Appel de la fonction  filtre par jour lors du click */
                onClick={() => filterItemDay(Val)}
                key={id}             
              >
                {/*Liste des options possible */}
                {Val}
              </option>
            );
          })}
            {/*Ajout de l'option All (pas de filtre), lors du click affichage de tout les concerts du JSON*/}
            <option
              className="btn-white text-black p-1 px-3 mx-5 fw-bold btn"
              onClick={() => setItem(concerts)}          
            >
            All
          </option>    
        </select> 
      </div>
    </div>



{/*FIltre par lieu */}
    <div className="row">
      <div className="col-lg-2 offset-lg-5">
          <h6>Filtrer par lieu:</h6>
      </div>
      <div className="col-1 Drop">
        <select  label="Scène">
          {locItems.map((Val, id) => {
         
          return (
            <option
              className="btn-white text-black p-1 px-2 mx-5 btn fw-bold"
              onClick={() => filterItemLoc(Val)}
              key={id}              
            >
              {Val}
            </option>
          );
        })}
            <option
              className="btn-white text-black p-1 px-3 mx-5 fw-bold btn"
              onClick={() => setItem(concerts)}
            >
              All
            </option>    
        </select>       
      </div>
    </div>



{/*Filtre par horaire */}
    <div className="row">
      <div className="col-lg-2 offset-lg-5">
        <h6>Filtrer par horaire:</h6>
      </div>
      <div className="col-1 Drop">
        <select>
          { schItems.map((Val, id) => {          
            
            return (
              <option
                className="btn-white text-black p-1 px-2 mx-5 btn fw-bold"
                onClick={() => filterItemSch(Val) }
                key={id}
              >
                {Val}
              </option>
            );
          })}
              <option
                className="btn-white text-black p-1 px-3 mx-5 fw-bold btn"
                onClick={() => setItem(concerts)}
              >
                All
              </option>    
        </select>       
      </div>
    </div>
    </>
  );
};

export default Buttons;